const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subPrice: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  badge: {
    text: String,
    type: { type: String }, // e.g., 'orange', 'green', 'blue'
  },
  tags: [String],
  countInStock: {
    type: Number,
    required: true,
    default: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
