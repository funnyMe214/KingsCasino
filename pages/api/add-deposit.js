// pages/api/add-deposit.js
import { query } from '../../lib/db';

const addDepositHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { userId, amount } = req.body;
    try {
      await query(
        'INSERT INTO deposits (user_id, amount) VALUES ($1, $2)',
        [userId, amount]
      );
      res.status(201).json({ message: 'Deposit added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Adding deposit failed', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default addDepositHandler;
