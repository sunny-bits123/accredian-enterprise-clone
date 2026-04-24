# 🚀 Deployment Guide

Complete step-by-step guide to deploy your Accredian Enterprise Landing Page to Vercel.

---

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ GitHub account (free)
- ✅ Vercel account (free)
- ✅ Local Git setup
- ✅ Node.js 18+ installed
- ✅ Project code ready

---

## Step 1: Prepare Your Project

### 1.1 Clean Up Your Code

```bash
# Remove node_modules (optional for cleaner git)
rm -rf node_modules

# Create .gitignore
cat > .gitignore << EOF
# Dependencies
node_modules/
.npm
.yarn

# Build
.next/
out/
build/
dist/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
EOF
```

### 1.2 Test Build Locally

```bash
# Build the project
npm run build

# Check for errors
npm run lint

# Start production server (optional)
npm start
```

---

## Step 2: Push to GitHub

### 2.1 Initialize Git Repository

```bash
# Initialize if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Accredian Enterprise Landing Page"
```

### 2.2 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `accredian-enterprise-clone`
3. Description: `Enterprise landing page built with Next.js, TypeScript, and Tailwind CSS`
4. Choose **Public** (for internship evaluation)
5. Click **Create repository**

### 2.3 Push to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/sunny-bits123/accredian-enterprise-clone.git

# Push to main branch
git branch -M main
git push -u origin main
```

**Verify**: Check your repository on github.com

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your repositories

### 3.2 Import Project

1. After signing in, click **New Project**
2. In "Import Git Repository", paste:
   ```
   https://github.com/sunny-bits123/accredian-enterprise-clone
   ```
3. Click **Import**

### 3.3 Configure Project

**Project Name:**
```
accredian-enterprise-clone
```

**Framework Preset:** 
- Should auto-detect as "Next.js"

**Root Directory:**
- Leave as default (.)

**Build Command:**
- Vercel auto-detects (normally `npm run build`)

**Output Directory:**
- Vercel auto-detects (normally `.next`)

**Environment Variables:**
- Leave empty for now (none required)

### 3.4 Click Deploy

1. Click **Deploy** button
2. Wait for build to complete (2-5 minutes)
3. View deployment logs

**Success!** You'll see:
```
✓ Deployment Complete
```

---

## Step 4: Access Your Live Site

### 4.1 Get Your URL

After deployment completes, Vercel shows your URL:
```
https://accredian-enterprise-clone.vercel.app
```

### 4.2 Custom Domain (Optional)

To add a custom domain:

1. In Vercel dashboard, go to **Settings** > **Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Follow DNS configuration instructions

---

## Step 5: Verify Deployment

### 5.1 Check Functionality

Visit your live site and verify:

- ✅ Page loads without errors
- ✅ Navigation works
- ✅ Mobile responsive (test on phone)
- ✅ All sections visible
- ✅ Form submits successfully
- ✅ No console errors

### 5.2 Check Console

Press `F12` to open DevTools:
- ✅ No red error messages
- ✅ Network requests successful (200 status)
- ✅ Images loading properly

### 5.3 Run Lighthouse Audit

1. In DevTools, go to **Lighthouse** tab
2. Click **Analyze page load**
3. Check scores:
   - ✅ Performance: 90+
   - ✅ Accessibility: 95+
   - ✅ Best Practices: 90+
   - ✅ SEO: 90+

---

## Step 6: Set Up Continuous Deployment

### 6.1 Auto-Deploy on Push

Vercel auto-deploys every push to `main`:

```bash
# Make a change
echo "# Updated" >> README.md

# Commit and push
git add README.md
git commit -m "Update README"
git push origin main
```

Check Vercel dashboard - deployment starts automatically!

### 6.2 Preview URLs

For each pull request, Vercel creates a preview URL:
- Perfect for testing before merging
- Shareable with team members

---

## Troubleshooting

### Issue: Build Fails

**Check Vercel Logs:**
1. Go to Vercel Dashboard
2. Select your project
3. Click **Deployments**
4. Click failed deployment
5. View build logs for errors

**Common Fixes:**
```bash
# Clear cache and rebuild
npm ci
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

### Issue: Environment Variables Needed

If you add environment variables:

1. Go to Vercel Dashboard
2. Project Settings > **Environment Variables**
3. Add variable name and value
4. Trigger new deployment

### Issue: 404 Page Not Found

**Check:**
- ✅ Files are pushed to GitHub
- ✅ Vercel build completed successfully
- ✅ URL is correct

**Solution:**
```bash
# Redeploy
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

### Issue: Slow Performance

**Optimize:**
- ✅ Check Lighthouse report
- ✅ Optimize images
- ✅ Remove unused dependencies
- ✅ Enable caching headers

---

## Monitoring & Analytics

### 6.1 Vercel Analytics

1. Dashboard > Project > **Analytics**
2. View:
   - Page views
   - Core Web Vitals
   - Response times
   - Deployment frequency

### 6.2 Google Analytics (Optional)

```bash
# Install analytics package
npm install @vercel/web-analytics

# Add to layout.tsx
import { Analytics } from "@vercel/web-analytics/react"

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## Updating Your Site

### Making Changes

```bash
# Make changes locally
# Edit files and test with `npm run dev`

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main

# Vercel auto-deploys!
```

### Rolling Back

If something breaks:

```bash
# View deployment history
git log --oneline

# Revert to previous commit
git revert HEAD

# Push to auto-deploy previous version
git push origin main
```

---

## Security Best Practices

### Environment Variables

Never commit secrets to Git:

```bash
# Create .env.local (ignored by git)
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your_secret_key
```

### GitHub Protection Rules

1. Go to Repository Settings > **Branches**
2. Add branch protection for `main`:
   - ✅ Require pull request reviews
   - ✅ Dismiss stale reviews
   - ✅ Require status checks

---

## Production Checklist

Before final submission, verify:

- ✅ Site is live and accessible
- ✅ All links working
- ✅ Form submission working
- ✅ Mobile responsive
- ✅ No console errors
- ✅ Performance good (Lighthouse 90+)
- ✅ GitHub repo updated
- ✅ README complete
- ✅ Documentation done
- ✅ Ready for review

---

## Support & Troubleshooting

### Useful Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

### Getting Help

If issues arise:
1. Check Vercel deployment logs
2. Review GitHub Actions (if configured)
3. Test locally with `npm run dev`
4. Check terminal for error messages

---

## 🎉 Deployment Complete!

Your Accredian Enterprise Landing Page is now live! 

**Next Steps:**
1. ✅ Share your live URL
2. ✅ Get feedback from users
3. ✅ Monitor analytics
4. ✅ Continue improving!

---

**Happy Deploying! 🚀**
