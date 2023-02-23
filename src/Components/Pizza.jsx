import React, { useEffect, useState } from "react";
import PizzaIngredients from "../PizzaInfo";

function Pizza() {
  const [crust, updateCrust] = useState(0);
  const [image, setImage] = useState(
    PizzaIngredients.crusts[crust].crust_image
  );

  // console.log(crust);

  return (
    <div className="container-fluid">
      <div className="container position-absolute top-50 start-50 translate-middle custom_pizza_input_card">
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
                      <select>
                        {PizzaIngredients.sauces.map((varient, i) => {
                          return (
                            <option value={varient.name} key={i}>
                              {varient.name} {varient.price}/-
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col">
                      <p className="h3">Cheese</p>
                      <select>
                        {PizzaIngredients.cheeses.map((varient, i) => {
                          return (
                            <option value={varient.name} key={i}>
                              {varient.name} {varient.price}/-
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col">
                      <p className="h3">Veggies</p>
                      <select>
                        {PizzaIngredients.veggies.map((varient, i) => {
                          return (
                            <option value={varient.name} key={i}>
                              {varient.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <p className="col text-start h5 align-baseline">
                      Price Rs./-
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

export default Pizza;
