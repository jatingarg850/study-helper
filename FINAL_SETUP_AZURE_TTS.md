# Get Azure TTS Key (2 Minutes - FREE)

## Your AI is working! It just needs a voice.

The AI is responding perfectly to your questions, but Agora requires **Microsoft Azure TTS** for voice output.

## Quick Steps:

### 1. Go to Azure Portal
**Link**: https://portal.azure.com/
- Click "Start free" or "Sign in"
- Use your Microsoft account (or create one)

### 2. Create Speech Service
1. Click **"+ Create a resource"** (top left)
2. Search: **"Speech"**
3. Click **"Speech"** → **"Create"**

### 3. Fill the Form
- **Resource group**: Click "Create new" → Name it "voiceai"
- **Region**: Select **"East US"**
- **Name**: "student-voice-tts"
- **Pricing tier**: Select **"Free F0"** (0.5M characters/month FREE!)
- Click **"Review + create"** → **"Create"**
- Wait 1 minute

### 4. Get Your Key
1. Click **"Go to resource"**
2. Click **"Keys and Endpoint"** (left sidebar)
3. **Copy KEY 1** (click the copy icon)
4. Note the **Region** (should be "eastus")

### 5. Update .env File
Add to your `server/.env`:
```env
AZURE_TTS_KEY=paste_your_key_here
AZURE_TTS_REGION=eastus
```

### 6. Restart Server
```bash
npm run dev
```

### 7. Test!
- Start conversation in app
- Say "Hello, what is 2 plus 2?"
- **You should hear the AI speak!** 🎉

## Why Azure?
- Agora officially supports Microsoft Azure TTS
- Google TTS isn't fully compatible with Agora's agent
- Azure has a generous FREE tier
- Takes only 2 minutes to set up

## Cost
- **FREE**: 0.5M characters/month
- **1 minute of speech** ≈ 150 characters
- **FREE tier** = ~3,300 minutes/month
- Perfect for your project!

---

**Once you add the Azure key, your AI will speak!** 🎤
