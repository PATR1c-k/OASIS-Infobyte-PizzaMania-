import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  crust: {
    type: "string",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: false,
  },
});

const PizzaOrder = model("Order", orderSchema);
export default PizzaOrder;
