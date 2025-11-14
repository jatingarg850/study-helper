const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const agoraRoutes = require('./routes/agora.routes');
const geminiRoutes = require('./routes/gemini.routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/agora', agoraRoutes);
app.use('/api/gemini', geminiRoutes);

// OpenAI-compatible proxy for Gemini
const geminiProxyRoutes = require('./routes/gemini-proxy.routes');
app.use('/v1', geminiProxyRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running with Gemini AI' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
