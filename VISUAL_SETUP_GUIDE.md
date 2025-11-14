# 📸 Visual Setup Guide - Step by Step

## This guide describes what you'll see on each screen

---

## 🎯 Part 1: Agora Setup

### Screen 1: Agora Console Homepage
**URL**: https://console.agora.io/

**What you'll see**:
- Blue/purple Agora logo at top
- "Sign Up" button (top right)
- "Sign In" button (top right)
- Marketing content about Agora services

**What to do**:
1. Click "Sign Up" if new user
2. Or click "Sign In" if you have account

---

### Screen 2: Sign Up Form
**What you'll see**:
- Email field
- Password field
- Company name field
- Country dropdown
- Terms checkbox
- "Sign Up" button

**What to do**:
1. Enter your email
2. Create strong password
3. Enter company name (can be your name)
4. Select your country
5. Check terms box
6. Click "Sign Up"
7. Check email for verification

---

### Screen 3: Dashboard (After Login)
**What you'll see**:
- Left sidebar with menu items:
  - Dashboard
  - Project Management ← **Click this**
  - Analytics
  - RESTful API
  - etc.
- Main area showing overview
- Top bar with your profile

**What to do**:
1. Click "Project Management" in left sidebar

---

### Screen 4: Project Management
**What you'll see**:
- "Create" button (top right) ← **Click this**
- List of projects (empty if new)
- Columns: Project Name, App ID, Status, etc.

**What to do**:
1. Click blue "Create" button

---

### Screen 5: Create Project Dialog
**What you'll see**:
- Modal/popup window
- Fields:
  - Project Name (text input)
  - Use Case (dropdown)
  - Authentication (radio buttons)
- "Submit" button

**What to do**:
1. Project Name: Type "Student Voice AI"
2. Use Case: Select "Education"
3. Authentication: Select "Secured mode: APP ID + Token"
4. Click "Submit"

---

### Screen 6: Project Created
**What you'll see**:
- Your project in the list
- Columns showing:
  - Project Name: "Student Voice AI"
  - App ID: `abc123...` with eye icon ← **Important!**
  - Status: Active
  - Actions: Config button

**What to do**:
1. Find the App ID column
2. Click the eye icon to reveal
3. Click copy icon
4. Paste in notepad: `AGORA_APP_ID=abc123...`

---

### Screen 7: Project Config
**What you'll see**:
- Click "Config" button on your project
- New page opens with sections:
  - Basic Information
  - Features ← **Look here**
  - Generate Temp Token
  - etc.

**What to do**:
1. Scroll to "Features" section
2. Find "Conversational AI" or "AI Agent"
3. Click "Enable" button
4. Wait for confirmation

---

### Screen 8: RESTful API Section
**What you'll see**:
- Click "RESTful API" in left sidebar
- Page showing:
  - Customer ID: `customer_xxx` with eye icon ← **Important!**
  - Customer Secret: Hidden with "View" button ← **Important!**
  - Documentation links

**What to do**:
1. Customer ID:
   - Click eye icon
   - Click copy
   - Paste in notepad: `AGORA_CUSTOMER_ID=customer_xxx`
2. Customer Secret:
   - Click "View" button
   - May need to verify identity
   - Click copy
   - Paste in notepad: `AGORA_CUSTOMER_SECRET=secret_xxx`

---

## 🤖 Part 2: OpenAI Setup

### Screen 1: OpenAI Homepage
**URL**: https://platform.openai.com/

**What you'll see**:
- OpenAI logo
- "Sign up" button
- "Log in" button
- Product information

**What to do**:
1. Click "Sign up"

---

### Screen 2: Sign Up
**What you'll see**:
- Email field
- Or "Continue with Google"
- Or "Continue with Microsoft"

**What to do**:
1. Enter email or use Google/Microsoft
2. Create password
3. Verify email

---

### Screen 3: OpenAI Dashboard
**What you'll see**:
- Left sidebar with:
  - Playground
  - API keys ← **Click this**
  - Usage
  - Billing
- Main area with getting started info

**What to do**:
1. Click "API keys" in left sidebar

---

### Screen 4: Billing Setup (First Time)
**What you'll see**:
- Warning: "Add payment method to use API"
- "Add payment method" button
- Pricing information

**What to do**:
1. Click "Add payment method"
2. Enter credit card details
3. Set usage limit (recommended: $10)
4. Confirm

---

### Screen 5: API Keys Page
**What you'll see**:
- "Create new secret key" button ← **Click this**
- List of existing keys (if any)
- Each key shows:
  - Name
  - Created date
  - Last used
  - Delete button

**What to do**:
1. Click "Create new secret key"

---

### Screen 6: Create API Key Dialog
**What you'll see**:
- Modal popup
- "Name" field
- "Create secret key" button

**What to do**:
1. Name: Type "Student Voice AI"
2. Click "Create secret key"

---

### Screen 7: API Key Created
**What you'll see**:
- ⚠️ **IMPORTANT**: Green box with your key
- Key looks like: `sk-proj-abc123...`
- Warning: "Save this key now. You won't see it again!"
- Copy button
- "Done" button

**What to do**:
1. Click copy button immediately
2. Paste in notepad: `OPENAI_API_KEY=sk-proj-abc123...`
3. Click "Done"
4. ⚠️ You cannot see this key again!

---

## ☁️ Part 3: Azure Setup

### Screen 1: Azure Portal
**URL**: https://portal.azure.com/

**What you'll see**:
- Microsoft Azure logo
- "Start free" button
- "Sign in" button

**What to do**:
1. Click "Start free" or "Sign in"
2. Use Microsoft account

---

### Screen 2: Azure Home
**What you'll see**:
- Top bar with search
- Left sidebar with:
  - Create a resource ← **Click this**
  - All services
  - Resource groups
- Main area with Azure services

**What to do**:
1. Click "Create a resource" (top left)

---

### Screen 3: Create a Resource
**What you'll see**:
- Search bar at top
- Categories: AI + Machine Learning, etc.
- Popular services listed

**What to do**:
1. Type "Speech" in search bar
2. Press Enter

---

### Screen 4: Search Results
**What you'll see**:
- List of services
- "Speech" or "Speech Service" with Microsoft logo
- "Create" button

**What to do**:
1. Click on "Speech" service
2. Click "Create" button

---

### Screen 5: Create Speech Service Form
**What you'll see**:
- Form with multiple tabs: Basics, Tags, Review + create
- Fields on Basics tab:
  - Subscription (dropdown)
  - Resource group (dropdown + "Create new")
  - Region (dropdown) ← **Important!**
  - Name (text input)
  - Pricing tier (dropdown)

**What to do**:
1. Subscription: Select your subscription
2. Resource group: Click "Create new"
   - Name it: "voice-ai-resources"
   - Click OK
3. Region: Select closest (e.g., "East US")
   - **Remember this!** This is your region
4. Name: Type "student-voice-ai-speech"
5. Pricing tier: Select "Free F0" or "Standard S0"
6. Click "Review + create" (bottom)

---

### Screen 6: Review and Create
**What you'll see**:
- Summary of your choices
- Validation status
- "Create" button

**What to do**:
1. Review details
2. Click "Create"
3. Wait for deployment (1-2 minutes)

---

### Screen 7: Deployment Complete
**What you'll see**:
- Green checkmark
- "Your deployment is complete"
- "Go to resource" button ← **Click this**

**What to do**:
1. Click "Go to resource"

---

### Screen 8: Speech Service Overview
**What you'll see**:
- Left sidebar with:
  - Overview
  - Keys and Endpoint ← **Click this**
  - Pricing tier
  - etc.
- Main area with service details

**What to do**:
1. Click "Keys and Endpoint" in left sidebar

---

### Screen 9: Keys and Endpoint
**What you'll see**:
- KEY 1: `abc123...` with copy icon ← **Important!**
- KEY 2: `def456...` with copy icon (backup)
- Location/Region: `eastus` ← **Important!**
- Endpoint URL

**What to do**:
1. KEY 1: Click copy icon
   - Paste in notepad: `AZURE_TTS_KEY=abc123...`
2. Note the Region/Location
   - Paste in notepad: `AZURE_TTS_REGION=eastus`

---

## 📝 Part 4: Fill in .env File

### What you'll see in your text editor:
```env
# Agora Configuration
AGORA_APP_ID=your_agora_app_id_here
AGORA_CUSTOMER_ID=your_customer_id_here
AGORA_CUSTOMER_SECRET=your_customer_secret_here

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Azure TTS Configuration
AZURE_TTS_KEY=your_azure_tts_key_here
AZURE_TTS_REGION=eastus

# Server Configuration
PORT=3000
NODE_ENV=development
```

### What to do:
1. Open `server/.env` in text editor
2. Replace each `your_xxx_here` with actual values from notepad
3. Save file
4. **Do not commit to Git!**

---

## ✅ Verification

### Test Server
**What you'll see in terminal**:
```bash
cd server
npm start
```

**Expected output**:
```
Server running on port 3000
Environment: development
```

**If you see errors**:
- Check all credentials are correct
- Verify no extra spaces
- Ensure quotes are not included

---

## 🎯 Quick Visual Checklist

### Agora Console
- [ ] Logged in to console.agora.io
- [ ] Project created and visible
- [ ] App ID visible and copied
- [ ] Conversational AI enabled (green checkmark)
- [ ] RESTful API page shows Customer ID
- [ ] Customer Secret revealed and copied

### OpenAI Platform
- [ ] Logged in to platform.openai.com
- [ ] Payment method added (card icon visible)
- [ ] API key created
- [ ] Key copied (starts with sk-proj or sk-)
- [ ] Usage page shows active status

### Azure Portal
- [ ] Logged in to portal.azure.com
- [ ] Speech Service created
- [ ] Resource shows "Running" status
- [ ] Keys page shows KEY 1 and KEY 2
- [ ] Region noted (e.g., eastus)

### .env File
- [ ] File exists at server/.env
- [ ] All 6 credentials filled in
- [ ] No placeholder text remaining
- [ ] File saved
- [ ] Server starts without errors

---

## 🎨 Color Codes to Look For

### Agora Console
- **Blue buttons**: Primary actions (Create, Submit)
- **Green checkmarks**: Features enabled
- **Eye icons**: Reveal hidden values
- **Copy icons**: Copy to clipboard

### OpenAI Platform
- **Green box**: API key display (save immediately!)
- **Red warnings**: Payment required
- **Blue links**: Documentation

### Azure Portal
- **Blue buttons**: Create, Go to resource
- **Green checkmarks**: Deployment successful
- **Copy icons**: Copy keys

---

## 📱 Mobile vs Desktop Views

### Desktop (Recommended)
- Full sidebar visible
- All options easily accessible
- Better for copying/pasting

### Mobile
- Hamburger menu for sidebar
- May need to scroll more
- Harder to copy credentials
- **Recommendation**: Use desktop for setup

---

## 🔍 What to Look For

### Success Indicators
- ✅ Green checkmarks
- ✅ "Active" status
- ✅ "Running" status
- ✅ Keys visible when revealed
- ✅ Copy icons present

### Warning Signs
- ⚠️ Red error messages
- ⚠️ "Payment required" warnings
- ⚠️ "Feature not available"
- ⚠️ Empty key fields
- ⚠️ "Invalid credentials"

---

## 💡 Pro Tips

1. **Use two monitors**: One for console, one for notepad
2. **Copy immediately**: Don't navigate away before copying
3. **Use notepad**: Keep all credentials in one place temporarily
4. **Take screenshots**: Of important pages (don't share them!)
5. **Verify each step**: Don't rush through
6. **Save frequently**: Save .env file after each credential

---

**Follow these visual cues and you'll have all credentials in 15 minutes!** 🎉
