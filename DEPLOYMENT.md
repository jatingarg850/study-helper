# Deployment Guide - Student Voice AI

## Production Deployment Checklist

### Backend Server

#### 1. Environment Setup
```bash
# Use production environment variables
NODE_ENV=production
PORT=3000

# Use secure credentials
AGORA_APP_ID=prod_app_id
AGORA_CUSTOMER_ID=prod_customer_id
AGORA_CUSTOMER_SECRET=prod_customer_secret
OPENAI_API_KEY=prod_openai_key
AZURE_TTS_KEY=prod_azure_key
```

#### 2. Security Enhancements
- [ ] Implement rate limiting
- [ ] Add CORS restrictions
- [ ] Use HTTPS/SSL certificates
- [ ] Implement proper token generation
- [ ] Add request validation
- [ ] Enable logging and monitoring
- [ ] Add authentication/authorization

#### 3. Server Deployment Options

**Option A: AWS EC2**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone <repo>
cd server
npm install --production
npm start

# Use PM2 for process management
npm install -g pm2
pm2 start src/index.js --name voice-ai-server
pm2 startup
pm2 save
```

**Option B: Heroku**
```bash
# Install Heroku CLI
heroku login
heroku create voice-ai-server

# Set environment variables
heroku config:set AGORA_APP_ID=xxx
heroku config:set OPENAI_API_KEY=xxx
# ... set all variables

# Deploy
git push heroku main
```

**Option C: Docker**
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t voice-ai-server .
docker run -p 3000:3000 --env-file .env voice-ai-server
```

#### 4. Monitoring
- Set up logging (Winston, Morgan)
- Add error tracking (Sentry)
- Monitor API usage
- Track response times
- Set up alerts

---

### Flutter App

#### 1. Update Configuration

**app/lib/config/app_config.dart**
```dart
class AppConfig {
  static const String serverBaseUrl = 'https://your-production-server.com/api';
  
  // Production settings
  static const bool isProduction = true;
  static const bool enableLogging = false;
}
```

#### 2. Build Release Version

**Android**
```bash
# Generate keystore (first time only)
keytool -genkey -v -keystore ~/upload-keystore.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload

# Create key.properties
# android/key.properties
storePassword=<password>
keyPassword=<password>
keyAlias=upload
storeFile=<path-to-keystore>

# Build APK
flutter build apk --release

# Build App Bundle (for Play Store)
flutter build appbundle --release
```

**iOS**
```bash
# Build iOS
flutter build ios --release

# Or build IPA
flutter build ipa --release
```

#### 3. App Store Submission

**Google Play Store**
1. Create developer account ($25 one-time)
2. Create app listing
3. Upload app bundle
4. Fill in store listing details
5. Set up pricing and distribution
6. Submit for review

**Apple App Store**
1. Enroll in Apple Developer Program ($99/year)
2. Create app in App Store Connect
3. Upload IPA via Xcode or Transporter
4. Fill in app information
5. Submit for review

#### 4. Required Permissions Documentation

**Android (AndroidManifest.xml)**
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
```

**iOS (Info.plist)**
```xml
<key>NSMicrophoneUsageDescription</key>
<string>This app needs microphone access for voice conversations with AI</string>
<key>NSCameraUsageDescription</key>
<string>This app needs camera access for profile pictures</string>
```

---

## Database Setup (Optional)

### Firebase Setup
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init

# Select:
# - Firestore
# - Authentication
# - Storage
```

**Flutter Firebase Setup**
```bash
# Add Firebase to Flutter
flutter pub add firebase_core
flutter pub add cloud_firestore
flutter pub add firebase_auth

# Download google-services.json (Android)
# Download GoogleService-Info.plist (iOS)
```

---

## CI/CD Pipeline

### GitHub Actions Example

**.github/workflows/deploy.yml**
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy-server:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to server
        run: |
          # Your deployment script
          
  build-android:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
      - uses: subosito/flutter-action@v2
      - run: flutter pub get
      - run: flutter build apk --release
      - uses: actions/upload-artifact@v2
        with:
          name: release-apk
          path: build/app/outputs/flutter-apk/app-release.apk
```

---

## Performance Optimization

### Backend
- [ ] Enable gzip compression
- [ ] Implement caching (Redis)
- [ ] Use CDN for static assets
- [ ] Optimize database queries
- [ ] Implement connection pooling

### Flutter App
- [ ] Enable code obfuscation
- [ ] Optimize images
- [ ] Implement lazy loading
- [ ] Use cached network images
- [ ] Minimize app size

---

## Monitoring & Analytics

### Backend Monitoring
```javascript
// Add to server
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

### App Analytics
```dart
// Add Firebase Analytics
import 'package:firebase_analytics/firebase_analytics.dart';

final analytics = FirebaseAnalytics.instance;
await analytics.logEvent(
  name: 'voice_conversation_started',
  parameters: {'user_id': userId},
);
```

---

## Cost Estimation

### Monthly Costs (Estimated)

**Agora**
- Voice minutes: $0.99 per 1000 minutes
- Conversational AI: Custom pricing

**OpenAI**
- GPT-4o-mini: $0.15 per 1M input tokens
- GPT-4o-mini: $0.60 per 1M output tokens

**Azure TTS**
- Standard: $1 per 1M characters
- Neural: $16 per 1M characters

**Server Hosting**
- AWS EC2 t3.small: ~$15/month
- Heroku Hobby: $7/month
- DigitalOcean Droplet: $6/month

**Total Estimated**: $50-200/month (depending on usage)

---

## Scaling Strategy

### Phase 1: 0-1000 users
- Single server instance
- Basic monitoring
- Manual deployments

### Phase 2: 1000-10000 users
- Load balancer
- Multiple server instances
- Auto-scaling
- Database optimization
- CDN implementation

### Phase 3: 10000+ users
- Microservices architecture
- Kubernetes orchestration
- Global CDN
- Advanced caching
- Real-time monitoring

---

## Backup & Recovery

### Database Backups
```bash
# Automated daily backups
0 2 * * * /usr/bin/backup-script.sh

# Backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
mongodump --out /backups/backup-$DATE
```

### Server Backups
- Use AWS snapshots
- Implement version control
- Store configs in secure location
- Test recovery procedures

---

## Security Best Practices

- [ ] Use HTTPS everywhere
- [ ] Implement rate limiting
- [ ] Validate all inputs
- [ ] Use environment variables
- [ ] Enable CORS properly
- [ ] Implement authentication
- [ ] Regular security audits
- [ ] Keep dependencies updated
- [ ] Use secrets management
- [ ] Enable logging

---

## Post-Deployment

### Testing
- [ ] Test all features in production
- [ ] Verify API endpoints
- [ ] Check voice functionality
- [ ] Test on multiple devices
- [ ] Monitor error rates

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure alerts
- [ ] Track user metrics
- [ ] Monitor API usage
- [ ] Check error logs

### Maintenance
- [ ] Regular updates
- [ ] Security patches
- [ ] Performance optimization
- [ ] User feedback implementation
- [ ] Feature additions

---

## Support & Maintenance

### User Support
- Set up support email
- Create FAQ section
- Implement in-app feedback
- Monitor app reviews
- Respond to issues promptly

### Regular Maintenance
- Weekly: Check logs and errors
- Monthly: Update dependencies
- Quarterly: Security audit
- Yearly: Major version updates

---

**Ready to deploy? Follow this guide step by step!**
