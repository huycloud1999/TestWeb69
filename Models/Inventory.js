import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  sku: String,
  description: String,
  instock: Number
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;
