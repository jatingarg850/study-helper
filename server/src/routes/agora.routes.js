const express = require('express');
const router = express.Router();
const agoraController = require('../controllers/agora.controller');

// Start AI agent
router.post('/agent/start', agoraController.startAgent);

// Stop AI agent
router.post('/agent/:agentId/stop', agoraController.stopAgent);

// Query agent status
router.get('/agent/:agentId', agoraController.queryAgent);

// Generate client token
router.post('/token', agoraController.generateClientToken);

// Get agent details (for debugging)
router.get('/agent/:agentId/details', agoraController.queryAgent);

module.exports = router;
