const express = require("express");
const { registerController } = require("../controllers/aurhController");

const router = express.Router();


//register || POST
router.post("/register", registerController);




module.exports = router;