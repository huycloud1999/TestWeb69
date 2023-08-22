import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
