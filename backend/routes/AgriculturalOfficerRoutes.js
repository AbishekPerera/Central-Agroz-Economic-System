import express from "express";
import {
  deleteAgriculturalOfficer,
  getAgriculturalOfficerById,
  getAgriculturalOfficers,
  loginAgriculturalOfficer,
  registerAgriculturalOfficer,
  updateAgriculturalOfficer,
} from "../controllers/AgriculturalOfficerControllers.js";

const router = express.Router();

//register an agricultural officer
router.post("/register", registerAgriculturalOfficer);
//get all agricultural officers
router.get("/", getAgriculturalOfficers);
//get agricultural officer by id
router.get("/:id", getAgriculturalOfficerById);
//update agricultural officer
router.put("/update", updateAgriculturalOfficer);
//delete agricultural officer
router.delete("/delete/:id", deleteAgriculturalOfficer);
//login agricultural officer
router.post("/login", loginAgriculturalOfficer);

export default router;
