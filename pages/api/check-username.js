// pages/api/check-username.js
import { query } from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username } = req.body;
    const result = await query('SELECT 1 FROM users WHERE username = $1', [username]);
    res.status(200).json({ exists: result.rowCount > 0 });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
