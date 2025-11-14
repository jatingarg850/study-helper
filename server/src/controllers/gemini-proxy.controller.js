const axios = require('axios');
const config = require('../config/config');

/**
 * OpenAI-compatible proxy for Google Gemini
 * Converts OpenAI chat completion format to Gemini format
 */
async function chatCompletions(req, res) {
  try {
    const { messages, model, temperature, max_tokens } = req.body;

    // Convert OpenAI messages to Gemini format
    const geminiMessages = convertToGeminiFormat(messages);

    // Call Gemini API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model || 'gemini-2.0-flash-exp'}:generateContent?key=${config.gemini.apiKey}`;
    
    const geminiRequest = {
      contents: geminiMessages,
      generationConfig: {
        temperature: temperature || 0.7,
        maxOutputTokens: max_tokens || 1024,
      }
    };

    console.log('\n=== GEMINI PROXY REQUEST ===');
    console.log('Messages:', JSON.stringify(messages, null, 2));
    console.log('Gemini Request:', JSON.stringify(geminiRequest, null, 2));

    const response = await axios.post(geminiUrl, geminiRequest);

    // Convert Gemini response to OpenAI format
    const openaiResponse = convertToOpenAIFormat(response.data, model);

    console.log('\n=== GEMINI PROXY RESPONSE ===');
    console.log('AI Response Text:', openaiResponse.choices[0].message.content);
    console.log('Full Response:', JSON.stringify(openaiResponse, null, 2));
    console.log('===========================\n');

    res.json(openaiResponse);

  } catch (error) {
    console.error('Gemini Proxy Error:', error.response?.data || error.message);
    res.status(500).json({
      error: {
        message: error.response?.data?.error?.message || error.message,
        type: 'gemini_proxy_error',
        code: error.response?.status || 500
      }
    });
  }
}

/**
 * Convert OpenAI messages format to Gemini format
 */
function convertToGeminiFormat(messages) {
  const geminiMessages = [];
  
  for (const msg of messages) {
    if (msg.role === 'system') {
      // Gemini doesn't have system role, prepend to first user message
      continue;
    }
    
    geminiMessages.push({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    });
  }

  // Add system message as first user message if exists
  const systemMsg = messages.find(m => m.role === 'system');
  if (systemMsg && geminiMessages.length > 0) {
    geminiMessages[0].parts[0].text = `${systemMsg.content}\n\n${geminiMessages[0].parts[0].text}`;
  }

  return geminiMessages;
}

/**
 * Convert Gemini response to OpenAI format
 */
function convertToOpenAIFormat(geminiResponse, model) {
  const text = geminiResponse.candidates?.[0]?.content?.parts?.[0]?.text || '';
  
  return {
    id: `chatcmpl-${Date.now()}`,
    object: 'chat.completion',
    created: Math.floor(Date.now() / 1000),
    model: model || 'gemini-2.0-flash-exp',
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content: text
        },
        finish_reason: 'stop'
      }
    ],
    usage: {
      prompt_tokens: geminiResponse.usageMetadata?.promptTokenCount || 0,
      completion_tokens: geminiResponse.usageMetadata?.candidatesTokenCount || 0,
      total_tokens: geminiResponse.usageMetadata?.totalTokenCount || 0
    }
  };
}

/**
 * List models endpoint (OpenAI compatible)
 */
function listModels(req, res) {
  res.json({
    object: 'list',
    data: [
      {
        id: 'gemini-2.0-flash-exp',
        object: 'model',
        created: 1686935002,
        owned_by: 'google'
      },
      {
        id: 'gemini-pro',
        object: 'model',
        created: 1686935002,
        owned_by: 'google'
      }
    ]
  });
}

module.exports = {
  chatCompletions,
  listModels
};
