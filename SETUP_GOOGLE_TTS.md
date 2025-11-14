# 🎤 Setup Google Cloud TTS (Easy & Free!)

## ✅ Why This is Better

- **FREE**: 1 million characters/month (more than Azure!)
- **Same account**: Use your existing Google account (you already have Gemini)
- **No credit card**: Free tier doesn't require payment
- **5 minutes**: Super quick setup

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Go to Google Cloud Console
**URL**: https://console.cloud.google.com/

- Sign in with your Google account (same one you used for Gemini)

---

### Step 2: Enable Text-to-Speech API

**Option A: Direct Link (Easiest)**
1. Click this link: https://console.cloud.google.com/apis/library/texttospeech.googleapis.com
2. Click the blue **"ENABLE"** button
3. Wait 30 seconds

**Option B: Manual Search**
1. In the search bar at top, type: **"Text-to-Speech API"**
2. Click on **"Cloud Text-to-Speech API"**
3. Click **"ENABLE"** button

---

### Step 3: Create API Key

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click **"+ CREATE CREDENTIALS"** (top of page)
3. Select **"API key"**
4. A popup appears with your key → **Copy it!**
5. Click **"RESTRICT KEY"** (recommended for security)

---

### Step 4: Restrict the Key (Optional but Recommended)

1. Give it a name: "Student Voice AI TTS"
2. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Click **"Select APIs"** dropdown
   - Search and check: **"Cloud Text-to-Speech API"**
3. Click **"Save"**

---

### Step 5: Update Your .env File

Open `server/.env` and add your key:

```env
# TTS Configuration
TTS_PROVIDER=google

# Google Cloud TTS (FREE: 1M chars/month)
GOOGLE_TTS_API_KEY=AIzaSyAbc123...your_actual_key_here
```

**Save the file!**

---

## 📋 Your Complete .env File Should Look Like:

```env
# Agora Configuration
AGORA_APP_ID=dcec8fd34e6e4144825fe891dab5e89f
AGORA_CUSTOMER_ID=f2551165edac4d0e8e13275a0e4aa571
AGORA_CUSTOMER_SECRET=71d77a71920840e5b5a85c302e3a0ee1

# AI Configuration (Using Gemini)
GEMINI_API_KEY=AIzaSyD3pxE2SVCiFH3--8rBDd5_b4_dElTQMT4

# TTS Configuration (Using Google)
TTS_PROVIDER=google
GOOGLE_TTS_API_KEY=AIzaSyAbc123...your_key_here

# Server Configuration
PORT=3000
NODE_ENV=development
```

---

## ✅ What I Already Did For You

I've already modified the server code to:
- ✅ Support Google Cloud TTS
- ✅ Use your existing Gemini API for AI
- ✅ Make it easy to switch between Google/Azure TTS
- ✅ Set Google as default TTS provider

**You just need to get the Google TTS API key!**

---

## 🎯 Visual Guide

### Screen 1: Enable API
```
┌─────────────────────────────────────────┐
│  Cloud Text-to-Speech API               │
│                                         │
│  Convert text into natural-sounding     │
│  speech using Google's AI technologies  │
│                                         │
│  [ENABLE]  ← Click this                │
└─────────────────────────────────────────┘
```

### Screen 2: Create Credentials
```
┌─────────────────────────────────────────┐
│  Credentials                            │
│  [+ CREATE CREDENTIALS] ← Click         │
│                                         │
│  Dropdown menu:                         │
│  • API key ← Select this               │
│  • OAuth client ID                      │
│  • Service account                      │
└─────────────────────────────────────────┘
```

### Screen 3: Copy API Key
```
┌─────────────────────────────────────────┐
│  API key created                        │
│                                         │
│  Your API key:                          │
│  AIzaSyAbc123def456...  [📋 Copy]     │
│                                         │
│  [RESTRICT KEY]  [CLOSE]               │
└─────────────────────────────────────────┘
```

---

## 🧪 Test Your Setup

After updating `.env`, test the server:

```bash
cd server
npm start
```

**Expected output**:
```
Server running on port 3000
Environment: development
```

**Test health endpoint**:
```bash
curl http://192.168.0.116:3000/health
```

**Should return**:
```json
{"status":"ok","message":"Server is running"}
```

---

## 💰 Cost Comparison

| Service | Free Tier | After Free Tier |
|---------|-----------|-----------------|
| **Google TTS** | 1M chars/month | $4 per 1M chars |
| Azure TTS | 0.5M chars/month | $1 per 1M chars |

**For testing**: Google's free tier is 2x larger! 🎉

---

## 🎤 Voice Options

Google TTS has many voices. Current config uses:
- **Voice**: `en-US-Neural2-J` (Male, natural)

**Want to change voice?** Edit `server/src/config/config.js`:
```javascript
voiceName: 'en-US-Neural2-C',  // Female voice
// or
voiceName: 'en-US-Neural2-J',  // Male voice
```

**Available voices**: https://cloud.google.com/text-to-speech/docs/voices

---

## 🔧 Troubleshooting

### Issue: "API not enabled"
**Solution**: 
- Go to https://console.cloud.google.com/apis/library/texttospeech.googleapis.com
- Click "ENABLE"
- Wait 1 minute

### Issue: "Invalid API key"
**Solution**:
- Verify you copied the full key
- Check no extra spaces in .env
- Make sure API is enabled

### Issue: "Quota exceeded"
**Solution**:
- Check usage: https://console.cloud.google.com/apis/api/texttospeech.googleapis.com/quotas
- Free tier: 1M chars/month
- Resets monthly

---

## ✅ Quick Checklist

- [ ] Go to https://console.cloud.google.com/
- [ ] Sign in with Google account
- [ ] Enable Text-to-Speech API
- [ ] Create API key
- [ ] Copy the key
- [ ] Restrict key (optional)
- [ ] Update server/.env file
- [ ] Add: `TTS_PROVIDER=google`
- [ ] Add: `GOOGLE_TTS_API_KEY=your_key`
- [ ] Save file
- [ ] Test: `npm start`

---

## 🎉 After This Step

You'll have:
- ✅ Agora (voice communication)
- ✅ Gemini (AI brain)
- ✅ Google TTS (AI voice)

**Then you can run the full app!** 🚀

---

## 📞 Need Help?

**Google Cloud Support**:
- Docs: https://cloud.google.com/text-to-speech/docs
- Console: https://console.cloud.google.com/

**Stuck?** Let me know which step!

---

**Start here**: https://console.cloud.google.com/apis/library/texttospeech.googleapis.com

Click "ENABLE" and then create an API key! 🎤
