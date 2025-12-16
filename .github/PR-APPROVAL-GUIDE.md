# PR Approval Workflow Guide

This document explains how the PR approval workflow works and how to set it up in your GitHub environment.

## Overview

The PR approval workflow provides a manual approval process for pull requests targeting the `main` branch. Instead of direct merges, PRs create an approval issue where authorized users must comment to approve or reject the merge.

## How It Works

### 1. PR Created to Main
When a pull request is opened targeting the `main` branch:
- An **approval issue** is automatically created
- The issue contains PR details (number, title, author, description)
- The PR author receives a comment explaining the approval process
- The issue is assigned to authorized approvers

### 2. Approval Process
To approve a PR, an authorized user comments on the **approval issue** (not the PR):
- `approved` or `approve` - Merges the PR and closes the issue
- `rejected` or `reject` - Marks the PR as needing changes

### 3. Automatic Actions
Upon approval:
- PR is automatically merged into `main`
- Approval issue is closed
- Success comment is added to the issue
- Email notification is sent (if configured)

Upon rejection:
- Comment is added to the PR explaining rejection
- Issue remains open for further discussion

## GitHub Setup

### Step 1: Create Required Labels
Create these labels in your repository (Settings > Labels):

| Label | Description | Suggested Color |
|-------|-------------|-----------------|
| `approval-required` | PR needs manual approval | `#d93f0b` (red) |
| `pr-review` | PR review related | `#0075ca` (blue) |

### Step 2: Repository Permissions
Ensure the workflow has proper permissions. In your repository:
1. Go to **Settings** > **Actions** > **General**
2. Under "Workflow permissions", select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**

### Step 3: Configure Email Notifications (Optional)
To enable email notifications on merge, add these secrets in **Settings** > **Secrets and variables** > **Actions**:

| Secret | Description |
|--------|-------------|
| `SMTP_SERVER` | Your SMTP server address (e.g., `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (e.g., `587` for TLS) |
| `SMTP_USERNAME` | SMTP authentication username |
| `SMTP_PASSWORD` | SMTP authentication password or app password |
| `SENDER_EMAIL` | Email address to send from |
| `RECIPIENT_EMAIL` | Email address to receive notifications |

### Step 4: Create Environment (For Email)
If using email notifications:
1. Go to **Settings** > **Environments**
2. Create an environment named `prod`
3. Add the SMTP secrets to this environment

## Authorized Approvers

Currently, the following users can approve PRs:
- **@dhrupeshbrahmbhatt**

To add more approvers, edit the workflow file at `.github/workflows/pr-approval.yml`:
1. Update `AUTHORIZED_USERS` variable (space-separated list)
2. Update the issue body text listing approvers
3. Update the `--assignee` flag in the issue creation step

## Workflow Triggers

The workflow runs on:
- `pull_request` events: `opened`, `synchronize`, `reopened` to `main`
- `issue_comment` events: `created` (to detect approval comments)

## File Location

The workflow file is located at:
```
.github/workflows/pr-approval.yml
```

## Troubleshooting

### Issue not created
- Ensure the PR targets the `main` branch
- Check that the workflow has write permissions
- Verify labels exist in the repository

### Approval not working
- Comment must be exactly `approved`, `approve`, `rejected`, or `reject` (case-insensitive)
- Comment must be on the **approval issue**, not the PR
- Commenter must be in the `AUTHORIZED_USERS` list

### Email not sending
- Verify all SMTP secrets are configured correctly
- Check that the `prod` environment exists
- For Gmail, use an App Password instead of your regular password

## Security Notes

- Only authorized users can trigger merges
- Unauthorized approval attempts are logged and commented
- The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub Actions
