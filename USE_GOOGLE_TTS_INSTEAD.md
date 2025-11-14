# 🎤 Use Google Cloud TTS Instead of Azure

## Why Google Cloud TTS?

✅ **FREE tier**: 1M characters/month (more than Azure!)
✅ **You already have Google account** (for Gemini)
✅ **Easy setup**: Same console as Gemini
✅ **High quality**: Natural-sounding voices
✅ **No credit card required** for free tier

---

## Quick Setup (5 minutes)

### Step 1: Go to Google Cloud Console
**URL**: https://console.cloud.google.com/

- Sign in with your Google account (same one you used for Gemini)

### Step 2: Enable Text-to-Speech API
1. In the search bar at top, type: **"Text-to-Speech API"**
2. Click on **"Cloud Text-to-Speech API"**
3. Click **"Enable"** button
4. Wait 30 seconds for activation

### Step 3: Create API Key
1. Go to: https://console.cloud.google.com/apis/credentials
2. Click **"+ CREATE CREDENTIALS"**
3. Select **"API key"**
4. Copy the key that appears
5. Click **"Restrict Key"** (recommended)
6. Under "API restrictions":
   - Select "Restrict key"
   - Check "Cloud Text-to-Speech API"
7. Click **"Save"**

### Step 4: Update .env
```env
GOOGLE_TTS_API_KEY=your_google_tts_key_here
```

---

## I'll Modify the Code for You

Let me update the server code to use Google TTS instead of Azure!
