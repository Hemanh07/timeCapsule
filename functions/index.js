const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Your API endpoints here
app.get('/api', (req, res) => {
  res.send('Hello from Firebase backend!');
});

// Export your express app as a Firebase function
exports.api = functions.https.onRequest(app);
