const express = require("express");

//test object
const app = express();


// port
const PORT = 8080;


//routes
app.use("/api/v1/", require("./routers/testRouter"));


//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});