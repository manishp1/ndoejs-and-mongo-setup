const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/student";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error :${error}`);
  }
};

module.exports = connectDB;
