# Agora Conversational AI Setup

## Overview
Your app now uses **Agora's Conversational AI** with **Google Gemini** as the LLM backend.

## How It Works

### 1. Server Side (Node.js)
- **Endpoint**: `POST /api/agora/agent/start`
- Creates an Agora Conversational AI agent
- Configures it with:
  - Google Gemini 2.0 Flash for AI responses
  - Agora's built-in ASR (Automatic Speech Recognition)
  - Agora's built-in TTS (Text-to-Speech)
  - Custom system prompt for educational assistance

### 2. Client Side (Flutter)
- User taps "Start Conversation"
- App calls server to start agent
- Joins Agora RTC channel
- Agent listens to user speech and responds with voice

## Configuration

### Server (.env)
```env
AGORA_APP_ID=dcec8fd34e6e4144825fe891dab5e89f
AGORA_CUSTOMER_ID=f2551165edac4d0e8e13275a0e4aa571
AGORA_CUSTOMER_SECRET=71d77a71920840e5b5a85c302e3a0ee1
GEMINI_API_KEY=AIzaSyD3pxE2SVCiFH3--8rBDd5_b4_dElTQMT4
```

### Agent Configuration
```javascript
{
  llm: {
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",
    api_key: GEMINI_API_KEY,
    system_messages: [
      {
        role: "system",
        content: "You are an educational AI assistant..."
      }
    ],
    greeting_message: "Hello! I'm your study assistant...",
    max_history: 20
  },
  asr: {
    language: "en-US",
    vendor: "agora"
  },
  tts: {
    vendor: "agora"
  }
}
```

## API Endpoints

### Start Agent
```
POST /api/agora/agent/start
Body: {
  "channelName": "student_123",
  "systemPrompt": "Optional custom prompt"
}
```

### Stop Agent
```
POST /api/agora/agent/:agentId/stop
```

### Generate Token
```
POST /api/agora/token
Body: {
  "channelName": "student_123",
  "uid": 0
}
```

## Testing

1. Start server: `npm run dev`
2. Run Flutter app: `flutter run`
3. Tap "Ask AI" on home screen
4. Tap "Start Conversation"
5. Speak to the AI assistant
6. AI will respond with voice

## Features

✅ Real-time voice conversation
✅ Google Gemini AI responses
✅ Agora's built-in speech recognition
✅ Agora's built-in text-to-speech
✅ Educational assistant personality
✅ Conversation history (20 messages)
✅ Auto-disconnect after 5 minutes idle

## Troubleshooting

### Agent fails to start
- Check Agora credentials in .env
- Verify Gemini API key is valid
- Check server logs for detailed error

### No audio
- Ensure microphone permissions granted
- Check device audio settings
- Verify Agora RTC connection

### AI doesn't respond
- Check Gemini API quota
- Verify system prompt is configured
- Check agent status via query endpoint
