import { set, connect } from "mongoose";
const mongoURL =
  "mongodb+srv://pratik:test:123@cluster0.am5xmqs.mongodb.net/?retryWrites=true&w=majority/Mern-Pizza";

set("strictQuery", false);
const Connectmongo = () => {
  connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("Successfully connected to the Mern-Pizza");
  });
};

export default Connectmongo;
