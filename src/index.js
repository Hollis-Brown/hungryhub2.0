const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Server Setup
const app = express();
const PORT = process.env.PORT;

// Load environment variables
dotenv.config();

// Database connection setup with connection pooling
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10 // Adjust based on your needs
});

// Detailed CORS configuration
const corsOptions = {
  origin: '*',
  credentials: true,
  'access-control-allow-credentials': true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Custom middleware for database connection
app.use(async (req, res, next) => {
  try {
    req.db = await pool.getConnection();
    req.db.connection.config.namedPlaceholders = true;
    await req.db.query('SET SESSION sql_mode = "TRADITIONAL"');
    await req.db.query(`SET time_zone = '-8:00'`);
    await next();
  } catch (err) {
    console.error(err);
    if (req.db) req.db.release();
    throw err;
  }
});

// Import and use your route modules
const customerRoutes = require('./routes/customerRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

// Use the route modules
app.use('/api/customers', customerRoutes);
app.use('/api/restaurants', restaurantRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});