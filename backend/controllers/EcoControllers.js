import { EconomicCenter } from "../models/EconomicCenter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//register farmer
import bcrypt from "bcrypt";

export const registerEconomicCenter = async (req, res) => {
  const {
    ecoCenterName,
    ecoCenterAddress,
    province,
    district,
    phone,
    officerName,
    officerEmail,
    officerContact,
    officerAddress,
    password,
  } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newEconomicCenter = new EconomicCenter({
    ecoCenterName,
    ecoCenterAddress,
    province,
    district,
    phone,
    officerName,
    officerEmail,
    officerContact,
    officerAddress,
    password: hashedPassword,
  });
  try {
    await newEconomicCenter.save();
    res.status(200).json(newEconomicCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all eco centers
export const getEconomicCenters = async (req, res) => {
  try {
    const ecoCenters = await EconomicCenter.find({}, "-password");
    res.status(200).json(ecoCenters);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get eco center by id
export const getEconomicCenterById = async (req, res) => {
  const { id } = req.params;
  try {
    const ecoCenter = await EconomicCenter.findById(id, "-password");
    res.status(200).json(ecoCenter);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update eco center
export const updateEconomicCenter = async (req, res) => {
  const { id } = req.body;
  let {
    ecoCenterName,
    ecoCenterAddress,
    province,
    district,
    phone,
    officerName,
    officerEmail,
    officerContact,
    officerAddress,
    password,
  } = req.body;

  try {
    const updateEcoCenter = await EconomicCenter.findById(id);

    if (!ecoCenterName) {
      ecoCenterName = updateEcoCenter.ecoCenterName;
    }
    if (!ecoCenterAddress) {
      ecoCenterAddress = updateEcoCenter.ecoCenterAddress;
    }
    if (!province) {
      province = updateEcoCenter.province;
    }
    if (!district) {
      district = updateEcoCenter.district;
    }
    if (!phone) {
      phone = updateEcoCenter.phone;
    }
    if (!officerName) {
      officerName = updateEcoCenter.officerName;
    }
    if (!officerEmail) {
      officerEmail = updateEcoCenter.officerEmail;
    }
    if (!officerContact) {
      officerContact = updateEcoCenter.officerContact;
    }
    if (!officerAddress) {
      officerAddress = updateEcoCenter.officerAddress;
    }
    if (!password) {
      password = updateEcoCenter.password;
    } else {
      const saltRounds = 10;
      password = await bcrypt.hash(password, saltRounds);
    }

    const updatedEcoCenter = await EconomicCenter.findByIdAndUpdate(
      id,
      {
        ecoCenterName,
        ecoCenterAddress,
        province,
        district,
        phone,
        officerName,
        officerEmail,
        officerContact,
        officerAddress,
        password,
      },
      { new: true }
    );

    const token = jwt.sign(
      { id: updatedEcoCenter._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({
      message: "Eco Center updated successfully",
      token,
      ecoCenter: {
        id: updatedEcoCenter._id,
        ecoCenterName: updatedEcoCenter.ecoCenterName,
        email: updatedEcoCenter.email,
        ecoCenterAddress: updatedEcoCenter.ecoCenterAddress,
        province: updatedEcoCenter.province,
        district: updatedEcoCenter.district,
        phone: updatedEcoCenter.phone,
        officerName: updatedEcoCenter.officerName,
        officerEmail: updatedEcoCenter.officerEmail,
        officerContact: updatedEcoCenter.officerContact,
        officerAddress: updatedEcoCenter.officerAddress,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete eco center
export const deleteEconomicCenter = async (req, res) => {
  const { id } = req.params;
  try {
    await EconomicCenter.findByIdAndDelete(id);
    res.status(200).json({ message: "Eco Center Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login eco center
export const loginEconomicCenter = async (req, res) => {
  const { officerEmail, password } = req.body;

  try {
    const ecoCenter = await EconomicCenter.findOne({ officerEmail });

    if (!ecoCenter) {
      return res.status(404).json({ message: "Eco Center not found" });
    }

    const match = await bcrypt.compare(password, ecoCenter.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: ecoCenter._id }, process.env.JWT_SECRET_KEY);

    res.status(200).json({
      message: "Eco Center logged in successfully",
      token,
      ecoCenter: {
        id: ecoCenter._id,
        ecoCenterName: ecoCenter.ecoCenterName,
        email: ecoCenter.email,
        ecoCenterAddress: ecoCenter.ecoCenterAddress,
        province: ecoCenter.province,
        district: ecoCenter.district,
        phone: ecoCenter.phone,
        officerName: ecoCenter.officerName,
        officerEmail: ecoCenter.officerEmail,
        officerContact: ecoCenter.officerContact,
        officerAddress: ecoCenter.officerAddress,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
