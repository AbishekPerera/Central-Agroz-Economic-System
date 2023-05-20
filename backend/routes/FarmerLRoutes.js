import express from "express";
import {
  farmerLogin,
  getAllCropsByFarmerId,
  publishCrop,
} from "../controllers/FarmerLControllers.js";
import { getAllCrops } from "../controllers/FarmerLControllers.js";
import { getCropById } from "../controllers/FarmerLControllers.js";
import { updateCropById } from "../controllers/FarmerLControllers.js";
import { deleteCropById } from "../controllers/FarmerLControllers.js";

const router = express.Router();

//publish crop
router.post("/publishcrop", publishCrop);
//get all crops
router.get("/getallcrops", getAllCrops);
//get crop by cropid
router.get("/getcropbyid/:id", getCropById);
//update crop by cropid
router.put("/updatecropbyid/", updateCropById);
//delete crop by cropid
router.delete("/deletecropbyid/:id", deleteCropById);
//farmer login
router.post("/farmerlogin", farmerLogin);
//get all crops by farmerid
router.get("/getallcropsbyfarmerid/:id", getAllCropsByFarmerId);

export default router;
