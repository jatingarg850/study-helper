# 🔍 How to Find RESTful API Section in Agora Console

## Problem
You're in Agora Console but can't see "RESTful API" in the left sidebar.

---

## Solution: Access Through Developer Toolkit

Looking at your screenshot, I can see you have **"Developer Toolkit"** in the left sidebar with a dropdown arrow. The RESTful API section is likely inside there!

### Method 1: Through Developer Toolkit (Most Likely)

1. **Look at left sidebar** - You should see "Developer Toolkit" with a dropdown arrow (▼)
2. **Click on "Developer Toolkit"** to expand it
3. **Look for "RESTful API"** in the expanded menu
4. **Click "RESTful API"**

**Visual Guide**:
```
Left Sidebar:
├── Overview
├── Projects
├── Usage
├── Billing
├── Extensions Marketplace
├── Subscriptions
├── Agora Analytics
└── Developer Toolkit ◄── Click this to expand!
    ├── RESTful API ◄── Should be here!
    ├── Webhooks
    └── Other tools...
```

---

## Method 2: Direct URL Access

If you still can't find it, go directly to the RESTful API page:

**Copy and paste this URL in your browser**:
```
https://console.agora.io/restful
```

Or try:
```
https://console.agora.io/restfulApi
```

---

## Method 3: Through Project Settings

1. **Click "Projects"** in left sidebar
2. **Click on your project** ("Student Voice AI" or whatever you named it)
3. **Look for "RESTful API"** tab or section
4. Or look for **"Credentials"** or **"API Credentials"**

---

## Method 4: Search Function

1. Look for a **search icon** (🔍) in the Agora Console
2. Type **"RESTful API"** or **"API Credentials"**
3. Click on the result

---

## What You're Looking For

Once you find the RESTful API section, you should see:

### If No Credentials Exist:
```
┌─────────────────────────────────────────┐
│  ⚠️ No Restful API has been found!     │
│                                         │
│  You need to create and download at    │
│  least one restful api to use          │
│  Conversational AI Agent.              │
│                                         │
│  [Click here to manage RESTful-api]    │
└─────────────────────────────────────────┘
```

### If Credentials Exist:
```
┌─────────────────────────────────────────┐
│  RESTful API Credentials                │
│  ┌─────────────────────────────────┐   │
│  │ Name: Student Voice AI          │   │
│  │ Customer ID: abc123... [👁️] [📋]│   │
│  │ Customer Secret: ***** [👁️] [📋]│   │
│  │ Status: Active ✅               │   │
│  └─────────────────────────────────┘   │
│  [+ Create New]                         │
└─────────────────────────────────────────┘
```

---

## Alternative: Use Account-Level Credentials

If you absolutely cannot find the RESTful API section, you can use account-level credentials:

### Step 1: Click Your Profile
1. **Click your profile icon** (top right corner)
2. Look for **"Account Settings"** or **"Settings"**

### Step 2: Find API Section
Look for one of these:
- "API Credentials"
- "RESTful API"
- "Developer Credentials"
- "Security"

### Step 3: Generate Credentials
1. Click **"Generate"** or **"Create New"**
2. Give it a name: "Student Voice AI"
3. Copy **Customer ID** and **Customer Secret**

---

## Still Can't Find It?

### Check Your Account Type

**Free Account Limitations**:
- Some features may be hidden
- RESTful API might need verification
- May need to upgrade account

**Solution**:
1. Complete account verification
2. Add payment method
3. Contact Agora support

### Contact Agora Support

If you still can't find it after trying all methods:

**Email**: support@agora.io

**Include in your email**:
```
Subject: Cannot find RESTful API section in Console

Hi Agora Support,

I'm trying to use the Conversational AI feature but cannot 
find the RESTful API section in my console to get Customer 
ID and Customer Secret.

My account email: [your email]
Project name: Student Voice AI
App ID: [your app id]

Could you please help me locate this section or provide 
the credentials?

Thank you!
```

---

## Temporary Workaround: Use Token-Based Authentication

While waiting for RESTful API access, you can test with temporary tokens:

### Step 1: Generate Temp Token
1. Go to **Projects** → Your Project
2. Find **"Generate Temp Token"** section
3. Enter channel name: "test123"
4. Click **"Generate"**
5. Copy the token

### Step 2: Modify Server Code
This is NOT for production, but for testing:

**server/src/controllers/agora.controller.js**:
```javascript
// Temporary workaround - TESTING ONLY
async function startAgent(req, res) {
  try {
    const { channelName } = req.body;
    
    // Use temp token for testing
    const token = "YOUR_TEMP_TOKEN_HERE";
    
    // ... rest of code
  }
}
```

⚠️ **Warning**: This is only for testing! You MUST use proper RESTful API for production.

---

## Expected Locations (By Agora Console Version)

### New Console (2024+)
```
Developer Toolkit → RESTful API
```

### Old Console
```
Left Sidebar → RESTful API (direct)
```

### Alternative Location
```
Projects → [Your Project] → Settings → API Credentials
```

---

## Visual Checklist

Look for these in your console:

- [ ] "Developer Toolkit" with dropdown arrow
- [ ] "RESTful API" menu item
- [ ] "API Credentials" section
- [ ] "Credentials" tab in project settings
- [ ] Search function to find it

---

## Quick Actions

### Action 1: Expand Developer Toolkit
**In your current screen**:
1. Look at left sidebar
2. Find "Developer Toolkit" (you can see it in your screenshot)
3. Click on it to expand
4. Look for "RESTful API"

### Action 2: Try Direct URL
**Copy this and paste in browser**:
```
https://console.agora.io/restful
```

### Action 3: Check Project Settings
1. Click "Projects" (left sidebar)
2. Click your project name
3. Look for "Settings" or "Credentials" tab

---

## What to Do After Finding It

Once you find the RESTful API section:

1. **If you see warning**: Click "Click here to manage RESTful-api"
2. **Click "Create"** button
3. **Fill in form**:
   - Name: "Student Voice AI"
   - Role: "Admin"
   - Projects: Select your project
4. **Click "Create"**
5. **Copy credentials**:
   - Customer ID
   - Customer Secret
6. **Update .env file**:
   ```env
   AGORA_CUSTOMER_ID=your_customer_id
   AGORA_CUSTOMER_SECRET=your_customer_secret
   ```

---

## Screenshot Guide

Based on your current screen, here's what to do:

**Current View**: Overview page
**What you see**: 
- Left sidebar with menu items
- "Developer Toolkit" visible
- Main area showing RTC Free Package

**Next Steps**:
1. ✅ You're logged in (good!)
2. ✅ You have a project (good!)
3. ❌ Need to find RESTful API section
4. 👉 **Click "Developer Toolkit"** in left sidebar
5. 👉 Look for "RESTful API" in expanded menu

---

## Common Reasons It's Hidden

### 1. Account Not Verified
**Solution**: Complete email/phone verification

### 2. Feature Not Enabled
**Solution**: Contact support to enable

### 3. Wrong Account Type
**Solution**: Upgrade or verify account

### 4. Region Restrictions
**Solution**: Try different region or VPN

### 5. Console Version
**Solution**: Try old console URL: https://console.agora.io/v1

---

## Emergency Contact

If you've tried everything and still can't find it:

**Agora Support**:
- Email: support@agora.io
- Live Chat: Click "Get Support" (top right in your console)
- Phone: Check Agora website for your region

**What to say**:
"I need to access RESTful API credentials for Conversational AI but cannot find the section in my console. Please help."

---

## Summary

**Most Likely Solution**:
1. Click **"Developer Toolkit"** in left sidebar (you can see it in your screenshot)
2. Expand the menu
3. Click **"RESTful API"**
4. Create credentials

**If that doesn't work**:
- Try direct URL: https://console.agora.io/restful
- Contact support: support@agora.io
- Use "Get Support" button in console

---

**Try clicking "Developer Toolkit" first - that's most likely where it is!** 🎯
