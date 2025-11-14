const express = require('express');
const router = express.Router();
const geminiService = require('../services/gemini.service');

// Test Gemini API
router.post('/test', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await geminiService.generateContent(prompt);
    
    res.json({
      success: true,
      response: response
    });

  } catch (error) {
    console.error('Error testing Gemini:', error);
    res.status(500).json({
      error: 'Failed to generate content',
      details: error.message
    });
  }
});

// Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const chat = await geminiService.startChat(history || []);
    const response = await geminiService.sendMessage(chat, message);
    
    res.json({
      success: true,
      response: response
    });

  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({
      error: 'Failed to process chat',
      details: error.message
    });
  }
});

module.exports = router;
