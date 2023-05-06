import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Price = new Schema({
  SellingPrice: {
    type: Number,
    required: true,
  },

  BuyingPrice: {
    type: Number,
    required: true,
  },

  Date: {
    type: String,
    default: new Date().toISOString().slice(0, 10),
    required: true,
  },
});

const priceSchema = new Schema({
  CenterName: {
    type: String,
    required: true,
  },

  Category: {
    type: String,
    enum: ["Vegetable", "Fruit", "Grain", "Rice"],
    required: true,
  },

  Type: {
    type: String,
    required: true,
  },

  Image: {
    type: String,
    required: true,
  },

  Price: [Price],
});

const price = mongoose.model("Price", priceSchema);

export default price;
