// pages/api/signup.js
import { query } from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    try {
      await query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
        [username, email, password]
      );
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'User creation failed', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
