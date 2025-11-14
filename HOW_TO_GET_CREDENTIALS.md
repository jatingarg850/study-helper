# 🔑 How to Get All API Credentials

## Complete Step-by-Step Guide

---

## 1. Agora Credentials (Most Important!)

### Step 1: Create Agora Account
1. Go to **https://console.agora.io/**
2. Click **"Sign Up"** (top right)
3. Fill in your details:
   - Email address
   - Password
   - Company name (can be your name)
   - Country
4. Verify your email
5. Log in to Agora Console

### Step 2: Create a Project
1. Once logged in, you'll see the dashboard
2. Click **"Project Management"** in left sidebar
3. Click **"Create"** button
4. Fill in project details:
   - **Project Name**: "Student Voice AI" (or any name)
   - **Use Case**: Select "Education"
   - **Authentication**: Select "Secured mode: APP ID + Token"
5. Click **"Submit"**

### Step 3: Get App ID
1. Your project is now created
2. You'll see it in the project list
3. Find the **"App ID"** column
4. Click the **eye icon** to reveal the App ID
5. Click **copy icon** to copy it
6. **Save this** - This is your `AGORA_APP_ID`

### Step 4: Enable Conversational AI
1. In your project row, click **"Config"** button
2. Scroll down to **"Features"** section
3. Find **"Conversational AI"** or **"AI Agent"**
4. Click **"Enable"** button
5. Accept terms if prompted
6. Wait for activation (may take a few minutes)

### Step 5: Get Customer ID and Customer Secret

⚠️ **IMPORTANT**: If you see "No Restful API has been found!" warning, see [AGORA_RESTFUL_API_FIX.md](AGORA_RESTFUL_API_FIX.md) first!

1. In the left sidebar, click **"RESTful API"**
2. **If you see a warning**: Click the blue link "Click here to manage RESTful-api"
3. **Create RESTful API Credential**:
   - Click "Create" or "Add"
   - Name: "Student Voice AI"
   - Role: Select "Admin"
   - Projects: Select your project
   - Click "Create"
4. **Copy the credentials**:
   - **Customer ID**: 
     - Click the eye icon to reveal
     - Click copy icon
     - **Save this** - This is your `AGORA_CUSTOMER_ID`
   - **Customer Secret**:
     - Click **"View"** or eye icon
     - You may need to verify your identity
     - Click copy icon
     - **Save this** - This is your `AGORA_CUSTOMER_SECRET`
     - ⚠️ **Important**: Keep this secret! Don't share it!

### Step 6: Generate Temporary Token (For Testing)
1. Go back to **"Project Management"**
2. Click **"Config"** on your project
3. Scroll to **"Generate Temp Token"** section
4. Enter a channel name: "test123"
5. Click **"Generate"**
6. Copy the token (you'll use this for initial testing)

### ✅ Agora Credentials Checklist
- [ ] AGORA_APP_ID (looks like: `abc123def456...`)
- [ ] AGORA_CUSTOMER_ID (looks like: `customer_id_here`)
- [ ] AGORA_CUSTOMER_SECRET (looks like: `secret_key_here`)
- [ ] Conversational AI feature enabled

---

## 2. OpenAI API Key

### Step 1: Create OpenAI Account
1. Go to **https://platform.openai.com/**
2. Click **"Sign up"**
3. Create account with:
   - Email (or Google/Microsoft account)
   - Password
4. Verify your email
5. Complete profile setup

### Step 2: Add Payment Method
⚠️ **Important**: OpenAI requires a payment method even for testing
1. Click your profile icon (top right)
2. Go to **"Billing"**
3. Click **"Add payment method"**
4. Enter credit card details
5. Set usage limits (recommended: $5-10 for testing)

### Step 3: Create API Key
1. Click your profile icon
2. Go to **"API keys"** or **"View API keys"**
3. Click **"Create new secret key"**
4. Give it a name: "Student Voice AI"
5. Click **"Create secret key"**
6. **Copy the key immediately!** (You won't see it again)
7. **Save this** - This is your `OPENAI_API_KEY`
8. Key looks like: `sk-proj-...` or `sk-...`

### Step 4: Check Billing
1. Go to **"Usage"** section
2. Verify you have credits or payment method active
3. Set up usage alerts (recommended)

### ✅ OpenAI Checklist
- [ ] Account created
- [ ] Payment method added
- [ ] API key created and saved
- [ ] Billing verified

---

## 3. Microsoft Azure TTS (Text-to-Speech)

### Step 1: Create Azure Account
1. Go to **https://portal.azure.com/**
2. Click **"Start free"** or **"Sign in"**
3. Sign up with:
   - Microsoft account (or create new)
   - Phone verification
   - Credit card (for verification, free tier available)
4. Complete account setup

### Step 2: Create Speech Service
1. Once in Azure Portal, click **"Create a resource"** (top left)
2. Search for **"Speech"** or **"Speech Service"**
3. Click **"Speech"** from results
4. Click **"Create"**

### Step 3: Configure Speech Service
Fill in the details:
1. **Subscription**: Select your subscription
2. **Resource Group**: 
   - Click "Create new"
   - Name it: "voice-ai-resources"
3. **Region**: Select closest to you (e.g., "East US", "West Europe")
   - **Save this region** - This is your `AZURE_TTS_REGION`
4. **Name**: "student-voice-ai-speech"
5. **Pricing tier**: Select "Free F0" (for testing) or "Standard S0"
6. Click **"Review + create"**
7. Click **"Create"**
8. Wait for deployment (1-2 minutes)

### Step 4: Get API Key
1. Click **"Go to resource"** after deployment
2. In the left menu, click **"Keys and Endpoint"**
3. You'll see:
   - **KEY 1**: Click copy icon
   - **Save this** - This is your `AZURE_TTS_KEY`
   - **KEY 2**: Backup key (optional)
   - **Region**: Note this down (e.g., "eastus")

### Step 5: Verify Region
Common region codes:
- East US: `eastus`
- West US: `westus`
- West Europe: `westeurope`
- Southeast Asia: `southeastasia`

### ✅ Azure TTS Checklist
- [ ] Azure account created
- [ ] Speech Service created
- [ ] API Key copied
- [ ] Region noted

---

## 4. Fill in Your .env File

Now that you have all credentials, update `server/.env`:

```env
# Agora Configuration
AGORA_APP_ID=abc123def456ghi789jkl  # Your actual App ID
AGORA_CUSTOMER_ID=your_customer_id_here  # Your Customer ID
AGORA_CUSTOMER_SECRET=your_secret_here  # Your Customer Secret

# OpenAI Configuration
OPENAI_API_KEY=sk-proj-abcdefghijklmnop  # Your actual API key

# Azure TTS Configuration
AZURE_TTS_KEY=1234567890abcdef1234567890abcdef  # Your actual key
AZURE_TTS_REGION=eastus  # Your actual region

# Server Configuration
PORT=3000
NODE_ENV=development
```

---

## 5. Verify Your Credentials

### Test Agora
```bash
# In server directory
node -e "console.log('App ID:', process.env.AGORA_APP_ID)" 
```

### Test OpenAI
```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer YOUR_OPENAI_KEY"
```

### Test Azure TTS
```bash
curl -X POST "https://YOUR_REGION.tts.speech.microsoft.com/cognitiveservices/v1" \
  -H "Ocp-Apim-Subscription-Key: YOUR_AZURE_KEY"
```

---

## 📋 Quick Reference

### Agora Console
- **URL**: https://console.agora.io/
- **What you need**: App ID, Customer ID, Customer Secret
- **Where**: Project Management → Your Project

### OpenAI Platform
- **URL**: https://platform.openai.com/
- **What you need**: API Key
- **Where**: Profile → API Keys

### Azure Portal
- **URL**: https://portal.azure.com/
- **What you need**: Speech Service Key, Region
- **Where**: Your Speech Service → Keys and Endpoint

---

## 💰 Cost Estimates

### Agora (Pay-as-you-go)
- **Free tier**: 10,000 minutes/month
- **Voice**: $0.99 per 1,000 minutes
- **Conversational AI**: Contact sales for pricing
- **Estimated**: $0-50/month for testing

### OpenAI
- **No free tier** (requires payment method)
- **GPT-4o-mini**: $0.15 per 1M input tokens, $0.60 per 1M output tokens
- **Estimated**: $5-20/month for testing
- **Tip**: Set usage limits!

### Azure TTS
- **Free tier**: 0.5M characters/month
- **Standard**: $1 per 1M characters
- **Neural**: $16 per 1M characters
- **Estimated**: $0-5/month for testing

### Total Estimated Cost
- **Testing**: $5-30/month
- **Light usage**: $20-100/month
- **Production**: $100-500/month

---

## 🔒 Security Best Practices

### DO ✅
- Keep credentials in `.env` file
- Add `.env` to `.gitignore`
- Use environment variables
- Rotate keys regularly
- Set usage limits
- Monitor usage

### DON'T ❌
- Commit credentials to Git
- Share credentials publicly
- Hardcode in source code
- Use production keys for testing
- Ignore usage alerts

---

## 🐛 Common Issues

### Agora Issues

**Problem**: Can't find Customer ID/Secret
- **Solution**: Go to RESTful API section in left sidebar

**Problem**: Conversational AI not available
- **Solution**: Contact Agora support to enable for your account

**Problem**: Token generation fails
- **Solution**: Verify App ID is correct and project is in secured mode

### OpenAI Issues

**Problem**: API key doesn't work
- **Solution**: Verify payment method is added and active

**Problem**: Rate limit errors
- **Solution**: Check usage limits and billing

**Problem**: "Insufficient quota"
- **Solution**: Add credits or upgrade plan

### Azure Issues

**Problem**: Can't find Speech Service
- **Solution**: Search for "Speech" in "Create a resource"

**Problem**: Wrong region
- **Solution**: Use exact region code (e.g., "eastus" not "East US")

**Problem**: Key doesn't work
- **Solution**: Verify you copied KEY 1 correctly

---

## 📞 Support Contacts

### Agora Support
- **Email**: support@agora.io
- **Docs**: https://docs.agora.io/
- **Console**: https://console.agora.io/

### OpenAI Support
- **Help**: https://help.openai.com/
- **Docs**: https://platform.openai.com/docs
- **Status**: https://status.openai.com/

### Azure Support
- **Support**: https://azure.microsoft.com/support/
- **Docs**: https://docs.microsoft.com/azure/
- **Portal**: https://portal.azure.com/

---

## ✅ Final Checklist

Before starting the app:

- [ ] Agora account created
- [ ] Agora project created
- [ ] Conversational AI enabled
- [ ] App ID copied
- [ ] Customer ID copied
- [ ] Customer Secret copied
- [ ] OpenAI account created
- [ ] Payment method added to OpenAI
- [ ] OpenAI API key created
- [ ] Azure account created
- [ ] Speech Service created
- [ ] Azure TTS key copied
- [ ] Azure region noted
- [ ] All credentials in .env file
- [ ] .env file saved
- [ ] Credentials verified

---

## 🎉 You're Ready!

Once all credentials are in your `.env` file, you can start the server:

```bash
cd server
npm start
```

If you see "Server running on port 3000", you're all set! 🚀

---

**Need help? Check the troubleshooting section or contact support!**
