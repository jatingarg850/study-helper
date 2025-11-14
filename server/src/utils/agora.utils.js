const { RtcTokenBuilder, RtcRole } = require('agora-token');
const config = require('../config/config');

/**
 * Generate base64 encoded credentials for Agora API authentication
 */
function getBase64Credentials() {
  const credentials = `${config.agora.customerId}:${config.agora.customerSecret}`;
  return Buffer.from(credentials).toString('base64');
}

/**
 * Generate Agora RTC token
 */
function generateToken(channelName, uid = '0', role = 'publisher') {
  const appId = config.agora.appId;
  const appCertificate = config.agora.appCertificate || '';
  
  if (!appCertificate) {
    console.warn('Warning: No app certificate configured. Token generation disabled.');
    return '';
  }

  const uidInt = parseInt(uid) || 0;
  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  const roleType = role === 'publisher' ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER;

  return RtcTokenBuilder.buildTokenWithUid(
    appId,
    appCertificate,
    channelName,
    uidInt,
    roleType,
    privilegeExpiredTs
  );
}

/**
 * Build agent configuration for Agora Conversational AI
 */
function buildAgentConfig(channelName, token, systemPrompt = null) {
  const defaultPrompt = "You are a friendly, emotionally intelligent conversational assistant who answers questions naturally and briefly. Keep responses under 40 words.";

  const agentUid = 123456;

  return {
    name: `student_ai_${channelName}_${Date.now()}`,
    properties: {
      channel: channelName,
      token: token || undefined,
      agent_rtc_uid: agentUid.toString(),
      remote_rtc_uids: ["*"],
      enable_string_uid: false,
      idle_timeout: 180,
      llm: {
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:streamGenerateContent?alt=sse&key=${config.gemini.apiKey}`,
        system_messages: [
          {
            parts: [
              {
                text: systemPrompt || defaultPrompt
              }
            ],
            role: "user"
          }
        ],
        greeting_message: "Hi! I'm your study assistant. How can I help?",
        failure_message: "Sorry, I didn't catch that. Could you repeat?",
        max_history: 20,
        params: {
          model: "gemini-2.0-flash-exp"
        },
        style: "gemini",
        ignore_empty: true
      },
      asr: {
        language: "en-US"
      },
      tts: {
        vendor: "elevenlabs",
        params: {
          key: process.env.ELEVENLABS_API_KEY,
          model_id: "eleven_flash_v2_5",
          voice_id: "pqHfZKP75CvOlQylNhV4",
          sample_rate: 24000,
          stability: 0.85,
          similarity_boost: 0.9,
          style: 0.6,
          speed: 1.0,
          use_speaker_boost: true
        }
      }
    }
  };
}

module.exports = {
  getBase64Credentials,
  generateToken,
  buildAgentConfig
};
