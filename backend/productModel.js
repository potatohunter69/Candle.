const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  tag: String,
  name: String,
  description: String,
  volume: String,
  price: String,
  image: String,
});


module.exports = mongoose.model('Product', productSchema, 'products');