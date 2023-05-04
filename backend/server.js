import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import FarmerRoutes from "./routes/FarmerRoutes.js";
import EcoCenterRoutes from "./routes/EconomicCenterRoutes.js";

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
