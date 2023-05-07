import mongoose from "mongoose";
const Schema = mongoose.Schema;
// farmerid,croptype, cropname, quantity, price, location, condition, harvestdate,status, mobile, email

const FarmerCropSchema = new Schema(
    {
        farmerId: {
            type: String,
            required: true,
        },
        cropType: {
            type: String,
            required: true,
        },
        cropName: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        condition: {
            type: String,
            required: true,
        },
        harvestDate: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Out for sale",
        },
        mobile: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const FarmerCrop = mongoose.model(
    "FarmerCrop",
    FarmerCropSchema
);

                