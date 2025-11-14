# Quick Azure TTS Setup (5 Minutes)

## Why You Need This
Agora's Conversational AI requires a TTS (Text-to-Speech) service. Microsoft Azure offers a **FREE tier** with 0.5M characters/month.

## Quick Steps

### 1. Go to Azure Portal
**URL**: https://portal.azure.com/
- Sign in with Microsoft account (or create one)

### 2. Create Speech Service
1. Click **"+ Create a resource"** (top left)
2. Search for **"Speech"**
3. Click **"Speech"** → **"Create"**
4. Fill in:
   - **Resource group**: Create new → "voice-ai"
   - **Region**: **East US** (important!)
   - **Name**: "student-voice-tts"
   - **Pricing**: **Free F0** (0.5M chars/month FREE)
5. Click **"Review + create"** → **"Create"**
6. Wait 1-2 minutes

### 3. Get Your Key
1. Click **"Go to resource"**
2. Click **"Keys and Endpoint"** (left sidebar)
3. Copy **KEY 1**
4. Note the **Region** (should be "eastus")

### 4. Update .env
```env
AZURE_TTS_KEY=paste_your_key_here
AZURE_TTS_REGION=eastus
```

### 5. Restart Server
```bash
npm run dev
```

## Alternative: Use Google Cloud TTS

If you prefer Google (also has free tier):

1. Go to https://console.cloud.google.com/
2. Enable "Cloud Text-to-Speech API"
3. Create API key
4. Update .env:
```env
GOOGLE_TTS_API_KEY=your_key_here
```

Then I'll update the code to use Google instead!

## Cost
- **Free tier**: 0.5M characters/month
- **1 minute speech**: ~150 characters
- **Free tier = ~3,300 minutes** of speech per month!

Perfect for testing and development! 🎉
