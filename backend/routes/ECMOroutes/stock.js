import express from "express";

import { addStock, allStocks,deleteStockByID,getStockByID, updateStockByID } from "../../controllers/ECMOControllers/stock.js";

const router = express.Router();

router.post("/addStock", addStock);

router.get("/AllStocks", allStocks);

router.get("/stock/:id",getStockByID);

router.delete("/delete/:id",deleteStockByID);
router.put("/update/:id",updateStockByID);

export default router;
