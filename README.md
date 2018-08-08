[![github license](https://img.shields.io/github/license/ericvera/express-firebase-authenticate.svg?style=flat-square)](https://github.com/ericvera/express-firebase-authenticate/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/express-firebase-authenticate.svg?style=flat-square)](https://npmjs.org/package/express-firebase-authenticate)

# express-firebase-authenticate

Express middleware for Firebase Cloud Functions that extracts user data from a Firebase auth token.

# Details

Validates the token included using the verifyIdTokens API from the Firebase Admin SDK and attaches the decoded token to req.user. For more details on the API or decodedToken see https://firebase.google.com/docs/auth/admin/verify-id-tokens

# Usage

## Install module

`npm install --save express-firebase-authenticate`

## Sample

```javascript
const admin = require('firebase-admin')
const express = require('express')
const firebaseAuth = require('express-firebase-authenticate')
const functions = require('firebase-functions')

admin.initializeApp()

const app = express()

// Add middleware
app.use(firebaseAuth)

// Handle POST request to the "widgets" Firebase function
app.post('*', async (req, res) => {
  // ... your firebase function code here

  // You will have access to the decoded token at 'req.user'
  // For example...
  console.log(req.user.uid)

  res.sendStatus(200)
})

exports.widgets = functions.https.onRequest(app)
```
