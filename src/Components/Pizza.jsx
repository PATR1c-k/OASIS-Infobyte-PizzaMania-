import React from "react";
import PizzaIngredients from "../PizzaInfo";

function Pizza() {
  return (
    <div className="container-fluid">
      <div className="container position-absolute top-50 start-50 translate-middle custom_pizza_input_card">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://img.freepik.com/premium-photo/traditional-italian-pizza-with-mushrooms-cherry-tomatoes-olives-wooden-board-isolated_69064-977.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center h1">Make Custom Pizza</h5>
                <div className="container card-text text-center col-md-auto">
                  <div className="row my-5">
                    <div className="col">
                      <p className="h3" id="test">
                        Crust
                      </p>
                      <select>
                        {PizzaIngredients[0].crusts.map((varient, i) => {
                          return (
                            <option value={varient.name} key={i}>
                              {varient.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col">
                      <p className="h3">Sauce</p>
                      <select>
                        {PizzaIngredients[0].sauces.map((varient, i) => {
                          return (
                            <option value={varient.name} key={i}>
                              {varient.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col">
                      <p className="h3">Cheese</p>
                      <select>
                        {PizzaIngredients[0].cheeses.map((varient, i) => {
                          return (
                            <option value={varient.name} key={i}>
                              {varient.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col">
                      <p className="h3">Veggies</p>
                      <select>
                        {PizzaIngredients[0].veggies.map((varient, i) => {
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
