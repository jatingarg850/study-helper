# Quick Start Guide - Student Voice AI

## 🚀 Get Started in 5 Minutes

### Step 1: Get Your API Keys (5 min)

#### Agora (Required)
1. Go to [console.agora.io](https://console.agora.io/)
2. Sign up / Log in
3. Create a new project
4. Enable "Conversational AI" in project settings
5. Note down:
   - App ID
   - Customer ID (from RESTful API section)
   - Customer Secret (from RESTful API section)

#### OpenAI (Required)
1. Go to [platform.openai.com](https://platform.openai.com/)
2. Sign up / Log in
3. Go to API Keys section
4. Create new secret key
5. Copy the key (you won't see it again!)

#### Azure TTS (Required)
1. Go to [portal.azure.com](https://portal.azure.com/)
2. Create "Speech Service" resource
3. Note down:
   - API Key
   - Region (e.g., eastus)

---

### Step 2: Setup Backend (2 min)

```bash
# Navigate to server
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your keys
# (Use notepad, vim, or any text editor)
```

Your `.env` should look like:
```env
AGORA_APP_ID=abc123xyz
AGORA_CUSTOMER_ID=your_customer_id
AGORA_CUSTOMER_SECRET=your_customer_secret
OPENAI_API_KEY=sk-proj-...
AZURE_TTS_KEY=your_azure_key
AZURE_TTS_REGION=eastus
PORT=3000
```

```bash
# Start server
npm start
```

You should see: `Server running on port 3000`

---

### Step 3: Setup Flutter App (2 min)

```bash
# Navigate to app
cd app

# Install dependencies
flutter pub get

# Run the app
flutter run
```

**Important**: Update server URL in `lib/config/app_config.dart`:
- Android Emulator: `http://10.0.2.2:3000/api`
- iOS Simulator: `http://192.168.0.116:3000/api`
- Physical Device: `http://YOUR_COMPUTER_IP:3000/api`

---

### Step 4: Test It! (1 min)

1. **Grant Permissions**: Allow microphone access when prompted
2. **Tap Voice Button**: The big circular button on home screen
3. **Say Something**: "Hello, can you help me with math?"
4. **Listen**: AI will respond!
5. **Try Navigation**: "Go to flashcards"

---

## 🎯 Quick Commands to Try

### Ask Questions
- "Explain photosynthesis"
- "What is the Pythagorean theorem?"
- "Help me with English grammar"

### Navigate
- "Go to flashcards"
- "Open communities"
- "Show me the news"
- "Go back"

### Flashcards
- "Next card"
- "Previous card"
- "Flip the card"

---

## 🔧 Troubleshooting

### Server won't start
- Check if port 3000 is available
- Verify all API keys in .env
- Run `npm install` again

### App can't connect to server
- Check server is running
- Verify server URL in app_config.dart
- For physical device, use computer's IP address
- Disable firewall temporarily

### Voice not working
- Grant microphone permissions
- Check device volume
- Test with headphones
- Ensure stable internet connection

### AI not responding
- Verify OpenAI API key is valid
- Check you have OpenAI credits
- Look at server logs for errors

---

## 📱 Device-Specific Setup

### Android Emulator
```dart
// lib/config/app_config.dart
static const String serverBaseUrl = 'http://10.0.2.2:3000/api';
```

### iOS Simulator
```dart
// lib/config/app_config.dart
static const String serverBaseUrl = 'http://192.168.0.116:3000/api';
```

### Physical Device (Same WiFi)
1. Find your computer's IP:
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` or `ip addr`
2. Update config:
```dart
static const String serverBaseUrl = 'http://192.168.1.XXX:3000/api';
```

---

## 🎓 Next Steps

1. **Explore Features**: Try all screens (Flashcards, Communities, News)
2. **Customize**: Modify system prompts in server code
3. **Add Content**: Add your own flashcards
4. **Join Community**: Create posts and interact
5. **Read Docs**: Check FEATURES.md for detailed info

---

## 💡 Pro Tips

- Use headphones for better voice quality
- Speak clearly and naturally
- Wait for AI to finish before speaking
- Use voice navigation for hands-free experience
- Check server logs if something goes wrong

---

## 🆘 Need Help?

- Check SETUP_GUIDE.md for detailed setup
- Read FEATURES.md for feature documentation
- Look at server logs: `npm start` output
- Check Flutter logs: `flutter run` output
- Verify API keys are correct

---

## ✅ Success Checklist

- [ ] Server running on port 3000
- [ ] Flutter app installed on device
- [ ] Microphone permission granted
- [ ] Voice button works
- [ ] AI responds to questions
- [ ] Navigation works
- [ ] All screens accessible

---

**You're all set! Start learning with your AI assistant! 🎉**
