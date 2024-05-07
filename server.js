const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path")
const connectDB = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();
// app.use(cors(
//   {
//     origin:["https://deploy-mern-1whq.vercel.app"],
//     methods:["POST","GET"],
//     credentials:true
//   }
// ));

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// static route
app.use(express.static(path.join(__dirname,'./client/build')))

// static routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//port
const PORT = process.env.PORT || 8001;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
