import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import FarmerRoutes from "./routes/FarmerRoutes.js";
import EcoCenterRoutes from "./routes/EconomicCenterRoutes.js";
import AgriculturalOfficerRoutes from "./routes/AgriculturalOfficerRoutes.js";
import FarmerLRoutes from "./routes/FarmerLRoutes.js";
import Stock from "./routes/ECMOroutes/stock.js";
import priceList from "./routes/ECMOroutes/PriceList.js";
import AORoutes from "./routes/AORoutes.js";
import AdminRoutes from "./routes/AdminRoutes.js";

const app = express();

const PORT = process.env.PORT || 8075;
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

//routes-----------------------------------------------------------------
app.use("/farmers", FarmerRoutes);
app.use("/ecocenters", EcoCenterRoutes);
app.use("/agriofficers", AgriculturalOfficerRoutes);
app.use("/stock", Stock);
app.use("/priceList", priceList);
app.use("/farmerL", FarmerLRoutes);
app.use("/ao", AORoutes);
app.use("/admin", AdminRoutes);
