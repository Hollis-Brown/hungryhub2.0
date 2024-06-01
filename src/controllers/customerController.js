const pool = require('../config/db'); // Assuming you have a pool configured

// Register a new user
exports.registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, role) VALUES (?,?,?,?)',
      [username, email, password, role]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email=? AND password=?',
      [email, password]
    );
    if (rows.length > 0) {
      // Generate JWT token here
      res.status(200).json({ message: 'Logged in successfully', token: 'your_jwt_token_here' }); // Replace 'your_jwt_token_here' with actual token generation logic
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Get user details
exports.getUserDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const [row] = await pool.query('SELECT * FROM users WHERE id=?', [id]);
    if (row.length > 0) {
      res.status(200).json(row[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Update user details
exports.updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const { username, email, role } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE users SET username=?, email=?, role=? WHERE id=?',
      [username, email, role, id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'User details updated successfully' });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};