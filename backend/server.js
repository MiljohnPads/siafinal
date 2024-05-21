// // server.js
// const express = require('express');
// const mysql = require('mysql2/promise');
// const cors = require('cors'); // Import the cors middleware
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3015;

// // Use the cors middleware
// app.use(cors());
// app.use(express.json()); // To parse JSON bodies

// // MySQL Connection
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   connectionLimit: 10
// });

// // Test MySQL Connection
// pool.getConnection((err, connection) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database!');
//   connection.release(); // Release connection
// });

// // Route Definitions

// // Create a new user
// app.post('/users', async (req, res) => {
//   try {
//     const { username, email } = req.body;
//     const result = await pool.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
//     res.json({ message: 'User created successfully', id: result[0].insertId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'An error occurred while creating the user' });
//   }
// });

// // Get all users
// app.get('/users', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM users');
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'An error occurred while fetching users' });
//   }
// });

// // Get a single user by ID
// app.get('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     if (user.length === 0) {
//       res.status(404).json({ message: 'User not found' });
//     } else {
//       res.json(user[0]);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'An error occurred while fetching the user' });
//   }
// });

// // Update a user by ID
// app.put('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { username, email } = req.body;
//     console.log(`Updating user with ID ${id} to username: ${username}, email: ${email}`);
//     const [result] = await pool.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
//     if (result.affectedRows === 0) {
//       res.status(404).json({ message: 'User not found' });
//     } else {
//       res.json({ message: 'User updated successfully' });
//     }
//   } catch (err) {
//     console.error('Error occurred during updating user:', err);
//     res.status(500).json({ message: 'An error occurred while updating the user' });
//   }
// });

// // Delete a user by ID
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
//     if (result.affectedRows === 0) {
//       res.status(404).json({ message: 'User not found' });
//     } else {
//       res.json({ message: 'User deleted successfully' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'An error occurred while deleting the user' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}/users`);
// });

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3015;

// Use the cors middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MySQL Connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10
});

// Test MySQL Connection
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
  connection.release(); // Release connection
});

// Route Definitions

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const result = await pool.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
    res.json({ message: 'User created successfully', id: result[0].insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while creating the user' });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching users' });
  }
});

// Get a single user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (user.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching the user' });
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    console.log(`Updating user with ID ${id} to username: ${username}, email: ${email}`);
    const [result] = await pool.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User updated successfully' });
    }
  } catch (err) {
    console.error('Error occurred during updating user:', err);
    res.status(500).json({ message: 'An error occurred while updating the user' });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the user' });
  }
});

// Upload users from CSV
app.post('/upload-users', async (req, res) => {
  try {
    const users = req.body; // Expecting an array of user objects [{username: '...', email: '...'}, ...]
    const values = users.map(user => [user.username, user.email]);

    // Inserting users in batch
    const [result] = await pool.query('INSERT INTO users (username, email) VALUES ?', [values]);
    res.json({ message: 'Users uploaded successfully!', insertedRows: result.affectedRows });
  } catch (err) {
    console.error('Error uploading users:', err);
    res.status(500).json({ message: 'An error occurred while uploading users' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/users`);
});
