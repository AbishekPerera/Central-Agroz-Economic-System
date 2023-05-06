import mongoose from "mongoose";
const Schema = mongoose.Schema;

const quantitySchema = new Schema({
  Category: {
    type: String,
    enum: ["Vegetable", "Fruit", "Grain", "Rice"],
    required: true,
  },

  Type: {
    type: String,
    required: true,
  },

  BoughtQuantity: {
    type: Number,
    default: 0,
  },

  SoldQuantity: {
    type: Number,
    default: 0,
  },

  AvailableQuantity: {
    type: Number,
    default: 0,
  },

  Date: {
    type: Date,
    default: new Date(),
  },
});

const Quantity = mongoose.model("StockQuantity", quantitySchema);

export default Quantity;
