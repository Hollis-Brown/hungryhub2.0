const pool = require('../config/db'); // Assuming you have a pool configured

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM restaurants');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Add a new restaurant
exports.addRestaurant = async (req, res) => {
  const { name, location, cuisine, rating } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO restaurants (name, location, cuisine, rating) VALUES (?,?,?,?)',
      [name, location, cuisine, rating]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, location, cuisine, rating } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE restaurants SET name=?, location=?, cuisine=?, rating=? WHERE id=?',
      [name, location, cuisine, rating, id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Restaurant updated successfully' });
    } else {
      res.status(404).send('Restaurant not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM restaurants WHERE id=?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Restaurant deleted successfully' });
    } else {
      res.status(404).send('Restaurant not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};