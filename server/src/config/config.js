require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  publicServerUrl: process.env.PUBLIC_SERVER_URL || `http://localhost:${process.env.PORT || 3000}`,
  agora: {
    appId: process.env.AGORA_APP_ID,
    appCertificate: process.env.AGORA_APP_CERTIFICATE,
    customerId: process.env.AGORA_CUSTOMER_ID,
    customerSecret: process.env.AGORA_CUSTOMER_SECRET,
    apiBaseUrl: 'https://api.agora.io/api/conversational-ai-agent/v2'
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: 'gemini-2.0-flash-exp'
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o-mini'
  },
  tts: {
    provider: process.env.TTS_PROVIDER || 'google', // 'google' or 'azure'
    google: {
      apiKey: process.env.GOOGLE_TTS_API_KEY,
      languageCode: 'en-US',
      voiceName: 'en-US-Neural2-J',
      audioEncoding: 'LINEAR16'
    },
    azure: {
      key: process.env.AZURE_TTS_KEY,
      region: process.env.AZURE_TTS_REGION || 'eastus',
      voiceName: 'en-US-AndrewMultilingualNeural'
    }
  }
};
