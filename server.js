const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");

//config dotenv
dotenv.config();


//test object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


// port
const PORT = process.env.PORT || 8080;


//routes
app.use("/api/v1/", require("./routers/testRouter"));


//listen
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgBlue.white);
});

