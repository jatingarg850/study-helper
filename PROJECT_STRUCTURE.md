# Student Voice AI App - Project Structure

## Overview
A voice-interactive educational app for students using Agora Conversational AI

## Features
1. Voice AI Assistant (Agora + OpenAI)
2. Voice Navigation
3. Doubt Resolution (LLM-powered)
4. Flashcards with voice
5. Communities
6. Educational News

## Architecture

### Flutter App (app/)
```
lib/
├── main.dart
├── config/
│   └── app_config.dart
├── models/
│   ├── flashcard.dart
│   ├── community_post.dart
│   ├── news_article.dart
│   └── user.dart
├── services/
│   ├── agora_service.dart
│   ├── api_service.dart
│   ├── voice_command_service.dart
│   └── storage_service.dart
├── providers/
│   ├── auth_provider.dart
│   ├── voice_provider.dart
│   └── app_state_provider.dart
├── screens/
│   ├── home_screen.dart
│   ├── voice_assistant_screen.dart
│   ├── flashcards_screen.dart
│   ├── communities_screen.dart
│   └── news_screen.dart
└── widgets/
    ├── voice_button.dart
    └── common/
```

### Backend Server (server/)
```
server/
├── package.json
├── .env.example
├── src/
│   ├── index.js
│   ├── config/
│   │   └── config.js
│   ├── routes/
│   │   ├── agora.routes.js
│   │   ├── flashcards.routes.js
│   │   ├── communities.routes.js
│   │   └── news.routes.js
│   ├── controllers/
│   │   ├── agora.controller.js
│   │   ├── flashcards.controller.js
│   │   ├── communities.controller.js
│   │   └── news.controller.js
│   └── utils/
│       ├── agora.utils.js
│       └── auth.utils.js
```

## Tech Stack
- Flutter 3.9+
- Node.js + Express
- Agora RTC SDK + Conversational AI
- Firebase/Firestore
- OpenAI API
- Microsoft Azure TTS

## Environment Variables Needed
- AGORA_APP_ID
- AGORA_CUSTOMER_ID
- AGORA_CUSTOMER_SECRET
- OPENAI_API_KEY
- AZURE_TTS_KEY
- AZURE_TTS_REGION
- FIREBASE_CONFIG
