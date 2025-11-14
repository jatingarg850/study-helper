# 🔧 Troubleshooting Guide

## Common Issues and Solutions

---

## 🔴 Agora Issues

### Issue 1: "No Restful API has been found!"

**Problem**: When you go to RESTful API section in Agora Console, you see a warning.

**Solution**: You need to create RESTful API credentials first.

**Quick Fix**:
1. Click the blue link "Click here to manage RESTful-api"
2. Click "Create" button
3. Fill in:
   - Name: "Student Voice AI"
   - Role: "Admin"
   - Projects: Select your project
4. Click "Create"
5. Copy Customer ID and Customer Secret
6. Add to your `.env` file

**Detailed Guide**: See [AGORA_RESTFUL_API_FIX.md](AGORA_RESTFUL_API_FIX.md)

---

### Issue 2: "Conversational AI not available"

**Problem**: Can't find or enable Conversational AI feature.

**Solution**:
1. Contact Agora support: support@agora.io
2. Request Conversational AI access for your account
3. Provide your App ID and use case
4. Wait for approval (usually 1-2 business days)

**Alternative**: Some regions may not have this feature yet. Try:
- Creating project in different region
- Using different Agora account
- Checking Agora's feature availability page

---

### Issue 3: "Invalid App ID"

**Problem**: Server returns "Invalid App ID" error.

**Solution**:
1. Go to Agora Console → Project Management
2. Find your project
3. Click eye icon next to App ID
4. Copy the FULL App ID (usually 32 characters)
5. Update `.env` file:
   ```env
   AGORA_APP_ID=abc123def456ghi789jkl012mno345pq
   ```
6. Restart server

**Common Mistakes**:
- Copying only part of the App ID
- Including extra spaces
- Using wrong project's App ID

---

### Issue 4: "Authentication failed"

**Problem**: API calls return 401 Unauthorized.

**Solution**:
1. Verify Customer ID and Secret are correct
2. Check for extra spaces or newlines
3. Ensure credentials are from same account
4. Try regenerating credentials:
   - Go to RESTful API section
   - Click "Regenerate" on your credential
   - Copy new values
   - Update `.env`

---

## 🤖 OpenAI Issues

### Issue 5: "Invalid API key"

**Problem**: OpenAI API returns authentication error.

**Solution**:
1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Verify your key is active (not revoked)
3. If revoked, create new key
4. Copy the FULL key (starts with `sk-proj-` or `sk-`)
5. Update `.env`:
   ```env
   OPENAI_API_KEY=sk-proj-abc123...xyz789
   ```

**Common Mistakes**:
- Using old/revoked key
- Not copying full key
- Including quotes in .env

---

### Issue 6: "Insufficient quota"

**Problem**: "You exceeded your current quota" error.

**Solution**:
1. Go to [platform.openai.com/account/billing](https://platform.openai.com/account/billing)
2. Check your usage and limits
3. Add credits or upgrade plan
4. Set up auto-recharge (recommended)
5. Wait a few minutes for changes to take effect

**Prevention**:
- Set usage limits
- Monitor usage regularly
- Use GPT-4o-mini (cheaper)
- Implement caching

---

### Issue 7: "Rate limit exceeded"

**Problem**: Too many requests to OpenAI API.

**Solution**:
1. Wait 60 seconds and try again
2. Implement rate limiting in your code
3. Upgrade to higher tier plan
4. Use exponential backoff

**For Testing**:
- Reduce conversation frequency
- Use shorter prompts
- Limit max_history in config

---

## ☁️ Azure Issues

### Issue 8: "Invalid subscription key"

**Problem**: Azure TTS returns 401 error.

**Solution**:
1. Go to [portal.azure.com](https://portal.azure.com/)
2. Find your Speech Service
3. Go to "Keys and Endpoint"
4. Copy KEY 1 (not KEY 2)
5. Update `.env`:
   ```env
   AZURE_TTS_KEY=abc123def456...
   ```

**Common Mistakes**:
- Using wrong key
- Key expired (regenerate)
- Wrong service (use Speech Service, not other services)

---

### Issue 9: "Invalid region"

**Problem**: Azure API returns region error.

**Solution**:
1. Go to your Speech Service in Azure Portal
2. Check "Location/Region" field
3. Use exact region code (lowercase):
   - East US → `eastus`
   - West Europe → `westeurope`
   - Southeast Asia → `southeastasia`
4. Update `.env`:
   ```env
   AZURE_TTS_REGION=eastus
   ```

**Common Mistakes**:
- Using display name instead of code
- Wrong capitalization
- Extra spaces

---

## 🖥️ Server Issues

### Issue 10: "Port 3000 already in use"

**Problem**: Can't start server, port is busy.

**Solution**:

**Windows**:
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Mac/Linux**:
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

**Alternative**: Change port in `.env`:
```env
PORT=3001
```

---

### Issue 11: "Module not found"

**Problem**: Server crashes with "Cannot find module" error.

**Solution**:
```bash
cd server
rm -rf node_modules
rm package-lock.json
npm install
npm start
```

**If still failing**:
- Check Node.js version: `node --version` (need 18+)
- Update npm: `npm install -g npm@latest`
- Clear npm cache: `npm cache clean --force`

---

### Issue 12: ".env file not found"

**Problem**: Server can't read environment variables.

**Solution**:
1. Verify file exists: `server/.env`
2. Check file name (not `.env.txt` or `.env.example`)
3. Ensure file is in `server/` directory, not root
4. Check file permissions (should be readable)

**Windows**: Make sure file extensions are visible
**Mac/Linux**: File should start with dot (hidden file)

---

## 📱 Flutter Issues

### Issue 13: "Can't connect to server"

**Problem**: App can't reach backend server.

**Solution**:

**For Android Emulator**:
```dart
// lib/config/app_config.dart
static const String serverBaseUrl = 'http://10.0.2.2:3000/api';
```

**For iOS Simulator**:
```dart
static const String serverBaseUrl = 'http://192.168.0.116:3000/api';
```

**For Physical Device** (same WiFi):
1. Find your computer's IP:
   - Windows: `ipconfig` (look for IPv4)
   - Mac: `ifconfig | grep inet`
2. Update config:
```dart
static const String serverBaseUrl = 'http://192.168.1.XXX:3000/api';
```

**Verify server is running**:
- Open browser
- Go to `http://192.168.0.116:3000/health`
- Should see: `{"status":"ok"}`

---

### Issue 14: "Microphone permission denied"

**Problem**: Voice features don't work.

**Solution**:

**Android**:
1. Go to Settings → Apps → Your App
2. Permissions → Microphone → Allow
3. Restart app

**iOS**:
1. Settings → Privacy → Microphone
2. Find your app → Enable
3. Restart app

**In Code**: Check `AndroidManifest.xml` has:
```xml
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

---

### Issue 15: "Build failed"

**Problem**: Flutter build errors.

**Solution**:
```bash
# Clean and rebuild
flutter clean
flutter pub get
flutter run

# If still failing
flutter doctor
# Fix any issues shown

# Update Flutter
flutter upgrade
```

**Common Issues**:
- Outdated Flutter version
- Missing dependencies
- Gradle issues (Android)
- CocoaPods issues (iOS)

---

### Issue 16: "Package not found"

**Problem**: Import errors in Flutter.

**Solution**:
```bash
cd app
flutter pub get
flutter pub upgrade
```

**If specific package fails**:
1. Check `pubspec.yaml` syntax
2. Verify package exists on pub.dev
3. Try specific version:
```yaml
agora_rtc_engine: ^6.3.2  # Use specific version
```

---

## 🎤 Voice Issues

### Issue 17: "Voice not working"

**Problem**: Can't hear AI or AI can't hear you.

**Solution**:

**Check Permissions**:
- Microphone access granted
- App has audio permissions

**Check Audio**:
- Device volume up
- Not muted
- Headphones connected properly
- Try different headphones

**Check Connection**:
- Internet stable
- Server running
- Agora credentials correct

**Test**:
```bash
# Check server logs
cd server
npm start
# Look for connection messages
```

---

### Issue 18: "Poor voice quality"

**Problem**: Audio is choppy or unclear.

**Solution**:

**Improve Quality**:
- Use headphones (reduces echo)
- Minimize background noise
- Speak clearly at normal pace
- Ensure stable internet (WiFi better than mobile data)

**Check Settings**:
- Audio profile in `agora_service.dart`
- TTS voice in `server/src/config/config.js`
- Bitrate settings

**Network**:
- Test internet speed (need 1+ Mbps)
- Close other apps using bandwidth
- Move closer to WiFi router

---

### Issue 19: "AI doesn't understand me"

**Problem**: Voice recognition fails.

**Solution**:

**Improve Recognition**:
- Speak clearly and naturally
- Use complete sentences
- Avoid background noise
- Try different phrasing

**Check Language**:
```javascript
// server/src/utils/agora.utils.js
asr: {
  language: "en-US"  // Match your language
}
```

**Test Commands**:
- Start with simple: "Hello"
- Try navigation: "Go to flashcards"
- Ask questions: "What is math?"

---

## 💰 Billing Issues

### Issue 20: "Unexpected charges"

**Problem**: Higher than expected costs.

**Solution**:

**Check Usage**:
- Agora Console → Analytics
- OpenAI → Usage dashboard
- Azure → Cost Management

**Set Limits**:
- OpenAI: Set monthly budget
- Azure: Set spending limit
- Agora: Monitor minutes used

**Optimize**:
- Use shorter conversations
- Implement caching
- Use cheaper models (GPT-4o-mini)
- Set idle timeout

---

## 🔒 Security Issues

### Issue 21: "Credentials exposed"

**Problem**: Accidentally committed .env to Git.

**Solution**:

**Immediate**:
1. Regenerate ALL credentials:
   - Agora: New Customer Secret
   - OpenAI: New API key
   - Azure: Regenerate key
2. Update `.env` with new credentials
3. Remove from Git history:
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch server/.env" \
  --prune-empty --tag-name-filter cat -- --all
```

**Prevention**:
- Verify `.gitignore` includes `.env`
- Never commit credentials
- Use environment variables
- Regular security audits

---

## 📊 Performance Issues

### Issue 22: "Slow response time"

**Problem**: AI takes too long to respond.

**Solution**:

**Optimize Backend**:
- Use faster OpenAI model
- Reduce max_history
- Implement caching
- Use CDN for static assets

**Optimize Network**:
- Use closer Agora region
- Stable internet connection
- Reduce payload size

**Monitor**:
```bash
# Check server response time
curl -w "@curl-format.txt" -o /dev/null -s http://192.168.0.116:3000/health
```

---

### Issue 23: "App crashes"

**Problem**: App closes unexpectedly.

**Solution**:

**Check Logs**:
```bash
# Flutter logs
flutter run --verbose

# Android logs
adb logcat

# iOS logs
# Xcode → Window → Devices and Simulators
```

**Common Causes**:
- Memory leak
- Null pointer exception
- Network timeout
- Permission denied

**Fix**:
- Add error handling
- Implement try-catch blocks
- Handle null values
- Add loading states

---

## 🆘 Getting Help

### When to Ask for Help

After trying:
- ✅ Reading relevant documentation
- ✅ Checking this troubleshooting guide
- ✅ Searching for similar issues
- ✅ Verifying all credentials
- ✅ Restarting server and app

### Where to Get Help

**Agora**:
- Email: support@agora.io
- Docs: https://docs.agora.io/
- Community: https://www.agora.io/en/community/

**OpenAI**:
- Help: https://help.openai.com/
- Community: https://community.openai.com/
- Status: https://status.openai.com/

**Azure**:
- Support: https://azure.microsoft.com/support/
- Docs: https://docs.microsoft.com/azure/
- Community: https://techcommunity.microsoft.com/

**Flutter**:
- Docs: https://flutter.dev/docs
- Community: https://flutter.dev/community
- Stack Overflow: Tag `flutter`

### What to Include When Asking

1. **Error message** (full text)
2. **What you tried** (steps taken)
3. **Environment** (OS, versions)
4. **Code snippet** (relevant part)
5. **Logs** (server/app logs)

---

## ✅ Prevention Checklist

### Before Starting
- [ ] Read documentation thoroughly
- [ ] Verify all prerequisites
- [ ] Check system requirements
- [ ] Have all credentials ready

### During Setup
- [ ] Follow steps in order
- [ ] Verify each step
- [ ] Test as you go
- [ ] Save credentials securely

### After Setup
- [ ] Test all features
- [ ] Monitor usage
- [ ] Set up alerts
- [ ] Regular backups

---

**Most issues can be solved by carefully reading error messages and checking credentials!** 🔍
