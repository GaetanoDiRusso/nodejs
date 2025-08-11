const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/health', (req, res) => {
  res.status(200).json({ message: "Server running!" })
});

module.exports = router;
