import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Echo Center Name, Echo Center Address, Province, District, Phone, Officer Name, Officer Email, Officer Contact, Officer Address, Password

const EcoCenterSchema = new Schema(
  {
    ecoCenterName: {
      type: String,
      required: true,
    },
    ecoCenterAddress: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    officerName: {
      type: String,
      required: true,
    },
    officerEmail: {
      type: String,
      required: true,
    },
    officerContact: {
      type: String,
      required: true,
    },
    officerAddress: {
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

export const EconomicCenter = mongoose.model("EconomicCenter", EcoCenterSchema);
