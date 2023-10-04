const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Get User Details
router.get('/details/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update User
router.put('/update/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      await user.update(updatedUserData);
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get User Image
router.get('/image/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (user && user.user_image) {
      // Assuming user_image is a URL or file path
      res.status(200).json({ user_image: user.user_image });
    } else {
      res.status(404).json({ error: 'User image not found' });
    }
  } catch (error) {
    console.error('Error getting user image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Insert User
router.post('/insert', async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete User
router.delete('/delete/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
