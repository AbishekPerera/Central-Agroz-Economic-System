import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FarmerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    division: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    cropType: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false, //change this later
    },
  },
  {
    timestamps: true,
  }
);

export const Farmer = mongoose.model('Farmer', FarmerSchema);
