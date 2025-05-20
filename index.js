import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './utils/sendEmail.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  try {
    await sendEmail({ name, phone });
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
