const axios = require('axios');
const config = require('../config/config');
const { getBase64Credentials, generateToken, buildAgentConfig } = require('../utils/agora.utils');

/**
 * Start a conversational AI agent
 */
async function startAgent(req, res) {
  try {
    const { channelName, uid, systemPrompt } = req.body;

    if (!channelName) {
      return res.status(400).json({ error: 'Channel name is required' });
    }

    console.log('Starting agent for channel:', channelName);

    // Generate token for the agent (if app certificate is configured)
    const agentUid = 123456;
    const token = generateToken(channelName, agentUid, 'publisher');

    // Build agent configuration
    const agentConfig = buildAgentConfig(channelName, token, systemPrompt);

    console.log('Agent config:', JSON.stringify(agentConfig, null, 2));

    // Call Agora API to start agent
    const url = `${config.agora.apiBaseUrl}/projects/${config.agora.appId}/join`;
    const headers = {
      'Authorization': `Basic ${getBase64Credentials()}`,
      'Content-Type': 'application/json'
    };

    console.log('Calling Agora API:', url);
    console.log('LLM URL configured:', agentConfig.properties.llm.url);

    const response = await axios.post(url, agentConfig, { headers });

    console.log('Agent started successfully:', response.data);

    res.json({
      success: true,
      agentId: response.data.agent_id,
      status: response.data.status,
      channelName,
      agentUid
    });

  } catch (error) {
    console.error('Error starting agent:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to start agent',
      details: error.response?.data || error.message
    });
  }
}

/**
 * Stop a conversational AI agent
 */
async function stopAgent(req, res) {
  try {
    const { agentId } = req.params;

    if (!agentId) {
      return res.status(400).json({ error: 'Agent ID is required' });
    }

    console.log('Stopping agent:', agentId);

    const url = `${config.agora.apiBaseUrl}/projects/${config.agora.appId}/agents/${agentId}/leave`;
    const headers = {
      'Authorization': `Basic ${getBase64Credentials()}`,
      'Content-Type': 'application/json'
    };

    await axios.post(url, {}, { headers });

    console.log('Agent stopped successfully');

    res.json({
      success: true,
      message: 'Agent stopped successfully'
    });

  } catch (error) {
    console.error('Error stopping agent:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to stop agent',
      details: error.response?.data || error.message
    });
  }
}

/**
 * Query agent status
 */
async function queryAgent(req, res) {
  try {
    const { agentId } = req.params;

    const url = `${config.agora.apiBaseUrl}/projects/${config.agora.appId}/agents/${agentId}`;
    const headers = {
      'Authorization': `Basic ${getBase64Credentials()}`,
      'Content-Type': 'application/json'
    };

    const response = await axios.get(url, { headers });

    res.json({
      success: true,
      agent: response.data
    });

  } catch (error) {
    console.error('Error querying agent:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to query agent',
      details: error.response?.data || error.message
    });
  }
}

/**
 * Generate RTC token for client
 */
function generateClientToken(req, res) {
  try {
    const { channelName, uid } = req.body;

    if (!channelName) {
      return res.status(400).json({ error: 'Channel name is required' });
    }

    const clientUid = uid || 0;
    const token = generateToken(channelName, clientUid, 'publisher');

    res.json({
      success: true,
      token,
      appId: config.agora.appId,
      channelName,
      uid: clientUid
    });

  } catch (error) {
    console.error('Error generating token:', error.message);
    res.status(500).json({
      error: 'Failed to generate token',
      details: error.message
    });
  }
}

module.exports = {
  startAgent,
  stopAgent,
  queryAgent,
  generateClientToken
};
