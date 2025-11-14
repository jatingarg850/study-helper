# Google Gemini Integration Guide

## ✨ Why Gemini?

The project now uses **Google Gemini 2.0 Flash** instead of OpenAI:

### Benefits
- ✅ **Free Tier**: Generous free quota (15 requests/minute)
- ✅ **Fast**: Optimized for speed
- ✅ **Powerful**: Latest Gemini 2.0 model
- ✅ **Easy Setup**: Simple API key
- ✅ **No Billing Required**: Start immediately

---

## 🚀 Quick Setup

### 1. Get Gemini API Key (2 minutes)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with Google account
3. Click "Create API Key"
4. Copy the key

**Your key is already in the .env file!**
```env
GEMINI_API_KEY=AIzaSyD3pxE2SVCiFH3--8rBDd5_b4_dElTQMT4
```

### 2. Install Dependencies

```bash
cd server
npm install
```

This will install `@google/generative-ai` package.

### 3. Test Gemini

```bash
npm start
```

Then test the endpoint:
```bash
curl -X POST http://192.168.0.116:3000/api/gemini/test \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Explain AI in simple terms"}'
```

---

## 🎯 What Changed

### Configuration
**Before (OpenAI)**:
```javascript
openai: {
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4o-mini'
}
```

**After (Gemini)**:
```javascript
gemini: {
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-2.0-flash-exp'
}
```

### Agora Integration
The Agora Conversational AI now uses Gemini's API endpoint:
```javascript
llm: {
  url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",
  api_key: config.gemini.apiKey,
  // ... rest of config
}
```

---

## 📝 New API Endpoints

### Test Gemini
```bash
POST /api/gemini/test
{
  "prompt": "Your question here"
}
```

### Chat with Gemini
```bash
POST /api/gemini/chat
{
  "message": "Hello!",
  "history": []
}
```

---

## 🧪 Testing

### Test 1: Simple Generation
```bash
curl -X POST http://192.168.0.116:3000/api/gemini/test \
  -H "Content-Type: application/json" \
  -d '{"prompt":"What is photosynthesis?"}'
```

### Test 2: Chat
```bash
curl -X POST http://192.168.0.116:3000/api/gemini/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Explain quantum physics simply"}'
```

### Test 3: Voice AI (Full Integration)
1. Start server: `npm start`
2. Run Flutter app
3. Tap voice button
4. Say "Hello, explain AI to me"
5. Gemini responds through Agora!

---

## 💡 Usage in Code

### Direct Gemini Usage
```javascript
const geminiService = require('./services/gemini.service');

// Simple generation
const response = await geminiService.generateContent('Explain AI');

// Chat session
const chat = await geminiService.startChat();
const reply = await geminiService.sendMessage(chat, 'Hello!');
```

### With Agora Voice AI
The integration is automatic! When users speak:
1. Agora captures voice
2. Converts to text (ASR)
3. Sends to Gemini API
4. Gemini generates response
5. Azure TTS converts to speech
6. User hears response

---

## 🎓 Gemini Models Available

### Gemini 2.0 Flash (Current)
- **Model**: `gemini-2.0-flash-exp`
- **Speed**: Very fast
- **Cost**: Free tier available
- **Best for**: Real-time conversations

### Gemini 1.5 Pro (Alternative)
- **Model**: `gemini-1.5-pro`
- **Speed**: Moderate
- **Cost**: Free tier available
- **Best for**: Complex reasoning

### Gemini 1.5 Flash (Alternative)
- **Model**: `gemini-1.5-flash`
- **Speed**: Fast
- **Cost**: Free tier available
- **Best for**: Quick responses

To change model, edit `server/src/config/config.js`:
```javascript
gemini: {
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-1.5-pro' // Change here
}
```

---

## 📊 Rate Limits

### Free Tier
- **Requests**: 15 per minute
- **Tokens**: 1 million per day
- **Cost**: FREE

### Paid Tier (if needed)
- **Requests**: 1000 per minute
- **Tokens**: Unlimited
- **Cost**: Pay as you go

For most educational apps, **free tier is sufficient**!

---

## 🔧 Advanced Configuration

### Custom System Prompt
Edit `server/src/utils/agora.utils.js`:
```javascript
const defaultPrompt = `You are an educational AI assistant for students.
Help them with their doubts, explain concepts clearly, and encourage learning.
Be friendly, patient, and supportive.`;
```

### Adjust Response Length
Edit `server/src/services/gemini.service.js`:
```javascript
generationConfig: {
  maxOutputTokens: 1000, // Increase for longer responses
  temperature: 0.7,      // 0.0-1.0 (creativity)
}
```

### Safety Settings
```javascript
const chat = this.model.startChat({
  history: history,
  safetySettings: [
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
  ],
});
```

---

## 🆚 Gemini vs OpenAI

| Feature | Gemini 2.0 Flash | OpenAI GPT-4o-mini |
|---------|------------------|-------------------|
| **Cost** | FREE (generous) | Paid ($0.15/1M tokens) |
| **Speed** | Very Fast | Fast |
| **Quality** | Excellent | Excellent |
| **Setup** | Simple API key | Billing required |
| **Rate Limit** | 15/min free | Varies by plan |
| **Best For** | Students, Testing | Production, Scale |

---

## 🎯 Educational Optimizations

### For Math Problems
```javascript
const prompt = `Solve this step by step: ${mathProblem}`;
```

### For Explanations
```javascript
const prompt = `Explain ${concept} in simple terms for a student`;
```

### For Practice
```javascript
const prompt = `Generate 5 practice questions about ${topic}`;
```

---

## 🐛 Troubleshooting

### Error: API Key Invalid
- Verify key in .env file
- Generate new key at [AI Studio](https://aistudio.google.com/app/apikey)
- Restart server after changing .env

### Error: Rate Limit Exceeded
- Free tier: 15 requests/minute
- Wait 1 minute and retry
- Consider upgrading if needed

### Error: Model Not Found
- Check model name in config.js
- Use: `gemini-2.0-flash-exp` or `gemini-1.5-pro`
- See available models at [Google AI](https://ai.google.dev/models)

---

## 📚 Resources

- **Gemini API Docs**: https://ai.google.dev/docs
- **Get API Key**: https://aistudio.google.com/app/apikey
- **Model Info**: https://ai.google.dev/models/gemini
- **Pricing**: https://ai.google.dev/pricing

---

## ✅ Migration Checklist

- [x] Updated package.json with @google/generative-ai
- [x] Created gemini.service.js
- [x] Created gemini.routes.js
- [x] Updated config.js
- [x] Updated agora.utils.js
- [x] Updated .env files
- [x] Added test endpoints
- [x] Updated documentation

---

## 🎉 You're Ready!

Your app now uses Google Gemini AI! 

**Test it**:
```bash
cd server
npm install
npm start
```

Then use the Flutter app - it will automatically use Gemini for all AI responses!

**No billing required, no credit card needed - just start learning!** 🚀
