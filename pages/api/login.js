// pages/api/login.js
import { query } from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const result = await query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );
    if (result.rowCount > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
