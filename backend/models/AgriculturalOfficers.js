import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Name;Email;Contact;Address;Grama Niladari Division;District;Province;Image;Password

const AgriculturalOfficersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gramaNiladariDivision: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AgriculturalOfficers = mongoose.model(
  "AgriculturalOfficers",
  AgriculturalOfficersSchema
);
