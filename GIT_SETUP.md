# Git Setup Guide for ShopZone

## Current Issue
Your git remote is set to a placeholder URL: `https://github.com/YOUR_USERNAME/shopzone.git`

## Solution Options

### Option 1: Fix the Remote URL (Recommended)

#### Step 1: Remove the incorrect remote
```bash
git remote remove origin
```

#### Step 2: Create a GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `shopzone` (or any name you prefer)
3. **Visibility**: Public or Private (your choice)
4. **DO NOT** check "Initialize with README" (you already have files)
5. Click **"Create repository"**

#### Step 3: Copy Your Repository URL

After creating, GitHub will show you a URL like:
- `https://github.com/YOUR_ACTUAL_USERNAME/shopzone.git`
- OR `git@github.com:YOUR_ACTUAL_USERNAME/shopzone.git`

#### Step 4: Add the Correct Remote

Replace `YOUR_ACTUAL_USERNAME` with your real GitHub username:

```bash
git remote add origin https://github.com/YOUR_ACTUAL_USERNAME/shopzone.git
```

#### Step 5: Verify Remote
```bash
git remote -v
```

#### Step 6: Push Your Code
```bash
git add .
git commit -m "Initial commit - ShopZone e-commerce app"
git push -u origin main
```

---

### Option 2: Delete Git Repo and Start Fresh

If you want to completely remove git and start over:

#### Step 1: Remove Git Remote
```bash
git remote remove origin
```

#### Step 2: Delete .git Folder (Removes all git history)

**In PowerShell:**
```powershell
Remove-Item -Recurse -Force .git
```

**OR manually:**
- Close VSCode
- In File Explorer, go to: `c:\Users\mahen\OneDrive\Desktop\task 6`
- Enable "Show hidden files" (View → Hidden items)
- Delete the `.git` folder
- Reopen VSCode

#### Step 3: Initialize Fresh Git Repo
```bash
git init
git add .
git commit -m "Initial commit - ShopZone e-commerce app"
```

#### Step 4: Create GitHub Repo and Push
Follow Option 1, Steps 2-6 above.

---

## Quick Fix Commands

### Remove Incorrect Remote
```bash
git remote remove origin
```

### Check Current Remotes
```bash
git remote -v
```

### Add Correct Remote (replace YOUR_USERNAME)
```bash
git remote add origin https://github.com/YOUR_USERNAME/shopzone.git
```

### Push to GitHub
```bash
git push -u origin main
```

---

## Troubleshooting

### Issue: "Repository not found"
- **Cause**: Wrong username in URL or repo doesn't exist
- **Fix**: Create the repo on GitHub first, then use the exact URL GitHub gives you

### Issue: "Permission denied"
- **Cause**: Not authenticated with GitHub
- **Fix**: Use GitHub Desktop or authenticate via:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### Issue: "Lock file" error
- **Fix**: Delete the lock file:
  ```bash
  Remove-Item .git/index.lock -Force
  ```

---

## Need Help?

1. **What's your GitHub username?** - I can help you set the exact URL
2. **Do you have a GitHub account?** - If not, create one at github.com
3. **Want to use GitHub Desktop?** - Easier GUI option instead of command line
