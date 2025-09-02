# Firebase Production Setup for Vercel Deployment

This guide covers the necessary steps to configure Firebase for your production deployment on Vercel.

## Firebase Project Configuration

### 1. Add Authorized Domains

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** > **Settings** > **Authorized domains**
4. Add your Vercel deployment domain:
   ```
   your-app.vercel.app
   ```
5. If you're using a custom domain, add that as well:
   ```
   your-custom-domain.com
   ```
6. Click **Add**

### 2. Update Security Rules

#### Firestore Security Rules

Navigate to **Firestore Database** > **Rules** and update your rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow NextAuth to manage user sessions
    match /__nextauth__/{document=**} {
      allow read, write: if true;
    }
    
    // Allow authenticated users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Resume data rules
    match /users/{userId}/resumes/{resumeId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Default deny
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

#### Storage Security Rules

Navigate to **Storage** > **Rules** and update your rules for production:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow users to read/write their own files
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Default deny
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

#### Realtime Database Rules (if used)

Navigate to **Realtime Database** > **Rules** and update your rules for production:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid",
        "resumes": {
          ".read": "auth != null && auth.uid == $uid",
          ".write": "auth != null && auth.uid == $uid"
        }
      }
    },
    "sessions": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "accounts": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "verificationTokens": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    ".read": false,
    ".write": false
  }
}
```

## Firebase Environment Variables

Ensure these environment variables are set in your Vercel project:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_firebase_database_url
```

## Firebase Admin SDK (Server-Side)

If your application uses the Firebase Admin SDK for server-side operations, you'll need to set up service account credentials in Vercel:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Project settings** > **Service accounts**
4. Click **Generate new private key**
5. Download the JSON file

In Vercel, add the following environment variable:

```
FIREBASE_ADMIN_CREDENTIAL='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
```

Replace the JSON content with your actual service account credentials.

## Performance Optimization

### 1. Firebase SDK Bundling

Ensure you're only importing the Firebase services you need to reduce bundle size:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Only import what you need
```

### 2. Enable Caching

For Firestore, consider enabling offline persistence for better performance:

```javascript
import { enableIndexedDbPersistence } from 'firebase/firestore';

const db = getFirestore();
enableIndexedDbPersistence(db).catch((err) => {
  console.error('Firestore persistence error:', err);
});
```

## Monitoring and Analytics

### 1. Enable Firebase Analytics

Consider enabling Firebase Analytics for production:

```javascript
import { getAnalytics } from 'firebase/analytics';

// Only initialize analytics in the browser and in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  const analytics = getAnalytics(app);
}
```

### 2. Set Up Error Monitoring

Consider enabling Firebase Crashlytics or Performance Monitoring for web:

```javascript
import { getPerformance } from 'firebase/performance';

// Only initialize performance in the browser and in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  const performance = getPerformance(app);
}
```

## Testing Firebase Configuration

After deploying to Vercel, test your Firebase configuration:

1. Test authentication flow
2. Verify data is being saved to Firestore/Realtime Database
3. Check file uploads to Storage
4. Monitor Firebase console for any errors

## Security Best Practices

1. **API Key Restrictions**: In the Firebase Console, go to Project Settings > API keys and restrict your API key to only your Vercel domain
2. **Regular Security Audits**: Periodically review your security rules and access patterns
3. **Monitoring**: Set up Firebase alerts for unusual activity
4. **Data Backups**: Set up regular backups of your Firestore/Realtime Database data

## Conclusion

With these configurations in place, your Firebase project should be properly set up for your production Vercel deployment. Remember to monitor your Firebase usage and costs as your application scales.