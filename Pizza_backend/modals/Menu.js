import { Schema, model } from "mongoose";

const MenuSchema = new Schema({
  crust: {
    type: "string",
    required: true,
  },
  toppings: {
    type: "string",
    required: true,
  },
  sauces: {
    type: "string",
    required: true,
  },
  sizes: {
    type: "string",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },
});

const PizzaMenu = model("Menu", MenuSchema);
export default PizzaMenu;
