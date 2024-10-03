const { pool } = require('../config/db');

// Create User table if not exists
const createUserTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        profile_pic TEXT,
        join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('User table created');
  } catch (err) {
    console.error('Error creating user table:', err);
  }
};

// Call the table creation function
createUserTable();

module.exports = pool;
