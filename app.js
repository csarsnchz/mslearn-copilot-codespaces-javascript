// Create a web API using express and JavaScript with routes for products and customers

// Import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Import routes
const products = require('./routes/products');
const customers = require('./routes/customers');

// Import error handler
const error = require('./middleware/error');

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/products', products);
app.use('/customers', customers);

// Use error handler
app.use(error);

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Export app
module.exports = app;
