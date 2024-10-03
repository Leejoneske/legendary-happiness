require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const { pool } = require('./config/db');

const app = express();
app.use(express.json()); // For parsing JSON bodies

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API');
});

// Authentication routes
app.use('/api/auth', authRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
