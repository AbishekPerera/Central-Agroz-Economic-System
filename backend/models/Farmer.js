import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FarmerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
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
    exHarvest: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,

})

export const Farmer = mongoose.model('Farmer', FarmerSchema);
