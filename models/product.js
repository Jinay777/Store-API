const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name should be provided"],
  },

  price: {
    type: Number,
    required: [true, "price should be provided"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  rating: {
    type: Number,
    default: 4.5,
  },

  featured: {
    type: Boolean,
    default: false,
  },

  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
