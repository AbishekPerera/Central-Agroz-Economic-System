import express from "express";

import {
  deleteAdmin,
  getAdminById,
  getAdmins,
  loginAdmin,
  registerAdmin,
  updateAdmin,
} from "../controllers/AdminControllers.js";

const router = express.Router();

//register an admin
router.post("/register", registerAdmin);
//get all admins
router.get("/", getAdmins);
//get admin by id
router.get("/:id", getAdminById);
//update admin
router.put("/update", updateAdmin);
//delete admin
router.delete("/delete/:id", deleteAdmin);
//login admin
router.post("/login", loginAdmin);

export default router;
