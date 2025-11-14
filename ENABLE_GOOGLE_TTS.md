# Enable Google Cloud Text-to-Speech API (2 Minutes)

## You Already Have Google Cloud Setup! ✅

Since you have a service account (`buddyjatin@changemaker-475403.iam.gserviceaccount.com`), you just need to enable the TTS API.

## Quick Steps

### 1. Go to Google Cloud Console
**Direct Link**: https://console.cloud.google.com/apis/library/texttospeech.googleapis.com

Or manually:
1. Go to https://console.cloud.google.com/
2. Select your project: **changemaker-475403**
3. Search for "Text-to-Speech API"

### 2. Enable the API
1. Click the **"ENABLE"** button
2. Wait 30 seconds for activation
3. You'll see "API enabled" ✅

### 3. Verify Your API Key Works
Your existing Gemini API key should work for TTS too!

Test it:
```bash
curl "https://texttospeech.googleapis.com/v1/voices?key=AIzaSyD3pxE2SVCiFH3--8rBDd5_b4_dElTQMT4"
```

If you see a list of voices, you're all set! 🎉

### 4. Restart Your Server
```bash
npm run dev
```

## That's It!

Your configuration is now:
- ✅ Google Gemini for AI responses
- ✅ Google Cloud TTS for voice synthesis
- ✅ Agora for real-time communication
- ✅ Same API key for both Gemini and TTS

## Free Tier Limits
- **Google TTS**: 1M characters/month FREE
- **1 minute speech**: ~150 characters
- **Free tier = ~6,600 minutes** of speech per month!

Perfect for your project! 🚀

## Troubleshooting

### If API key doesn't work for TTS:
1. Go to https://console.cloud.google.com/apis/credentials
2. Click on your API key
3. Under "API restrictions":
   - Select "Restrict key"
   - Check both:
     - ✅ Generative Language API
     - ✅ Cloud Text-to-Speech API
4. Click "Save"

### If you see "API not enabled":
- Make sure you're in the correct project (changemaker-475403)
- Wait a few minutes after enabling
- Try the curl test command above
