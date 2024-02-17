const Users = require("../models/userModel");
const bycrypt = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    const existingUser = await Users.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    //hashing password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //create new user
    const newUser = new Users(req.body);

    //save the user
    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User created successfully",
        data: newUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

module.exports = { registerController };
