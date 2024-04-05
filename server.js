const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// dot config
dotenv.config();


//config db
connectDB();


// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// test router
app.use("/api/v1/test", require("./routes/testRouter"));

// port
const PORT = process.env.PORT ||8080;



//routes
app.use("/api/v1/", require("./routes/testRouter"));
app.use("/api/v1/auth", require("./routes/authRouters"));



// listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${PORT}`.bgBlue
      .white
  );
});
