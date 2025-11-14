# Student Voice AI - Backend Server

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Fill in your credentials in `.env`:
- AGORA_APP_ID
- AGORA_CUSTOMER_ID
- AGORA_CUSTOMER_SECRET
- OPENAI_API_KEY
- AZURE_TTS_KEY
- AZURE_TTS_REGION

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Start AI Agent
POST `/api/agora/agent/start`
```json
{
  "channelName": "student_123",
  "uid": "0",
  "systemPrompt": "Optional custom prompt"
}
```

### Stop AI Agent
POST `/api/agora/agent/:agentId/stop`

### Generate Token
POST `/api/agora/token`
```json
{
  "channelName": "student_123",
  "uid": "0"
}
```

## Server runs on port 3000 by default
