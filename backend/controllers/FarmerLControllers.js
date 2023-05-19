// import { Farmer } from "../models/Farmer.js";
import { Farmer } from "../models/Farmer.js";
import { FarmerCrop } from "../models/FarmerProduct.js";
import bcrypt from "bcryptjs";

//publish crop
export const publishCrop = async (req, res) => {
  const newCrop = new FarmerCrop(req.body);
  try {
    await newCrop.save();
    res.status(200).json(newCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all crops
export const getAllCrops = async (req, res) => {
  try {
    const crops = await FarmerCrop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get crop by cropid
export const getCropById = async (req, res) => {
  const { id } = req.params;
  try {
    const crop = await FarmerCrop.findById(id);
    res.status(200).json(crop);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update crop by cropid
// farmerid,croptype, cropname, quantity, price, location, condition, harvestdate,status, mobile, email
export const updateCropById = async (req, res) => {
  const { id } = req.body;
  const {
    cropType,
    cropName,
    quantity,
    price,
    location,
    condition,
    harvestDate,
    status,
    mobile,
    email,
  } = req.body;

  try {
    const updateCrop = await FarmerCrop.findById(id);

    if (!updateCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    updateCrop.cropType = cropType || updateCrop.cropType;
    updateCrop.cropName = cropName || updateCrop.cropName;
    updateCrop.quantity = quantity || updateCrop.quantity;
    updateCrop.price = price || updateCrop.price;
    updateCrop.location = location || updateCrop.location;
    updateCrop.condition = condition || updateCrop.condition;
    updateCrop.harvestDate = harvestDate || updateCrop.harvestDate;
    updateCrop.status = status || updateCrop.status;
    updateCrop.mobile = mobile || updateCrop.mobile;
    updateCrop.email = email || updateCrop.email;

    await updateCrop.save();
    //   res.status(200).json(updateCrop);
    res
      .status(200)
      .json({ message: "Crop updated successfully", data: updateCrop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete crop by cropid
export const deleteCropById = async (req, res) => {
  const { id } = req.params;
  try {
    const crop = await FarmerCrop.findByIdAndDelete(id);
    res.status(200).json({ message: "Crop deleted successfully", data: crop });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//farmer login
export const farmerLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const farmer = await Farmer.findOne({ username: username });

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    const isMatch = await bcrypt.compare(password, farmer.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", data: farmer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all crops by farmerid
export const getAllCropsByFarmerId = async (req, res) => {
  const { id } = req.params;
  try {
    const crops = await FarmerCrop.find({ farmerId: id });
    res.status(200).json(crops);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
