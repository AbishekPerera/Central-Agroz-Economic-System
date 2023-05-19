import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HarvestSchema = new Schema(
  {
    farmerUsername: {
      type: String,
      required: true,
    },
    cropType: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: false,
    },
    year: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    expectedHarvest: {
      type: Number,
      required: false,
    },
    actualHarvest: {
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

export const Harvest = mongoose.model('Harvest', HarvestSchema);
