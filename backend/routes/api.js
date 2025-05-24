require('dotenv').config();
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI;
let usersCollection;

// Connect to MongoDB Atlas
async function connectDB() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db('myApp'); // Replace with your actual DB name
    usersCollection = db.collection('users');
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
connectDB();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userExists = await usersCollection.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await usersCollection.insertOne({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
