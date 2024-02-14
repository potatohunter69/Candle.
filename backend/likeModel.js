const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Like', likeSchema);
