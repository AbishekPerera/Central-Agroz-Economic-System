import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FertilizerSchema = new Schema(
  {
    farmerUsername: {
      type: String,
      required: true,
    },
    fertilizerType: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    aoId: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Fertilizer = mongoose.model('Fertilizer', FertilizerSchema);
