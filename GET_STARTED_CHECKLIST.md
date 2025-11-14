# 🚀 Get Started Checklist

## Pre-Development Setup

### 1. Create Accounts (15 minutes)

#### Agora Account ⏱️ 5 min
- [ ] Go to [console.agora.io](https://console.agora.io/)
- [ ] Sign up for free account
- [ ] Verify email
- [ ] Create new project
- [ ] Enable "Conversational AI" feature
- [ ] Copy App ID
- [ ] Go to RESTful API section
- [ ] Copy Customer ID
- [ ] Copy Customer Secret

#### OpenAI Account ⏱️ 5 min
- [ ] Go to [platform.openai.com](https://platform.openai.com/)
- [ ] Sign up / Log in
- [ ] Add payment method (required)
- [ ] Go to API Keys
- [ ] Create new secret key
- [ ] Copy and save key securely
- [ ] Check billing limits

#### Microsoft Azure Account ⏱️ 5 min
- [ ] Go to [portal.azure.com](https://portal.azure.com/)
- [ ] Sign up (free tier available)
- [ ] Create "Speech Service" resource
- [ ] Select region (e.g., East US)
- [ ] Copy API Key 1
- [ ] Note the region

---

## Development Environment Setup

### 2. Install Required Software (20 minutes)

#### Node.js ⏱️ 5 min
- [ ] Download from [nodejs.org](https://nodejs.org/)
- [ ] Install LTS version (18.x or higher)
- [ ] Verify: `node --version`
- [ ] Verify: `npm --version`

#### Flutter ⏱️ 10 min
- [ ] Download from [flutter.dev](https://flutter.dev/)
- [ ] Extract to desired location
- [ ] Add to PATH
- [ ] Run `flutter doctor`
- [ ] Fix any issues shown
- [ ] Verify: `flutter --version`

#### IDE (Choose one) ⏱️ 5 min
- [ ] VS Code + Flutter extension
- [ ] Android Studio + Flutter plugin
- [ ] IntelliJ IDEA + Flutter plugin

#### Additional Tools
- [ ] Git installed
- [ ] Android SDK (for Android development)
- [ ] Xcode (for iOS development, Mac only)

---

## Project Setup

### 3. Clone/Download Project ⏱️ 2 min
- [ ] Clone repository or download ZIP
- [ ] Extract to workspace
- [ ] Open in terminal/command prompt

### 4. Backend Setup ⏱️ 5 min

```bash
cd server
```

- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env`
- [ ] Open `.env` in text editor
- [ ] Fill in Agora App ID
- [ ] Fill in Agora Customer ID
- [ ] Fill in Agora Customer Secret
- [ ] Fill in OpenAI API Key
- [ ] Fill in Azure TTS Key
- [ ] Fill in Azure TTS Region
- [ ] Save file
- [ ] Run `npm start`
- [ ] Verify "Server running on port 3000"

### 5. Flutter App Setup ⏱️ 5 min

```bash
cd app
```

- [ ] Run `flutter pub get`
- [ ] Wait for packages to download
- [ ] Open `lib/config/app_config.dart`
- [ ] Update `serverBaseUrl` with your IP
  - Android Emulator: `http://10.0.2.2:3000/api`
  - iOS Simulator: `http://192.168.0.116:3000/api`
  - Physical Device: `http://YOUR_IP:3000/api`
- [ ] Save file

---

## Testing

### 6. Test Backend ⏱️ 3 min

- [ ] Server is running
- [ ] Open browser
- [ ] Go to `http://192.168.0.116:3000/health`
- [ ] Should see: `{"status":"ok","message":"Server is running"}`
- [ ] Test token endpoint (optional):
  ```bash
  curl -X POST http://192.168.0.116:3000/api/agora/token \
    -H "Content-Type: application/json" \
    -d '{"channelName":"test","uid":"0"}'
  ```

### 7. Test Flutter App ⏱️ 5 min

#### Connect Device
- [ ] Connect Android device via USB (enable USB debugging)
- [ ] OR start Android emulator
- [ ] OR start iOS simulator (Mac only)
- [ ] Verify device: `flutter devices`

#### Run App
- [ ] Run `flutter run`
- [ ] Wait for build to complete
- [ ] App should launch on device
- [ ] Grant microphone permission when prompted

### 8. Test Voice Features ⏱️ 5 min

- [ ] Tap the voice button (big circular button)
- [ ] Wait for "Listening..." message
- [ ] Say "Hello, can you help me?"
- [ ] AI should respond
- [ ] Try "Go to flashcards"
- [ ] App should navigate
- [ ] Try "Go back"
- [ ] Should return to home

---

## Verification Checklist

### Backend Verification
- [ ] Server starts without errors
- [ ] Health endpoint responds
- [ ] No error messages in console
- [ ] All environment variables set

### App Verification
- [ ] App builds successfully
- [ ] App launches on device
- [ ] Home screen displays
- [ ] Voice button visible
- [ ] No crash on startup

### Voice Verification
- [ ] Microphone permission granted
- [ ] Voice button responds to tap
- [ ] Connection established
- [ ] AI responds to voice
- [ ] Voice navigation works
- [ ] Can stop conversation

### Feature Verification
- [ ] Home screen accessible
- [ ] Flashcards screen works
- [ ] Communities screen works
- [ ] News screen works
- [ ] Voice assistant screen works
- [ ] Navigation between screens works

---

## Troubleshooting Quick Fixes

### Server Issues
**Problem**: Server won't start
- [ ] Check if port 3000 is in use
- [ ] Verify all keys in .env
- [ ] Run `npm install` again
- [ ] Check Node.js version

**Problem**: API errors
- [ ] Verify API keys are correct
- [ ] Check OpenAI has credits
- [ ] Verify Agora Conversational AI is enabled

### App Issues
**Problem**: Build fails
- [ ] Run `flutter clean`
- [ ] Run `flutter pub get`
- [ ] Check Flutter version
- [ ] Run `flutter doctor`

**Problem**: Can't connect to server
- [ ] Verify server is running
- [ ] Check server URL in app_config.dart
- [ ] Ping server from device
- [ ] Check firewall settings

**Problem**: Voice not working
- [ ] Grant microphone permission
- [ ] Check device volume
- [ ] Test with headphones
- [ ] Verify internet connection

---

## Success Criteria

### You're ready when:
- [x] Server running without errors
- [x] App installed on device
- [x] Voice button works
- [x] AI responds to questions
- [x] Navigation works
- [x] All screens accessible
- [x] No crashes or errors

---

## Next Steps After Setup

### Immediate
1. [ ] Read FEATURES.md
2. [ ] Try all voice commands
3. [ ] Explore all screens
4. [ ] Test different questions

### Short Term
1. [ ] Customize system prompts
2. [ ] Add your own flashcards
3. [ ] Create community posts
4. [ ] Experiment with voice commands

### Long Term
1. [ ] Add user authentication
2. [ ] Integrate database
3. [ ] Deploy to production
4. [ ] Publish to app stores

---

## Time Estimates

| Task | Time |
|------|------|
| Create accounts | 15 min |
| Install software | 20 min |
| Setup backend | 5 min |
| Setup Flutter | 5 min |
| Testing | 13 min |
| **Total** | **~60 min** |

---

## Support Resources

### Documentation
- [ ] README.md - Project overview
- [ ] QUICK_START.md - Fast setup
- [ ] SETUP_GUIDE.md - Detailed guide
- [ ] FEATURES.md - Feature docs
- [ ] VOICE_COMMANDS.md - Command reference

### External Resources
- [ ] [Agora Docs](https://docs.agora.io/)
- [ ] [Flutter Docs](https://flutter.dev/docs)
- [ ] [OpenAI Docs](https://platform.openai.com/docs)

### Getting Help
- [ ] Check documentation first
- [ ] Review error messages
- [ ] Check server logs
- [ ] Search for similar issues
- [ ] Ask in community

---

## Final Checklist

Before considering setup complete:

### Environment
- [ ] All accounts created
- [ ] All software installed
- [ ] All tools configured

### Backend
- [ ] Dependencies installed
- [ ] Environment variables set
- [ ] Server running
- [ ] API responding

### Frontend
- [ ] Dependencies installed
- [ ] Configuration updated
- [ ] App building
- [ ] App running

### Features
- [ ] Voice working
- [ ] Navigation working
- [ ] All screens accessible
- [ ] No critical errors

### Documentation
- [ ] Read README
- [ ] Reviewed QUICK_START
- [ ] Understand FEATURES
- [ ] Know VOICE_COMMANDS

---

## 🎉 Congratulations!

If all items are checked, you're ready to use the Student Voice AI app!

**Start learning with your AI assistant now!**

---

## 📝 Notes Section

Use this space to track your progress:

**Date Started**: _______________

**Issues Encountered**:
- 
- 
- 

**Solutions Found**:
- 
- 
- 

**Customizations Made**:
- 
- 
- 

**Next Goals**:
- 
- 
- 
