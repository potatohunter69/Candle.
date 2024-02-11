const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 8080;

// Enable CORS for all routes
app.use(cors());

// API endpoint to get products
app.get('/products', (req, res) => {
  // Read the products data from the JSON file
  fs.readFile('products.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading products data');
      return;
    }
    // Parse the JSON data and send it as the response
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
