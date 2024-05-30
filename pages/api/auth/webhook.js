// pages/api/auth/webhook.js

import { config } from 'dotenv';

// Load environment variables from .env file
config();

const { VERIFY_TOKEN } = process.env;
console.log('VERIFY_TOKEN:', VERIFY_TOKEN);  // Add this line



export default function handler(req, res) {
  // Extract parameters from the request URL
  const hubMode = req.query['hub.mode'];
  const hubChallenge = req.query['hub.challenge'];
  const hubVerifyToken = req.query['hub.verify_token'];

  console.log('hubMode:', hubMode);
  console.log('hubChallenge:', hubChallenge);
  console.log('hubVerifyToken:', hubVerifyToken);
  console.log('Expected Verify Token:', VERIFY_TOKEN);

  // Verify the token
  if (hubVerifyToken !== VERIFY_TOKEN) {
    console.error('Invalid verify token');
    return res.status(403).json({ error: 'Invalid verify token' });
  }

  // Respond to the verification request
  if (hubMode === 'subscribe' && hubChallenge) {
    console.log('Verification successful, responding with hubChallenge:', hubChallenge);
    return res.status(200).send(hubChallenge);
  }

  // Process webhook events (if needed)
  // ...

  // Respond to other requests
  res.status(200).json({ message: 'Webhook received' });
}
