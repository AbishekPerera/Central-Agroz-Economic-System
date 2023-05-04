import express from "express";
import {
  deleteEconomicCenter,
  getEconomicCenterById,
  getEconomicCenters,
  loginEconomicCenter,
  registerEconomicCenter,
  updateEconomicCenter,
} from "../controllers/EcoControllers.js";
const router = express.Router();

//register an eco center
router.post("/register", registerEconomicCenter);
//get all eco centers
router.get("/", getEconomicCenters);
//get eco center by id
router.get("/:id", getEconomicCenterById);
//update eco center
router.put("/update", updateEconomicCenter);
//delete eco center
router.delete("/delete/:id", deleteEconomicCenter);
//login eco center
router.post("/login", loginEconomicCenter);

export default router;
