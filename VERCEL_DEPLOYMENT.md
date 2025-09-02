# Deploying to Vercel

This guide will walk you through deploying your Portfolio Generator application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. All environment variables ready for configuration

## Step 1: Connect Your Repository

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Click **Add New** > **Project**
3. Import your Git repository
4. Select the repository containing your Portfolio Generator application

## Step 2: Configure Project Settings

Vercel will automatically detect that you're using Next.js, so most settings will be pre-configured correctly.

1. **Project Name**: Enter a name for your project (e.g., "portfolio-generator")
2. **Framework Preset**: Ensure "Next.js" is selected (should be automatic)
3. **Root Directory**: Leave as "/" unless your project is in a subdirectory
4. **Build and Output Settings**: Leave as default

## Step 3: Configure Environment Variables

Click on the **Environment Variables** section and add the following variables:

### Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_firebase_database_url
```

### NextAuth Configuration
```
NEXTAUTH_SECRET=your_generated_nextauth_secret
NEXTAUTH_URL=https://your-vercel-deployment-url.vercel.app
```

### Google OAuth
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Gemini API (if used)
```
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_gemini_model
```

## Step 4: Deploy

1. Click **Deploy**
2. Wait for the build and deployment to complete
3. Once deployed, Vercel will provide you with a URL for your application

## Step 5: Update Authentication Settings

### Update NextAuth URL

After deployment, you need to update the `NEXTAUTH_URL` environment variable with your actual Vercel deployment URL:

1. Go to your project in the Vercel dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Update `NEXTAUTH_URL` to match your deployment URL (e.g., `https://your-app.vercel.app`)
4. Click **Save**

### Update Google OAuth Redirect URIs

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to **APIs & Services** > **Credentials**
4. Edit your OAuth 2.0 Client ID
5. Add your Vercel deployment URL to the **Authorized JavaScript origins**:
   ```
   https://your-app.vercel.app
   ```
6. Add your Vercel deployment callback URL to the **Authorized redirect URIs**:
   ```
   https://your-app.vercel.app/api/auth/callback/google
   ```
7. Click **Save**

## Step 6: Update Firebase Settings

### Add Authorized Domain

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** > **Settings** > **Authorized domains**
4. Add your Vercel deployment domain (e.g., `your-app.vercel.app`)
5. Click **Add**

## Step 7: Test Your Deployment

1. Visit your Vercel deployment URL
2. Test the authentication flow
3. Verify that all features are working correctly

## Troubleshooting

### Authentication Issues

- Ensure `NEXTAUTH_URL` is set correctly
- Verify Google OAuth redirect URIs are configured properly
- Check that your Firebase domain is authorized

### Database Connection Issues

- Verify Firebase environment variables are correct
- Check Firebase security rules
- Ensure your IP is not blocked by Firebase security settings

### Build Failures

- Check the build logs in Vercel
- Ensure all dependencies are correctly installed
- Verify that your code works locally before deploying

## Continuous Deployment

Vercel automatically sets up continuous deployment from your Git repository. Any changes pushed to your main branch will trigger a new deployment.

## Custom Domains

To use a custom domain:

1. Go to your project in the Vercel dashboard
2. Navigate to **Settings** > **Domains**
3. Add your custom domain
4. Follow the instructions to configure DNS settings

## Monitoring and Analytics

Vercel provides built-in analytics and monitoring tools:

1. Go to your project in the Vercel dashboard
2. Navigate to **Analytics** to view performance metrics
3. Use **Logs** to troubleshoot issues

## Conclusion

Your Portfolio Generator application is now deployed on Vercel! You can continue to develop locally and push changes to your repository for automatic deployment.