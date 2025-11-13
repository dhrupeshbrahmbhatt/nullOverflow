# GitHub Actions Deployment Setup Guide

This guide will help you set up automatic deployment to Render with email notifications.

## 📋 Prerequisites

1. A GitHub account with your repository
2. A Render account (https://render.com)
3. A Gmail account for sending notification emails

---

## 🔧 Step 1: Set Up Render

### 1.1 Create a New Web Service on Render

1. Go to https://render.com and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `nulloverflow` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npx serve -s dist -l 3000`
   - **Plan**: Free (or upgrade as needed)

### 1.2 Get Your Render Deploy Hook URL

1. After creating the service, go to **Settings** → **Deploy Hook**
2. Click **"Create Deploy Hook"**
3. Copy the webhook URL (looks like: `https://api.render.com/deploy/srv-xxxxx?key=yyyyy`)
4. Save this URL - you'll need it for GitHub Secrets

---

## 🔐 Step 2: Set Up GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add the following secrets:

### Required Secrets:

1. **`RENDER_DEPLOY_HOOK_URL`**
   - Value: The webhook URL from Render (Step 1.2)
   - Example: `https://api.render.com/deploy/srv-xxxxx?key=yyyyy`

2. **`MAIL_USERNAME`**
   - Value: Your Gmail address
   - Example: `your-email@gmail.com`

3. **`MAIL_PASSWORD`**
   - Value: Your Gmail **App Password** (NOT your regular password)
   - How to get it:
     1. Go to https://myaccount.google.com/security
     2. Enable **2-Step Verification** (required)
     3. Go to **App passwords** (https://myaccount.google.com/apppasswords)
     4. Create a new app password
     5. Select **Mail** and **Other (Custom name)**
     6. Name it: "GitHub Actions"
     7. Copy the 16-character password
     8. Use this as `MAIL_PASSWORD`

4. **`MAIL_TO`**
   - Value: Email address where you want to receive notifications
   - Example: `your-email@gmail.com` (can be the same or different)

---

## 📦 Step 3: Install Required Dependencies

Add the `serve` package to serve your built app on Render:

```bash
npm install --save-dev serve
```

---

## 📝 Step 4: Update package.json Scripts

Make sure your `package.json` has these scripts:

```json
{
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

---

## 🚀 Step 5: Test the Workflow

### Test Locally First:
```bash
# Install dependencies
npm ci

# Run linter
npm run lint

# Build the project
npm run build

# Test the build locally
npx serve -s dist -l 3000
```

### Test on GitHub:
1. Commit and push your changes:
```bash
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

2. Go to your GitHub repository → **Actions** tab
3. Watch the workflow run
4. Check your email for notifications

---

## 📧 Email Notifications

You will receive emails for:

### ❌ Build Failures
- Sent when: Code fails to build or lint
- Includes: Error details, commit info, and workflow link

### ❌ Deployment Failures
- Sent when: Render deployment fails
- Includes: Error message and deployment details

### ✅ Successful Deployments
- Sent when: Deployment succeeds
- Includes: Commit details and Render URL

---

## 🔍 Troubleshooting

### Build Fails with "npm ci" Error
- Make sure `package-lock.json` is committed to your repository
- Try deleting `node_modules` and running `npm install` locally

### Email Not Sending
- Verify Gmail App Password is correct (not regular password)
- Check that 2-Step Verification is enabled
- Make sure secrets are spelled exactly as shown above

### Render Deployment Fails
- Check that the Deploy Hook URL is correct
- Verify build and start commands in `render.yaml`
- Check Render dashboard for detailed logs

### Workflow Doesn't Trigger
- Make sure you're pushing to the `main` branch
- Check `.github/workflows/deploy-to-render.yml` exists
- Verify the workflow file has correct YAML syntax

---

## 🎯 Workflow Behavior

### On Push to Main:
1. ✅ Checkout code
2. ✅ Install dependencies
3. ✅ Run linter (continues even if warnings)
4. ✅ Build project
5. ✅ Upload build artifacts
6. ✅ Trigger Render deployment
7. 📧 Send success/failure email

### On Pull Request to Main:
1. ✅ Checkout code
2. ✅ Install dependencies
3. ✅ Run linter
4. ✅ Build project
5. ❌ Does NOT deploy (only validates)
6. 📧 Sends email only if build fails

---

## 📊 Monitoring Deployments

### GitHub Actions:
- Go to your repository → **Actions** tab
- View all workflow runs
- Click on any run to see detailed logs

### Render Dashboard:
- Go to https://dashboard.render.com
- Click on your service
- View **Events** for deployment history
- Check **Logs** for runtime logs

---

## 🔒 Security Best Practices

1. ✅ Never commit secrets to your repository
2. ✅ Use GitHub Secrets for all sensitive data
3. ✅ Use Gmail App Passwords (not regular passwords)
4. ✅ Rotate secrets periodically
5. ✅ Review workflow permissions regularly

---

## 🎉 You're All Set!

Your repository is now configured for automatic deployment to Render with error notifications!

Every time you push to `main`, your app will:
1. Build automatically
2. Deploy to Render
3. Send you an email notification

Happy deploying! 🚀
