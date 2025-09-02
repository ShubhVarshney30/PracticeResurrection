# Production Authentication Setup

This guide covers the specific steps needed to configure authentication for your production deployment on Vercel.

## NextAuth.js Configuration

### 1. Generate a Strong Secret

For production, you need a cryptographically strong secret for NextAuth.js:

```bash
openssl rand -base64 32
```

Use this value for the `NEXTAUTH_SECRET` environment variable in Vercel.

### 2. Set the Correct Production URL

After deploying to Vercel, you'll get a deployment URL (e.g., `https://your-app.vercel.app`). Set this as your `NEXTAUTH_URL` environment variable in Vercel:

```
NEXTAUTH_URL=https://your-app.vercel.app
```

If you're using a custom domain, use that instead:

```
NEXTAUTH_URL=https://your-custom-domain.com
```

## Google OAuth Configuration

### 1. Update Google Cloud Console Settings

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to **APIs & Services** > **Credentials**
4. Edit your OAuth 2.0 Client ID

### 2. Add Authorized JavaScript Origins

Add your Vercel deployment URL to the **Authorized JavaScript origins**:

```
https://your-app.vercel.app
```

If you're using a custom domain, add that as well:

```
https://your-custom-domain.com
```

### 3. Add Authorized Redirect URIs

Add your Vercel deployment callback URL to the **Authorized redirect URIs**:

```
https://your-app.vercel.app/api/auth/callback/google
```

If you're using a custom domain, add that as well:

```
https://your-custom-domain.com/api/auth/callback/google
```

### 4. Save Changes

Click **Save** to apply these changes to your Google OAuth configuration.

## Verifying Authentication Setup

### 1. Test Sign-In Flow

After deployment, test the sign-in flow by:

1. Visiting your deployed application
2. Clicking on the sign-in button
3. Completing the Google OAuth flow
4. Verifying you're redirected back to your application and authenticated

### 2. Check for Common Issues

If authentication isn't working, check for these common issues:

- **Redirect URI Mismatch**: Ensure the redirect URI in Google Cloud Console exactly matches your callback URL
- **Missing Environment Variables**: Verify all required environment variables are set in Vercel
- **CORS Issues**: Check browser console for CORS errors
- **Cookie Issues**: Ensure cookies are being set correctly

### 3. Debug Mode

If you're having issues, you can temporarily enable debug mode by setting:

```
NEXTAUTH_DEBUG=true
```

This will provide more detailed logs in the console. **Remember to disable this in production once issues are resolved.**

## Security Best Practices

### 1. Rotate Secrets Regularly

Regularly rotate your `NEXTAUTH_SECRET` and Google OAuth credentials for enhanced security.

### 2. Use HTTPS

Ensure your application is served over HTTPS (Vercel handles this automatically).

### 3. Set Secure Cookie Options

NextAuth.js automatically sets secure cookie options in production, but verify this is working correctly.

### 4. Implement Rate Limiting

Consider implementing rate limiting for authentication endpoints to prevent brute force attacks.

## Conclusion

With these settings in place, your NextAuth.js authentication should work correctly in your production Vercel deployment. If you encounter any issues, refer to the [NextAuth.js documentation](https://next-auth.js.org/deployment) for additional troubleshooting steps.