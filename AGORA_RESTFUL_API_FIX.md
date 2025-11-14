# 🔧 Fix: "No Restful API has been found!"

## Problem
When you go to Agora Console → RESTful API section, you see:
> "No Restful API has been found! You need to create and download at least one restful api to use Conversational AI Agent."

## Solution: Create RESTful API Credentials

### Step 1: Go to RESTful API Section
1. Log in to [Agora Console](https://console.agora.io/)
2. Click **"RESTful API"** in the left sidebar
3. You'll see the warning message

### Step 2: Click "Click here to manage RESTful-api"
1. Click the blue link that says **"Click here to manage RESTful-api"**
2. Or look for a button that says **"Create"** or **"Add RESTful API"**

### Step 3: Create RESTful API Credential
You'll see a form with these fields:

**Fill in the form:**
1. **Name**: Enter a name (e.g., "Student Voice AI")
2. **Description**: Optional (e.g., "For voice AI app")
3. **Role**: Select **"Admin"** or **"Project Admin"**
4. **Projects**: Select your project ("Student Voice AI")
5. Click **"Create"** or **"Submit"**

### Step 4: Download or Copy Credentials
After creation, you'll see:

**Customer ID** (looks like: `abc123def456...`)
- Click the eye icon to reveal
- Click copy icon
- **Save this** → This is your `AGORA_CUSTOMER_ID`

**Customer Secret** (looks like: `xyz789abc123...`)
- Click the eye icon to reveal
- Click copy icon
- **Save this** → This is your `AGORA_CUSTOMER_SECRET`

⚠️ **IMPORTANT**: Save these immediately! You may not see the secret again.

### Step 5: Update Your .env File
```env
AGORA_APP_ID=your_app_id_from_project
AGORA_CUSTOMER_ID=abc123def456...  # From RESTful API
AGORA_CUSTOMER_SECRET=xyz789abc123...  # From RESTful API
```

---

## Alternative Method: Using Account-Level Credentials

If the above doesn't work, try this:

### Step 1: Go to Account Settings
1. Click your profile icon (top right)
2. Go to **"Account Settings"** or **"Security"**
3. Look for **"RESTful API Credentials"** section

### Step 2: Generate Credentials
1. Click **"Generate"** or **"Create New"**
2. Give it a name
3. Select permissions
4. Click **"Create"**

### Step 3: Copy Credentials
1. Copy **Customer ID**
2. Copy **Customer Secret**
3. Save both securely

---

## Visual Guide: What You'll See

### Before Creating (What you see now):
```
┌─────────────────────────────────────────┐
│  ⚠️ No Restful API has been found!     │
│                                         │
│  You need to create and download at    │
│  least one restful api to use          │
│  Conversational AI Agent.              │
│                                         │
│  [Click here to manage RESTful-api]    │ ← Click this!
└─────────────────────────────────────────┘
```

### After Creating:
```
┌─────────────────────────────────────────┐
│  RESTful API Credentials                │
│                                         │
│  Name: Student Voice AI                 │
│  Customer ID: abc123... [👁️] [📋]      │
│  Customer Secret: ******* [👁️] [📋]    │
│  Created: 2025-11-14                    │
│  Status: Active ✅                      │
└─────────────────────────────────────────┘
```

---

## Detailed Steps with Screenshots Description

### Screen 1: RESTful API Warning Page
**What you see**:
- Yellow/orange warning box
- Message: "No Restful API has been found!"
- Blue link: "Click here to manage RESTful-api"

**What to do**:
- Click the blue link

### Screen 2: Create RESTful API Form
**What you see**:
- Form with fields:
  - Name (text input)
  - Description (text area)
  - Role (dropdown)
  - Projects (checkboxes or dropdown)
- "Create" or "Submit" button at bottom

**What to do**:
1. Name: Type "Student Voice AI"
2. Description: Type "For educational voice app"
3. Role: Select "Admin"
4. Projects: Check your project
5. Click "Create"

### Screen 3: Credentials Created
**What you see**:
- Success message
- Customer ID displayed with eye icon
- Customer Secret displayed with eye icon
- Copy icons next to each
- Download button (optional)

**What to do**:
1. Click eye icon next to Customer ID
2. Click copy icon
3. Paste in notepad
4. Click eye icon next to Customer Secret
5. Click copy icon
6. Paste in notepad
7. Click "Done" or close

### Screen 4: RESTful API List
**What you see**:
- Table showing your RESTful API credentials
- Columns: Name, Customer ID, Status, Actions
- Your "Student Voice AI" credential listed
- Status shows "Active" with green checkmark

**What to do**:
- Verify it's there
- You can now use these credentials

---

## Common Issues & Solutions

### Issue 1: Can't find "Create" button
**Solution**: 
- Look for "Add", "New", or "Generate" button
- Check top-right corner of the page
- Try clicking the blue link in the warning message

### Issue 2: "Insufficient permissions"
**Solution**:
- You need to be project owner or admin
- Contact your Agora account owner
- Or create a new Agora account

### Issue 3: Created but can't see credentials
**Solution**:
- Go back to RESTful API section
- Look for your credential in the list
- Click "View" or eye icon to reveal
- If secret is hidden, you may need to regenerate

### Issue 4: Multiple credentials shown
**Solution**:
- Use the most recent one
- Or create a new one specifically for this project
- Delete old unused ones for security

---

## Verification Steps

### 1. Check RESTful API Section
```
✅ No warning message
✅ Credential listed in table
✅ Status shows "Active"
✅ Customer ID visible (when revealed)
✅ Customer Secret available (when revealed)
```

### 2. Test Credentials
Update your `server/.env`:
```env
AGORA_APP_ID=your_app_id
AGORA_CUSTOMER_ID=your_customer_id_here
AGORA_CUSTOMER_SECRET=your_customer_secret_here
OPENAI_API_KEY=your_openai_key
AZURE_TTS_KEY=your_azure_key
AZURE_TTS_REGION=eastus
```

Start server:
```bash
cd server
npm start
```

If server starts without errors, credentials are correct! ✅

### 3. Test API Call
```bash
# Test token generation
curl -X POST http://192.168.0.116:3000/api/agora/token \
  -H "Content-Type: application/json" \
  -d '{"channelName":"test123","uid":"0"}'
```

Should return JSON with token ✅

---

## Important Notes

### About Customer ID & Secret
- **Customer ID**: Public identifier (safe to share in logs)
- **Customer Secret**: Private key (NEVER share or commit to Git)
- **Scope**: Account-level or project-level
- **Permissions**: Need admin role for Conversational AI

### Security Best Practices
- ✅ Store in .env file
- ✅ Add .env to .gitignore
- ✅ Use environment variables
- ✅ Rotate regularly
- ❌ Never commit to Git
- ❌ Never share publicly
- ❌ Never hardcode in source

### If You Lose Credentials
1. Go to RESTful API section
2. Find your credential
3. Click "Regenerate" or "Reset"
4. Copy new credentials
5. Update .env file
6. Restart server

---

## Quick Fix Checklist

- [ ] Go to Agora Console
- [ ] Click "RESTful API" in sidebar
- [ ] Click "Click here to manage RESTful-api"
- [ ] Fill in form (Name, Role, Projects)
- [ ] Click "Create"
- [ ] Copy Customer ID
- [ ] Copy Customer Secret
- [ ] Update server/.env file
- [ ] Save .env file
- [ ] Restart server
- [ ] Test with curl or start app

---

## Expected Timeline

- **Finding the page**: 1 minute
- **Creating credential**: 2 minutes
- **Copying values**: 1 minute
- **Updating .env**: 1 minute
- **Testing**: 1 minute
- **Total**: ~5 minutes

---

## After Creating Credentials

### Your .env should look like:
```env
# Agora Configuration
AGORA_APP_ID=abc123def456ghi789
AGORA_CUSTOMER_ID=customer_abc123xyz789  # ← From RESTful API
AGORA_CUSTOMER_SECRET=secret_xyz789abc123  # ← From RESTful API

# OpenAI Configuration
OPENAI_API_KEY=sk-proj-...

# Azure TTS Configuration
AZURE_TTS_KEY=...
AZURE_TTS_REGION=eastus

# Server Configuration
PORT=3000
NODE_ENV=development
```

### Test the server:
```bash
cd server
npm start
```

### Expected output:
```
Server running on port 3000
Environment: development
```

✅ **Success!** You're ready to run the app!

---

## Still Having Issues?

### Check These:
1. **Correct section**: Make sure you're in "RESTful API" not "Project Management"
2. **Permissions**: Verify you're project owner or admin
3. **Project selected**: Ensure your project is selected when creating
4. **Copy correctly**: No extra spaces or characters
5. **File saved**: Make sure .env file is saved

### Get Help:
- **Agora Support**: support@agora.io
- **Agora Docs**: https://docs.agora.io/en/agora-chat/restful-api/restful-authentication
- **Console Help**: Click "?" icon in Agora Console

---

## Summary

The error "No Restful API has been found!" means you need to:

1. **Create RESTful API credentials** in Agora Console
2. **Copy Customer ID and Customer Secret**
3. **Add them to your .env file**
4. **Restart your server**

**This is a one-time setup!** Once created, you can use these credentials for all your Agora Conversational AI projects.

---

**Follow these steps and you'll have your credentials in 5 minutes!** 🚀
