const express = require('express');
const router = express.Router();
const geminiProxyController = require('../controllers/gemini-proxy.controller');

// OpenAI-compatible endpoints
router.post('/chat/completions', geminiProxyController.chatCompletions);
router.get('/models', geminiProxyController.listModels);

module.exports = router;
