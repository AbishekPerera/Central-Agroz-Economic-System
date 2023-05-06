import mongoose from "mongoose";
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  Category: {
    type: String,
    enum: ["Vegetable", "Fruit", "Grain", "Rice"],
    required: true,
  },

  Type: {
    type: String,
    required: true,
  },

  Quantity: {
    type: Number,
    required: true,
  },
});

const stockSchema = new Schema({
  CenterName: {
    type: String,
    required: true,
  },

  SupplierName: {
    type: String,
    required: true,
  },

  FarmerID: {
    type: String,
  },

  MobileNo: {
    type: Number,
    required: true,
  },

  Address: {
    type: String,
    required: true,
  },

  NoOfItems: {
    type: Number,
    required: true,
  },

  Item: [itemSchema],

  Role:{
    type: String,
    enum: ["Buyer", "Seller"],
    required: true,
    default: "Seller",
  },

  Date: {
    type: String,
    default: new Date(),
  },
});

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
