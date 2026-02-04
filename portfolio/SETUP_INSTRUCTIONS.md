# Vercel CLI Setup Instructions

## 🔐 Step 1: Login to Vercel

Run this command in your terminal:

```bash
vercel login
```

This will:
1. Open your browser to login to Vercel
2. Connect to your GitHub/GitLab/Bitbucket account
3. Store authentication credentials locally

## 🚀 Step 2: Start Local Development

After logging in, run:

```bash
npm run dev:vercel
```

This will:
- Start your Vite frontend on http://localhost:3000
- Serve your API functions from `/api/`
- Use your Supabase database for real data
- Provide production-like environment

## 🧪 Step 3: Test the Complete Workflow

1. **Open browser to http://localhost:3000**
2. **Enter your name** (e.g., "wilker") and click Continue
3. **Verify no JSON errors** - name should save successfully
4. **Check visitor count** appears in navbar
5. **Test rate limiting** - try rapid submissions (blocked after 5)

## 🔧 Alternative: If You Prefer Not to Login

If you don't want to create a Vercel account yet, I can create a mock API for local testing only. However, logging in to Vercel is free and gives you the complete development experience.

## 📞 Next Steps After Testing

1. **If everything works locally** - Ready for deployment
2. **Deploy to Vercel** - Run `npm run deploy`
3. **Set production environment variables** - Run `vercel env add SUPABASE_URL`

## 🎯 Expected Results

After completing this setup:
- ✅ No more "Unexpected end of JSON input" error
- ✅ Real visitor tracking with Supabase
- ✅ Live visitor count in navbar
- ✅ Rate limiting functionality
- ✅ Professional local development environment

## 🔍 Troubleshooting

If you still get errors:
1. **Check browser console** for specific error messages
2. **Verify Vercel CLI is running** on port 3000
3. **Check Supabase tables are created** correctly
4. **Ensure you're using the correct URL** (http://localhost:3000, not :5174)

---

**Ready to proceed with `vercel login`?** This is the final step to fix your local development issue!