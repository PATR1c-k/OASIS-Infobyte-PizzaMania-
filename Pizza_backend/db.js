const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://pratik:test:123@cluster0.am5xmqs.mongodb.net/?retryWrites=true&w=majority/Mern-Pizza";

mongoose.set("strictQuery", false);
const Connectmongo = () => {
  mongoose.connect(
    mongoURL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
      console.log("Successfully connected to the Mern-Pizza");
    }
  );
};

module.exports = Connectmongo;
