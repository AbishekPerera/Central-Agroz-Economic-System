import { AgriculturalOfficers } from "../models/AgriculturalOfficers.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//register agricultural officer
export const registerAgriculturalOfficer = async (req, res) => {
  const {
    name,
    email,
    contact,
    address,
    gramaNiladariDivision,
    district,
    province,
    image,
    password,
  } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAgriculturalOfficer = new AgriculturalOfficers({
      name,
      email,
      contact,
      address,
      gramaNiladariDivision,
      district,
      province,
      image,
      password: hashedPassword,
    });
    await newAgriculturalOfficer.save();
    res.status(201).json(newAgriculturalOfficer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get all agricultural officers
export const getAgriculturalOfficers = async (req, res) => {
  try {
    const agriculturalOfficers = await AgriculturalOfficers.find(
      {},
      "-password"
    );
    res.status(200).json(agriculturalOfficers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get agricultural officer by id
export const getAgriculturalOfficerById = async (req, res) => {
  const { id } = req.params;

  try {
    const agriculturalOfficer = await AgriculturalOfficers.findById(
      id,
      "-password"
    );
    res.status(200).json(agriculturalOfficer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update agricultural officer
export const updateAgriculturalOfficer = async (req, res) => {
  const { id } = req.body;
  let {
    name,
    email,
    contact,
    address,
    gramaNiladariDivision,
    district,
    province,
    image,
    password,
  } = req.body;

  try {
    const updateAgriculturalOfficer = await AgriculturalOfficers.findById(id);

    if (!name) {
      name = updateAgriculturalOfficer.name;
    }
    if (!email) {
      email = updateAgriculturalOfficer.email;
    }
    if (!contact) {
      contact = updateAgriculturalOfficer.contact;
    }
    if (!address) {
      address = updateAgriculturalOfficer.address;
    }
    if (!gramaNiladariDivision) {
      gramaNiladariDivision = updateAgriculturalOfficer.gramaNiladariDivision;
    }
    if (!district) {
      district = updateAgriculturalOfficer.district;
    }
    if (!province) {
      province = updateAgriculturalOfficer.province;
    }
    if (!image) {
      image = updateAgriculturalOfficer.image;
    }
    if (!password) {
      password = updateAgriculturalOfficer.password;
    } else {
      const saltRounds = 10;
      password = await bcrypt.hash(password, saltRounds);
    }

    const updatedAgriculturalOfficer =
      await AgriculturalOfficers.findByIdAndUpdate(
        id,
        {
          name,
          email,
          contact,
          address,
          gramaNiladariDivision,
          district,
          province,
          image,
          password,
        },
        { new: true }
      );

    const token = jwt.sign(
      { id: updatedAgriculturalOfficer._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({
      message: "Agricultural officer updated successfully",
      token,
      agriculturalOfficer: {
        id: updatedAgriculturalOfficer._id,
        name: updatedAgriculturalOfficer.name,
        email: updatedAgriculturalOfficer.email,
        contact: updatedAgriculturalOfficer.contact,
        address: updatedAgriculturalOfficer.address,
        gramaNiladariDivision: updatedAgriculturalOfficer.gramaNiladariDivision,
        district: updatedAgriculturalOfficer.district,
        province: updatedAgriculturalOfficer.province,
        image: updatedAgriculturalOfficer.image,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete agricultural officer
export const deleteAgriculturalOfficer = async (req, res) => {
  const { id } = req.params;

  try {
    await AgriculturalOfficers.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Agricultural officer deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//login agricultural officer
//email password
export const loginAgriculturalOfficer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAgriculturalOfficer = await AgriculturalOfficers.findOne({
      email,
    });

    if (!existingAgriculturalOfficer) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingAgriculturalOfficer.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: existingAgriculturalOfficer._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({
      message: "Login successful",
      token,
      agriculturalOfficer: {
        id: existingAgriculturalOfficer._id,
        name: existingAgriculturalOfficer.name,
        email: existingAgriculturalOfficer.email,
        contact: existingAgriculturalOfficer.contact,
        address: existingAgriculturalOfficer.address,
        gramaNiladariDivision:
          existingAgriculturalOfficer.gramaNiladariDivision,
        district: existingAgriculturalOfficer.district,
        province: existingAgriculturalOfficer.province,
        image: existingAgriculturalOfficer.image,
        createdAt: existingAgriculturalOfficer.createdAt,
        updatedAt: existingAgriculturalOfficer.updatedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
