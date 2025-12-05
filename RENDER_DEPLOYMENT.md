# 🚀 MERN Task Manager - Render Deployment Guide

## Complete Setup for Render.com Deployment

Your MERN application is now configured for deployment on Render.com. Follow this guide to deploy successfully.

---

## 📋 Pre-Deployment Checklist

- [ ] GitHub repository created and pushed
- [ ] MongoDB Atlas account created with cluster
- [ ] Render account created
- [ ] Environment variables documented
- [ ] Application tested locally
- [ ] All dependencies updated

---

## Step 1: Prepare MongoDB Atlas

### 1.1 Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up or login
3. Create a new project

### 1.2 Create a Cluster
1. Click "Create a Deployment"
2. Choose "M0 (Free)" tier
3. Select your region (closest to your users)
4. Click "Create Deployment"

### 1.3 Create Database User
1. Go to "Security" → "Database Access"
2. Click "Add New Database User"
3. Set username and password
4. Select "Scram (SHA-1)" authentication
5. Add user

### 1.4 Get Connection String
1. Go to "Deployment" → "Database"
2. Click "Connect"
3. Choose "Drivers"
4. Copy the connection string
5. Replace `<username>`, `<password>`, and database name

**Example:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
```

---

## Step 2: Push Code to GitHub

### 2.1 Initialize Git Repository
```bash
cd c:\Users\HP\OneDrive\Desktop\exp12
git init
git add .
git commit -m "Initial MERN app commit"
```

### 2.2 Create GitHub Repository
1. Go to https://github.com/new
2. Create new repository
3. Name it "mern-task-manager" (or your choice)
4. Don't initialize with README
5. Click "Create Repository"

### 2.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/mern-task-manager.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy on Render

### 3.1 Connect Render to GitHub
1. Go to https://render.com
2. Sign up with GitHub (recommended)
3. Click "Connect your GitHub account"

### 3.2 Create New Web Service
1. Go to Dashboard
2. Click "New +"
3. Select "Web Service"
4. Connect your GitHub repository

### 3.3 Configure Service
**Fill in the following:**

| Field | Value |
|-------|-------|
| **Name** | mern-task-manager |
| **Environment** | Node |
| **Region** | Select closest region |
| **Branch** | main |
| **Build Command** | npm install && npm run build |
| **Start Command** | npm start |
| **Plan** | Free (or Starter) |

### 3.4 Set Environment Variables
Click "Advanced" and add these variables:

```
NODE_ENV = production
MONGODB_URI = mongodb+srv://username:password@cluster.xxxxx.mongodb.net/mern-app?retryWrites=true&w=majority
JWT_SECRET = your_long_random_secret_key_here
PORT = 10000
FRONTEND_URL = https://your-app-name.onrender.com
```

**Get your Render URL after deployment:**
- Render assigns a URL like: `https://your-app-name.onrender.com`
- Update `FRONTEND_URL` after seeing your assigned URL

---

## Step 4: Deploy

### 4.1 Create Service
1. Click "Create Web Service"
2. Render will start building automatically
3. Wait for deployment (usually 2-3 minutes)

### 4.2 Monitor Deployment
1. Watch the build logs in the Render dashboard
2. Check for any errors
3. When complete, you'll see "Live" status

### 4.3 Access Your App
Once deployed, visit: `https://your-app-name.onrender.com`

---

## 🔧 Configuration Files Explained

### Procfile
```
web: npm run server
```
- Tells Render how to start your application

### render.yaml
```yaml
buildCommand: "npm install && npm run build"
startCommand: "npm start"
```
- YAML configuration for Render deployment
- Specifies build and start commands
- Sets environment variables

### .nvmrc
```
runtime: node-18
```
- Specifies Node.js version to use
- Ensures consistency across environments

---

## 📦 Build Process on Render

When you push to GitHub, Render will:

1. **Pull your code** from GitHub
2. **Install dependencies** in root directory
3. **Build React app** (creates /client/build)
4. **Start Node server** on port 10000
5. **Serve React app** and API from same URL

---

## 🚀 First Deploy Troubleshooting

### Build Fails
**Check logs for errors:**
```
Look for npm error messages in Render logs
Usually package.json issues or missing dependencies
```

### App crashes after deploy
**Common causes:**
- Missing environment variables
- MongoDB connection string incorrect
- Port configuration issue

**Fix:**
1. Check Render logs
2. Verify environment variables
3. Test MongoDB connection locally

### Routes return 404
**Solution:**
- React routes are not served
- Ensure server.js has catch-all route
- Check build folder exists

---

## 📊 Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| NODE_ENV | Production flag | production |
| MONGODB_URI | Database connection | mongodb+srv://... |
| JWT_SECRET | Token signing key | your-secret-key-123 |
| PORT | Server port | 10000 |
| FRONTEND_URL | Frontend domain | https://your-app.onrender.com |

---

## 🔐 Security Best Practices

### JWT_SECRET
- Use a strong, random string (minimum 32 characters)
- Example: Generate with `openssl rand -base64 32`
- Never commit to GitHub
- Keep in Render environment variables

### MongoDB Credentials
- Create dedicated database user for Render
- Use strong passwords
- Restrict IP access if possible

### CORS Configuration
- Set FRONTEND_URL to your exact Render domain
- Don't use * in production

---

## 📈 Monitoring & Maintenance

### View Logs
1. Go to Render dashboard
2. Select your service
3. Click "Logs" tab
4. Monitor for errors

### Update Code
1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub
4. Render auto-deploys
5. Usually takes 2-3 minutes

### Restart Service
1. Go to Render dashboard
2. Select your service
3. Click "Manual Deploy"
4. Select branch to deploy

---

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module"
**Solution:**
```bash
# Locally run
npm install
cd server && npm install
cd ../client && npm install
```
Then push to GitHub

### Issue: "Port already in use"
**Solution:**
- Render uses port 10000
- Application handles this automatically
- No action needed

### Issue: "CORS errors"
**Solution:**
1. Update FRONTEND_URL env variable
2. Update MongoDB connection string
3. Restart service

### Issue: "MongoDB connection timeout"
**Solution:**
1. Check MongoDB Atlas is running
2. Verify connection string
3. Check IP whitelist on Atlas
4. On Atlas, add 0.0.0.0/0 for any IP

### Issue: "Blank page after deploy"
**Solution:**
1. Check browser console for errors
2. Verify API endpoint is correct
3. Check FRONTEND_URL in env vars
4. Review Render logs

---

## 🔄 Continuous Deployment

### Auto-Deploy on Push
- Render automatically deploys when you push to GitHub
- No additional configuration needed
- Usually takes 2-3 minutes

### Deploy Specific Branch
1. Go to Render dashboard
2. Change "Branch" setting
3. Confirm deployment

### Disable Auto-Deploy
1. Go to settings
2. Disable "Auto-Deploy"
3. Use "Manual Deploy" button instead

---

## 💰 Pricing & Limits (Free Plan)

| Limit | Free Plan |
|-------|-----------|
| Services | 2 static + 1 web |
| Runtime | Node.js available |
| Bandwidth | Unlimited |
| Sleep | 15 min of inactivity |
| Deployments | Unlimited |

**Note:** Free tier services spin down after 15 min of inactivity. First request will take longer to wake up.

---

## 🎯 Post-Deployment Checklist

- [ ] Application loads successfully
- [ ] Login/register works
- [ ] Task creation works
- [ ] Task editing works
- [ ] Task deletion works
- [ ] API endpoints accessible
- [ ] No console errors
- [ ] Database persists data
- [ ] Sessions persist across reloads

---

## 🚀 Next Steps

### After Successful Deployment
1. Test all features thoroughly
2. Share your application URL
3. Monitor logs for errors
4. Set up custom domain (optional)
5. Add monitoring alerts (optional)

### Custom Domain (Optional)
1. Go to Render dashboard
2. Click "Settings"
3. Add custom domain
4. Follow DNS instructions

### Performance Optimization
- Monitor Render metrics
- Add caching if needed
- Optimize database queries
- Consider upgrading from free tier for production

---

## 📞 Need Help?

### Render Documentation
- https://render.com/docs

### MongoDB Atlas Help
- https://docs.atlas.mongodb.com/

### GitHub Issues
- Review error messages in Render logs
- Check GitHub repository

---

## 🎉 Deployment Complete!

Your MERN Task Manager is now live on Render!

**Your Application URL:**
```
https://your-app-name.onrender.com
```

---

**Deployment Guide Version**: 1.0  
**Last Updated**: December 2025  
**Status**: Ready for Production

Good luck with your deployment! 🚀
