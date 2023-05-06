import express from "express";

import {
  addStockPrice,
  allStockPrice,
  deletePriceByID,
  getAllStocksPriceByDate,
  getStockPriceByID,
  updatePriceByID,
} from "../../controllers/ECMOControllers/PriceList.js";

const router = express.Router();

//add stock details
router.post("/addStockPrice", addStockPrice);

router.get("/allPrices", allStockPrice);
router.get("/allPrices/:date", getAllStocksPriceByDate);

router.get("/price/:id", getStockPriceByID);

router.delete("/delete/:id", deletePriceByID);
router.put("/update/:id", updatePriceByID);
export default router;
