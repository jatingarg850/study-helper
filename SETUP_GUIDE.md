# Student Voice AI App - Complete Setup Guide

## Overview
This is a voice-interactive educational app for students using Agora's Conversational AI API. Students can talk to an AI assistant, navigate the app using voice commands, ask doubts, use flashcards, interact with communities, and read educational news.

## Prerequisites

### 1. Agora Account Setup
- Sign up at [Agora Console](https://console.agora.io/)
- Create a new project
- Enable Conversational AI for your project
- Get your credentials:
  - App ID
  - Customer ID
  - Customer Secret
  - Generate a temporary token for testing

### 2. OpenAI API Key
- Sign up at [OpenAI](https://platform.openai.com/)
- Create an API key
- Ensure you have credits/billing set up

### 3. Microsoft Azure TTS
- Sign up at [Azure Portal](https://portal.azure.com/)
- Create a Speech Service resource
- Get your API key and region

## Backend Server Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Fill in your credentials in `.env`:
```env
AGORA_APP_ID=your_agora_app_id
AGORA_CUSTOMER_ID=your_customer_id
AGORA_CUSTOMER_SECRET=your_customer_secret
OPENAI_API_KEY=your_openai_api_key
AZURE_TTS_KEY=your_azure_tts_key
AZURE_TTS_REGION=eastus
PORT=3000
```

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

Server will run on `http://192.168.0.116:3000`

## Flutter App Setup

1. Navigate to app directory:
```bash
cd app
```

2. Install Flutter dependencies:
```bash
flutter pub get
```

3. Update server URL in `lib/config/app_config.dart`:
```dart
static const String serverBaseUrl = 'http://YOUR_IP:3000/api';
```
- For Android emulator: `http://10.0.2.2:3000/api`
- For iOS simulator: `http://192.168.0.116:3000/api`
- For physical device: `http://YOUR_COMPUTER_IP:3000/api`

4. Run the app:
```bash
flutter run
```

## Features

### 1. Voice AI Assistant
- Real-time voice conversation with AI
- Powered by Agora + OpenAI GPT
- Natural language understanding
- Educational context awareness

### 2. Voice Navigation
Use voice commands to navigate:
- "Go to flashcards" / "Open flashcards"
- "Go to communities" / "Show communities"
- "Go to news" / "Open news"
- "Go home"
- "Go back"

### 3. Doubt Resolution
- Ask any educational question
- Get instant AI-powered answers
- Conversational follow-ups
- Subject-specific help

### 4. Flashcards
- Interactive study cards
- Flip to reveal answers
- Navigate with voice or touch
- Category-based organization

### 5. Communities
- Connect with other students
- Share posts and discussions
- Like and comment on posts
- Study group coordination

### 6. Educational News
- Latest educational content
- Curated news articles
- Stay updated with trends
- Pull to refresh

## Architecture

### Backend (Node.js + Express)
```
server/
├── src/
│   ├── index.js              # Server entry point
│   ├── config/config.js      # Configuration
│   ├── routes/               # API routes
│   ├── controllers/          # Business logic
│   └── utils/                # Helper functions
```

### Frontend (Flutter)
```
app/lib/
├── main.dart                 # App entry point
├── config/                   # App configuration
├── models/                   # Data models
├── providers/                # State management (Provider)
├── services/                 # API & Agora services
├── screens/                  # UI screens
└── widgets/                  # Reusable components
```

## API Endpoints

### Start AI Agent
```
POST /api/agora/agent/start
Body: {
  "channelName": "student_123",
  "uid": "0",
  "systemPrompt": "Optional custom prompt"
}
```

### Stop AI Agent
```
POST /api/agora/agent/:agentId/stop
```

### Generate Token
```
POST /api/agora/token
Body: {
  "channelName": "student_123",
  "uid": "0"
}
```

## Troubleshooting

### Server Issues
- Ensure all environment variables are set correctly
- Check if port 3000 is available
- Verify API keys are valid

### Flutter Issues
- Run `flutter doctor` to check setup
- Ensure microphone permissions are granted
- Update server URL for your network configuration

### Agora Issues
- Verify Conversational AI is enabled in console
- Check token generation
- Ensure proper credentials in .env

## Production Deployment

### Backend
1. Use proper token generation (not temp tokens)
2. Implement rate limiting
3. Add authentication/authorization
4. Use environment-specific configs
5. Deploy to cloud (AWS, GCP, Azure)

### Flutter App
1. Update server URL to production
2. Add proper error handling
3. Implement analytics
4. Add crash reporting
5. Build release versions

## Next Steps

1. **Database Integration**: Add Firebase/MongoDB for persistent data
2. **User Authentication**: Implement login/signup
3. **Real Communities**: Connect to actual community backend
4. **News API**: Integrate real news API
5. **Advanced Voice Commands**: Add more navigation options
6. **Offline Support**: Cache data for offline use
7. **Push Notifications**: Notify users of updates
8. **Analytics**: Track user behavior

## Support

For issues or questions:
- Agora Docs: https://docs.agora.io/
- OpenAI Docs: https://platform.openai.com/docs
- Flutter Docs: https://flutter.dev/docs

## License
MIT
