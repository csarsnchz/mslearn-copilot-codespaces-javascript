// Create an API endpoint
const express = require('express');
const router = express.Router();

router.get('/customers', (req, res) => {
    res.send('Customers');
    });

// Export router
module.exports = router;
