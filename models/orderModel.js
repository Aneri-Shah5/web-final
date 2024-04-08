const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: { type: Date, default: Date.now },
});

// Create the Order model
module.exports = mongoose.model('Order', orderSchema);
