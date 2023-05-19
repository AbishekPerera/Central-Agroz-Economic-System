import { Admin } from "../models/Admin.js";

import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//register admin
export const registerAdmin = async (req, res) => {
  const { name, email, phone, address, role, image, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAdmin = new Admin({
      name,
      email,
      phone,
      address,
      role,
      image,
      password: hashedPassword,
    });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, "-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get admin by id
export const getAdminById = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id, "-password");
    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update admin
export const updateAdmin = async (req, res) => {
  let { id, name, email, phone, address, role, image, password } = req.body;

  try {
    let existingAdmin = await Admin.findById(id);

    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin doesn't exist." });
    }

    if (!name) {
      name = existingAdmin.name;
    }
    if (!email) {
      email = existingAdmin.email;
    }
    if (!phone) {
      phone = existingAdmin.phone;
    }
    if (!address) {
      address = existingAdmin.address;
    }
    if (!role) {
      role = existingAdmin.role;
    }
    if (!image) {
      image = existingAdmin.image;
    }
    if (!password) {
      password = existingAdmin.password;
    } else {
      const saltRounds = 10;
      password = await bcrypt.hash(password, saltRounds);
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      { name, email, phone, address, role, image, password },
      { new: true }
    );

    const token = jwt.sign(
      { id: updatedAdmin._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({
      message: "Admin updated successfully.",
      token,
      admin: {
        id: updatedAdmin._id,
        name: updatedAdmin.name,
        email: updatedAdmin.email,
        phone: updatedAdmin.phone,
        address: updatedAdmin.address,
        role: updatedAdmin.role,
        image: updatedAdmin.image,
      },
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//delete admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const existingAdmin = await Admin.findById(id);

    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin doesn't exist." });
    }

    await Admin.findByIdAndRemove(id);

    res.status(200).json({ message: "Admin deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//login admin
//email. password
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: existingAdmin._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({
      message: "Admin logged in successfully.",
      token,
      admin: {
        id: existingAdmin._id,
        name: existingAdmin.name,
        email: existingAdmin.email,
        phone: existingAdmin.phone,
        address: existingAdmin.address,
        role: existingAdmin.role,
        image: existingAdmin.image,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
