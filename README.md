# 🎓 Student Voice AI App

A voice-interactive educational app for students using **Agora's Conversational AI API**. Talk to an AI tutor, navigate with voice commands, study with flashcards, connect with communities, and stay updated with educational news.

![Flutter](https://img.shields.io/badge/Flutter-3.9+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Agora](https://img.shields.io/badge/Agora-Conversational%20AI-orange)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-purple)

---

## ✨ Features

### 🎤 Voice AI Assistant
- Real-time voice conversations with AI tutor
- Powered by Agora + OpenAI GPT-4o-mini
- Natural language understanding
- Educational context awareness

### 🧭 Voice Navigation
Navigate the entire app hands-free:
- "Go to flashcards"
- "Open communities"
- "Show news"
- "Go back"

### 💡 Doubt Resolution
- Ask any educational question
- Get instant AI-powered answers
- Conversational follow-ups
- Multi-subject support

### 📚 Flashcards
- Interactive study cards
- Flip animations
- Category-based organization
- Voice-enabled navigation

### 👥 Communities
- Connect with other students
- Share posts and discussions
- Like and comment
- Study group coordination

### 📰 Educational News
- Latest educational content
- Curated articles
- Study tips and trends
- Pull to refresh

---

## 🚀 Quick Start

### Prerequisites
- Flutter 3.9+
- Node.js 18+
- Agora Account (with Conversational AI enabled)
- OpenAI API Key
- Microsoft Azure TTS Key

### 1. Clone & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd student-voice-ai

# Setup backend
cd server
npm install
cp .env.example .env
# Edit .env with your API keys
npm start

# Setup Flutter app (in new terminal)
cd app
flutter pub get
flutter run
```

### 2. Configure API Keys

Create `server/.env`:
```env
AGORA_APP_ID=your_agora_app_id
AGORA_CUSTOMER_ID=your_customer_id
AGORA_CUSTOMER_SECRET=your_customer_secret
OPENAI_API_KEY=your_openai_api_key
AZURE_TTS_KEY=your_azure_tts_key
AZURE_TTS_REGION=eastus
PORT=3000
```

### 3. Update Server URL

Edit `app/lib/config/app_config.dart`:
```dart
static const String serverBaseUrl = 'http://YOUR_IP:3000/api';
```

**See [QUICK_START.md](QUICK_START.md) for detailed setup instructions.**

---

## 📁 Project Structure

```
student-voice-ai/
├── app/                    # Flutter application
│   ├── lib/
│   │   ├── config/        # App configuration
│   │   ├── models/        # Data models
│   │   ├── providers/     # State management
│   │   ├── screens/       # UI screens
│   │   ├── services/      # Business logic
│   │   └── widgets/       # Reusable components
│   └── pubspec.yaml
│
├── server/                # Node.js backend
│   ├── src/
│   │   ├── config/       # Server configuration
│   │   ├── controllers/  # Request handlers
│   │   ├── routes/       # API routes
│   │   └── utils/        # Helper functions
│   └── package.json
│
└── docs/                 # Documentation
    ├── SETUP_GUIDE.md
    ├── QUICK_START.md
    └── FEATURES.md
```

---

## 🛠️ Tech Stack

### Frontend
- **Flutter** - Cross-platform mobile framework
- **Provider** - State management
- **Agora RTC SDK** - Real-time voice communication
- **HTTP/Dio** - API communication

### Backend
- **Node.js + Express** - Server framework
- **Agora Conversational AI** - Voice AI engine
- **OpenAI GPT-4o-mini** - Language model
- **Microsoft Azure TTS** - Text-to-speech

---

## 📖 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions
- **[FEATURES.md](FEATURES.md)** - Complete feature documentation
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Architecture overview

---

## 🎯 Usage Examples

### Start Voice Conversation
```dart
// Tap the voice button or programmatically:
await voiceProvider.startConversation();
```

### Voice Commands
```
User: "Explain photosynthesis"
AI: "Photosynthesis is the process by which plants..."

User: "Go to flashcards"
AI: "Opening flashcards for you"
[App navigates to flashcards screen]
```

### API Endpoints
```bash
# Start AI Agent
POST /api/agora/agent/start
{
  "channelName": "student_123",
  "uid": "0"
}

# Stop AI Agent
POST /api/agora/agent/:agentId/stop

# Generate Token
POST /api/agora/token
{
  "channelName": "student_123"
}
```

---

## 🔧 Configuration

### Voice Commands
Edit `lib/services/voice_command_service.dart` to add custom commands:
```dart
if (lowerCommand.contains('your_command')) {
  return NavigationDestination.yourDestination;
}
```

### AI System Prompt
Edit `server/src/utils/agora.utils.js`:
```javascript
const defaultPrompt = `Your custom system prompt here...`;
```

### TTS Voice
Edit `server/src/config/config.js`:
```javascript
voiceName: 'en-US-JennyNeural' // Change voice
```

---

## 🧪 Testing

### Test Voice Assistant
1. Start server: `npm start`
2. Run app: `flutter run`
3. Tap voice button
4. Say: "Hello, can you help me?"
5. Verify AI responds

### Test Navigation
1. Start voice assistant
2. Say: "Go to flashcards"
3. Verify navigation works
4. Try other commands

### Test API
```bash
# Test health endpoint
curl http://192.168.0.116:3000/health

# Test token generation
curl -X POST http://192.168.0.116:3000/api/agora/token \
  -H "Content-Type: application/json" \
  -d '{"channelName":"test123"}'
```

---

## 🚧 Troubleshooting

### Common Issues

**Server won't start**
- Check if port 3000 is available
- Verify all API keys in .env
- Run `npm install` again

**App can't connect**
- Verify server is running
- Check server URL in app_config.dart
- Use correct IP for physical devices

**Voice not working**
- Grant microphone permissions
- Check internet connection
- Verify Agora credentials

**AI not responding**
- Check OpenAI API key
- Verify you have credits
- Look at server logs

---

## 🔐 Security Notes

- Never commit `.env` file
- Use environment variables in production
- Implement proper token generation (not temp tokens)
- Add rate limiting
- Implement user authentication
- Encrypt sensitive data

---

## 🚀 Deployment

### Backend (Production)
1. Use proper Agora token server
2. Add authentication/authorization
3. Implement rate limiting
4. Use environment-specific configs
5. Deploy to AWS/GCP/Azure

### Flutter App (Production)
1. Update server URL to production
2. Build release version:
   ```bash
   flutter build apk --release  # Android
   flutter build ios --release  # iOS
   ```
3. Add proper error handling
4. Implement analytics
5. Add crash reporting

---

## 🎯 Roadmap

### Phase 1 (Current)
- [x] Voice AI assistant
- [x] Voice navigation
- [x] Flashcards
- [x] Communities
- [x] News feed

### Phase 2 (Next)
- [ ] User authentication
- [ ] Database integration
- [ ] Real-time communities
- [ ] Push notifications
- [ ] Offline support

### Phase 3 (Future)
- [ ] Video lessons
- [ ] Quiz mode
- [ ] Progress analytics
- [ ] Peer tutoring
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details

---

## 🙏 Acknowledgments

- **Agora** - For Conversational AI platform
- **OpenAI** - For GPT language model
- **Microsoft Azure** - For TTS services
- **Flutter Team** - For amazing framework

---

## 📞 Support

- **Documentation**: See docs/ folder
- **Issues**: Open a GitHub issue
- **Email**: support@example.com
- **Discord**: Join our community

---

## 🌟 Show Your Support

If you find this project helpful, please give it a ⭐️!

---

**Built with ❤️ for students worldwide**
#   s t u d y - h e l p e r  
 