# Branch Protection Setup Guide

This guide will help you set up branch protection rules to ensure that only you can push directly to `main`, and others must create pull requests.

## Step 1: Enable Branch Protection for `main`

1. Go to your GitHub repository
2. Click on **Settings** (top navigation)
3. Click on **Branches** (left sidebar)
4. Under "Branch protection rules", click **Add rule**

## Step 2: Configure Protection Rules

Fill in the following settings:

### Branch name pattern
```
main
```

### Protect matching branches

**Check these options:**

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: `1`
  - ✅ Dismiss stale pull request approvals when new commits are pushed

- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Add status check: `PR Requirements Check` (from the workflow)

- ✅ **Require conversation resolution before merging**

- ✅ **Do not allow bypassing the above settings**
  - ⚠️ **IMPORTANT:** Under "Allow specified actors to bypass required pull requests", add yourself:
    - Click "Add" → Search for your username (`priteshbrahmbhatt`)
    - This allows you to push directly to main

- ✅ **Restrict who can push to matching branches** (Optional but recommended)
  - Add yourself and any other admins who should have direct push access

## Step 3: Save the Protection Rule

Click **Create** or **Save changes** at the bottom.

## How It Works

### For You (priteshbrahmbhatt)
- ✅ You can push directly to `main`
- ✅ You can merge PRs directly
- ✅ You can approve PRs by commenting "approve"

### For Others
- ❌ Cannot push directly to `main`
- ✅ Must create a pull request
- ⏳ Must wait for you to comment "approve" on their PR
- ✅ PR will auto-merge when you comment "approve"

## Workflow Behavior

1. **When someone creates a PR:**
   - Workflow adds a comment asking for your approval
   - PR waits for your review

2. **When you comment "approve":**
   - Workflow automatically merges the PR
   - A rocket emoji 🚀 reaction is added to your comment

3. **If you create a PR:**
   - You can merge it directly without waiting

## Testing the Setup

1. Ask a collaborator to create a test PR
2. Comment "approve" on the PR
3. The PR should automatically merge

## Customization

To change the authorized user, edit both files:

1. `.github/workflows/pr-approval.yml` - Change `AUTHORIZED_USER: "priteshbrahmbhatt"`
2. This file - Update the username references

## Troubleshooting

**PR doesn't merge after commenting "approve":**
- Make sure you commented exactly "approve" (case insensitive)
- Check that your username matches the one in the workflow file
- Verify the workflow has proper permissions

**Workflow not running:**
- Check the "Actions" tab for error messages
- Ensure GitHub Actions are enabled for your repository
