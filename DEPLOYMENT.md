# How to Deploy ShopZone to Vercel

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)

## Method 1: Deploy via Vercel Website (Recommended - Easiest)

### Step 1: Push Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ShopZone e-commerce app"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it (e.g., "shopzone")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/shopzone.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign up/Login (you can use GitHub to sign in)

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository (shopzone)
   - Click "Import"

3. **Configure project**:
   - **Framework Preset**: Create React App (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-fill)
   - **Output Directory**: `build` (should auto-fill)
   - **Install Command**: `npm install` (should auto-fill)

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your app will be live at: `https://your-project-name.vercel.app`

### Step 3: Verify Deployment

- The `vercel.json` file is already configured correctly
- It handles SPA routing (prevents 404 errors on refresh)
- Test your deployed app:
  - Navigate to different routes (`/shop`, `/product/1`, etc.)
  - Refresh the page - it should work without 404 errors

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```
Follow the prompts to authenticate.

### Step 3: Deploy

From your project directory:

```bash
cd "c:\Users\mahen\OneDrive\Desktop\task 6"
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **Project name?** → shopzone (or your preferred name)
- **Directory?** → `./` (current directory)
- **Override settings?** → No

### Step 4: Production Deploy

For production deployment:

```bash
vercel --prod
```

---

## Important Notes

### ✅ Your vercel.json is Already Configured

The `vercel.json` file includes:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This ensures:
- All routes redirect to `/` (index.html)
- Prevents 404 errors when refreshing pages
- Works perfectly for React Router SPAs

### 🔍 Testing After Deployment

1. **Test all routes**:
   - `/` - Home page
   - `/shop` - Products page
   - `/product/1` - Product details
   - `/cart` - Shopping cart
   - `/contact` - Contact page
   - `/login` - Login page
   - `/checkout` - Checkout (should redirect if not logged in)

2. **Test SPA routing**:
   - Navigate between pages
   - Refresh the page on any route
   - Should NOT show 404 error

3. **Test cart persistence**:
   - Add items to cart
   - Refresh page
   - Cart should still have items (localStorage)

### 🐛 Common Issues & Solutions

**Issue**: 404 error on refresh
- **Solution**: Your `vercel.json` already handles this. Make sure it's in the root directory.

**Issue**: Build fails
- **Solution**: Check that all dependencies are in `package.json`. Run `npm install` locally first.

**Issue**: API calls fail
- **Solution**: DummyJSON API should work fine. If issues occur, check browser console for CORS errors.

**Issue**: Cart disappears on refresh
- **Solution**: This shouldn't happen - localStorage persists. Check browser console for errors.

### 📝 Environment Variables (If Needed)

If you need to add environment variables later:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables as needed
3. Redeploy

---

## Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Build completed successfully
- [ ] All routes tested
- [ ] Cart persistence verified
- [ ] Protected routes working (checkout redirects when not logged in)

---

## Your Deployment URL

After deployment, Vercel will provide you with:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: For each commit/pull request

You can share this URL in your submission!
