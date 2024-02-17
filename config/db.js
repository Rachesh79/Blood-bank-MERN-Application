const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/bloodbank");
        console.log("MongoDB Connected".bgGreen.white);
    }
    catch(error){
        console.log(`MongoDB Error: ${error}`.bgRed.white);
    }

};

module.exports = connectDB;