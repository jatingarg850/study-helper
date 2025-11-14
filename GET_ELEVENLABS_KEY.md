# Get ElevenLabs API Key (1 Minute - FREE)

## Why ElevenLabs?
- ✅ **Best voice quality** - Most natural-sounding AI voices
- ✅ **FREE tier** - 10,000 characters/month (enough for testing!)
- ✅ **No credit card** required for free tier
- ✅ **1 minute setup** - Fastest option!

## Quick Steps:

### 1. Sign Up
**Go to**: https://elevenlabs.io/sign-up
- Click "Sign up"
- Use Google/Email to create account
- **No credit card needed!**

### 2. Get API Key
1. After signing up, go to: https://elevenlabs.io/app/settings/api-keys
2. Or: Click your profile → "Profile + API key"
3. You'll see your API key displayed
4. Click **"Copy"** button

### 3. Update .env
Paste your key in `server/.env`:
```env
ELEVENLABS_API_KEY=your_key_here
```

### 4. Restart Server
```bash
npm run dev
```

### 5. Test!
- Start conversation
- Say "Hello, tell me about photosynthesis"
- **Hear the amazing AI voice!** 🎤

## Free Tier Limits
- **10,000 characters/month** FREE
- **1 minute of speech** ≈ 150 characters
- **Free tier** = ~66 minutes/month
- Perfect for testing!

## Voice Options
Default voice: **Adam** (natural male voice)

Want a different voice? Browse at: https://elevenlabs.io/voice-library
- Copy the voice ID
- Update `voice_id` in the code

## That's It!
ElevenLabs is the easiest and best-sounding option! 🎉
