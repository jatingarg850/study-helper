# Setup ngrok to expose local server

## Why we need this:
Agora's AI agent runs on their servers (in the cloud), so it can't reach your local server at `localhost:3000` or `192.168.0.116:3000`. We need to expose your local server to the internet temporarily using ngrok.

## Quick Setup:

### 1. Install ngrok
```bash
npm install -g ngrok
```

Or download from: https://ngrok.com/download

### 2. Run ngrok
```bash
ngrok http 3000
```

### 3. Copy the URL
You'll see something like:
```
Forwarding  https://abc123.ngrok.io -> http://localhost:3000
```

Copy the `https://abc123.ngrok.io` URL

### 4. Update the code
I'll update the agora.utils.js to use your ngrok URL

### 5. Restart server and test!

## Alternative: Use OpenAI
If ngrok doesn't work, we can use OpenAI's API directly (requires API key but very cheap for testing).

Let me know which option you prefer!
