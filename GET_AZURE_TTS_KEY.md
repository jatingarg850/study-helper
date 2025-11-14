# 🎤 Get Azure TTS Key - Step by Step

## What You Need
Azure Text-to-Speech key for the AI voice responses.

**Time needed**: 5-10 minutes
**Cost**: FREE tier available (0.5M characters/month)

---

## Step 1: Go to Azure Portal

**Open this URL in your browser**:
```
https://portal.azure.com/
```

**What you'll see**:
- Microsoft Azure homepage
- "Sign in" button

**What to do**:
- Click **"Sign in"**
- Or click **"Start free"** if you don't have an account

---

## Step 2: Sign Up / Sign In

### If You Don't Have Microsoft Account:
1. Click **"Create one"**
2. Enter your email
3. Create password
4. Verify email
5. Complete profile

### If You Have Microsoft Account:
1. Enter your email
2. Enter password
3. Sign in

**Note**: You'll need to add a credit card for verification, but FREE tier is available!

---

## Step 3: Create Speech Service

Once you're in the Azure Portal:

### 3.1: Click "Create a resource"
- Look at the **top left** of the screen
- Click the **"+ Create a resource"** button
- Or click **"Create a resource"** in the center

### 3.2: Search for "Speech"
- In the search box, type: **"Speech"**
- Press Enter
- You'll see search results

### 3.3: Select Speech Service
- Find **"Speech"** or **"Speech Service"** (by Microsoft)
- Click on it
- Click the blue **"Create"** button

---

## Step 4: Fill in the Form

You'll see a form with several fields:

### Basics Tab:

**1. Subscription**:
- Select your subscription (usually "Free Trial" or "Pay-As-You-Go")

**2. Resource Group**:
- Click **"Create new"**
- Name it: **"voice-ai-resources"**
- Click **"OK"**

**3. Region**:
- Select: **"East US"** (recommended)
- Or choose closest to you:
  - West US
  - West Europe
  - Southeast Asia
- **IMPORTANT**: Remember this region!

**4. Name**:
- Enter: **"student-voice-ai-speech"**
- Must be unique globally
- If taken, try: "student-voice-ai-speech-123"

**5. Pricing Tier**:
- Select: **"Free F0"** (for testing)
- Or: **"Standard S0"** (if Free not available)
- Free tier: 0.5M characters/month FREE

**6. Click "Review + create"** (bottom of page)

---

## Step 5: Review and Create

**What you'll see**:
- Summary of your choices
- Validation status (should say "Validation passed")

**What to do**:
1. Review the details
2. Click the blue **"Create"** button
3. Wait 1-2 minutes for deployment

**You'll see**:
- "Deployment in progress..."
- Then: "Your deployment is complete" ✅

---

## Step 6: Get Your API Key

### 6.1: Go to Resource
- Click the blue **"Go to resource"** button

### 6.2: Find Keys and Endpoint
- Look at the **left sidebar**
- Find and click **"Keys and Endpoint"**
- (Under "Resource Management" section)

### 6.3: Copy Your Key
**You'll see**:
- **KEY 1**: `abc123def456...` with a copy icon 📋
- **KEY 2**: `xyz789...` (backup key)
- **Location/Region**: `eastus`
- **Endpoint**: URL

**What to copy**:
1. **KEY 1**: Click the copy icon 📋
   - Save this: This is your `AZURE_TTS_KEY`
2. **Location/Region**: Note this down
   - Example: `eastus`, `westus`, `westeurope`

---

## Step 7: Update Your .env File

Now update your `server/.env` file:

```env
# Azure TTS Configuration
AZURE_TTS_KEY=abc123def456ghi789jkl012mno345pq  # ← Paste KEY 1 here
AZURE_TTS_REGION=eastus  # ← Your region (lowercase, no spaces)
```

**Common regions**:
- East US → `eastus`
- West US → `westus`
- West Europe → `westeurope`
- Southeast Asia → `southeastasia`

**Save the file!**

---

## Visual Guide: What You'll See

### Screen 1: Azure Portal Home
```
┌─────────────────────────────────────────┐
│  Microsoft Azure                        │
│  ┌─────────────────────────────────┐   │
│  │  + Create a resource            │ ← Click here
│  └─────────────────────────────────┘   │
│                                         │
│  Recent resources                       │
│  Azure services                         │
└─────────────────────────────────────────┘
```

### Screen 2: Create a Resource
```
┌─────────────────────────────────────────┐
│  Create a resource                      │
│  ┌─────────────────────────────────┐   │
│  │  Search: Speech              🔍 │ ← Type here
│  └─────────────────────────────────┘   │
│                                         │
│  Results:                               │
│  ┌─────────────────────────────────┐   │
│  │  Speech                         │   │
│  │  Microsoft                      │   │
│  │  [Create]                       │ ← Click
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Screen 3: Create Speech Service Form
```
┌─────────────────────────────────────────┐
│  Create Speech Service                  │
│                                         │
│  Subscription: [Free Trial ▼]          │
│  Resource group: [Create new]          │
│  Region: [East US ▼]                   │
│  Name: [student-voice-ai-speech]       │
│  Pricing tier: [Free F0 ▼]            │
│                                         │
│  [Review + create]                      │
└─────────────────────────────────────────┘
```

### Screen 4: Keys and Endpoint
```
┌─────────────────────────────────────────┐
│  Keys and Endpoint                      │
│                                         │
│  KEY 1                                  │
│  abc123def456ghi789jkl012  [📋]        │ ← Copy this
│                                         │
│  KEY 2                                  │
│  xyz789abc123def456ghi789  [📋]        │
│                                         │
│  Location/Region                        │
│  eastus                                 │ ← Note this
│                                         │
│  Endpoint                               │
│  https://eastus.api.cognitive...       │
└─────────────────────────────────────────┘
```

---

## Common Issues & Solutions

### Issue 1: "Subscription required"
**Solution**: 
- Add payment method (credit card)
- Free tier is still FREE
- Card is for verification only

### Issue 2: "Name already taken"
**Solution**:
- Try different name
- Add numbers: "student-voice-ai-speech-123"
- Or use your name: "john-voice-ai-speech"

### Issue 3: "Free tier not available"
**Solution**:
- Select "Standard S0" instead
- Still very cheap (~$1 per 1M characters)
- Set spending limit

### Issue 4: "Can't find Keys and Endpoint"
**Solution**:
- Look in left sidebar
- Under "Resource Management"
- Or search for "Keys" in the resource page

---

## Verification

### Check Your .env File
Should look like this:
```env
# Agora Configuration
AGORA_APP_ID=dcec8fd34e6e4144825fe891dab5e89f
AGORA_CUSTOMER_ID=f2551165edac4d0e8e13275a0e4aa571
AGORA_CUSTOMER_SECRET=71d77a71920840e5b5a85c302e3a0ee1

# Google Gemini Configuration
GEMINI_API_KEY=AIzaSyD3pxE2SVCiFH3--8rBDd5_b4_dElTQMT4

# Azure TTS Configuration
AZURE_TTS_KEY=your_actual_key_here  # ← Should be real key now
AZURE_TTS_REGION=eastus  # ← Should match your region

# Server Configuration
PORT=3000
NODE_ENV=development
```

### Test Your Key
```bash
# Test if key works
curl -X POST "https://eastus.tts.speech.microsoft.com/cognitiveservices/v1" \
  -H "Ocp-Apim-Subscription-Key: YOUR_KEY_HERE" \
  -H "Content-Type: application/ssml+xml"
```

---

## Alternative: Use Google Cloud TTS (Free Option)

If you don't want to use Azure, you can use Google Cloud TTS:

### Pros:
- Free tier: 1M characters/month
- You already have Google account (for Gemini)
- Easy setup

### Steps:
1. Go to https://console.cloud.google.com/
2. Enable "Cloud Text-to-Speech API"
3. Create API key
4. I'll modify the code to use Google TTS

**Want to use Google TTS instead?** Let me know!

---

## Cost Breakdown

### Azure TTS Pricing:
- **Free F0**: 0.5M characters/month FREE
- **Standard**: $1 per 1M characters
- **Neural voices**: $16 per 1M characters

### Example Usage:
- 1 minute of speech ≈ 150 characters
- 1 hour of speech ≈ 9,000 characters
- 100 hours = 900,000 characters = FREE tier!

**For testing**: Free tier is MORE than enough!

---

## Quick Checklist

- [ ] Go to portal.azure.com
- [ ] Sign in / Sign up
- [ ] Click "Create a resource"
- [ ] Search for "Speech"
- [ ] Click "Create"
- [ ] Fill in form:
  - [ ] Resource group: "voice-ai-resources"
  - [ ] Region: "East US"
  - [ ] Name: "student-voice-ai-speech"
  - [ ] Pricing: "Free F0"
- [ ] Click "Review + create"
- [ ] Click "Create"
- [ ] Wait for deployment
- [ ] Click "Go to resource"
- [ ] Click "Keys and Endpoint"
- [ ] Copy KEY 1
- [ ] Note the region
- [ ] Update server/.env file
- [ ] Save file

---

## After Getting the Key

Once you update your `.env` file with the Azure key, you'll have:

✅ Agora credentials
✅ Gemini API key (for AI)
✅ Azure TTS key (for voice)

**Then you can start the server!**

```bash
cd server
npm start
```

---

## Need Help?

**Azure Support**:
- Docs: https://docs.microsoft.com/azure/cognitive-services/speech-service/
- Support: https://azure.microsoft.com/support/

**Stuck?** Let me know at which step you're having trouble!

---

**Start with Step 1: Go to https://portal.azure.com/** 🚀
