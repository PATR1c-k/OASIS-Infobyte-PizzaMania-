import React, { useState } from "react";
import PizzaIngredients from "../PizzaInfo";

export default function Pizzainput() {
  const [image, setImage] = useState(PizzaIngredients.crusts[0].crust_image);
  const [crustprice, setcrustPrice] = useState(
    PizzaIngredients.crusts[0].price
  );
  const [sauceprice, setsaucePrice] = useState(
    PizzaIngredients.sauces[0].price
  );
  const [cheeseprice, setcheesePrice] = useState(
    PizzaIngredients.cheeses[0].price
  );
  const [veggieprice, setveggiePrice] = useState(
    PizzaIngredients.veggies[0].price
  );
  // console.log(crust);
  const price = crustprice + sauceprice + cheeseprice + veggieprice;

  return (
    <div className="container-fluid my-3">
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3 pizza-image">
              <img src={image} alt="Pizza.jpg" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title text-center h1">Make Custom Pizza</h5>
                <div className="container card-text text-center col-md-auto">
                  <div className="row my-5">
                    <div className="col">
                      <p className="h3" id="test">
                        Crust
                      </p>
                      <select
                        id="pizzaCrust"
                        onChange={(e) => {
                          setImage(
                            PizzaIngredients.crusts[e.target.value].crust_image
                          );
                          setcrustPrice(
                            PizzaIngredients.crusts[e.target.value].price
                          );
                        }}
                      >
                        {PizzaIngredients.crusts.map((crust, i) => {
                          return (
                            <option value={crust.id} key={i}>
                              {crust.name} {crust.price}/-
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col">
                      <p className="h3">Sauce</p>
                      <select
                        onChange={(e) => {
                          setsaucePrice(
                            PizzaIngredients.sauces[e.target.value].price
                          );
                        }}
                      >
                        {PizzaIngredients.sauces.map((sauce, i) => {
                          return (
                            <option value={sauce.id} key={i}>
                              {sauce.name} {sauce.price}/-
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col">
                      <p className="h3">Cheese</p>
                      <select
                        onChange={(e) => {
                          setcheesePrice(
                            PizzaIngredients.cheeses[e.target.value].price
                          );
                        }}
                      >
                        {PizzaIngredients.cheeses.map((cheese, i) => {
                          return (
                            <option value={cheese.id} key={i}>
                              {cheese.name} {cheese.price}/-
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col">
                      <p className="h3">Veggies</p>
                      <select
                        onChange={(e) => {
                          setveggiePrice(
                            PizzaIngredients.veggies[e.target.value].price
                          );
                        }}
                      >
                        {PizzaIngredients.veggies.map((veggie, i) => {
                          return (
                            <option value={veggie.id} key={i}>
                              {veggie.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <p className="col text-start h5 align-baseline">
                      {price} Rs./-
                    </p>
                    <button
                      type="button"
                      className="col btn btn-warning align-baseline"
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
