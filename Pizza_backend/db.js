const mongoose = require("mongoose");
const mongoURL =
  "mongodb://127.0.0.1:27017/?pizza=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";

mongoose.set("strictQuery", false);
const Connectmongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("Successfully connected to the pizza");
  });
};

module.exports = Connectmongo;
