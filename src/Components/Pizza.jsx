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
                <div class="container card-text text-center col-md-auto">
                  <div className="row my-5">
                    <div class="col">
                      <p className="h3">Crust</p>
                      <select>
                        {PizzaIngredients[0].crusts_varients.map((varient) => {
                          return <option value={varient}>{varient}</option>;
                        })}
                      </select>
                    </div>
                    <div class="col">
                      <p className="h3">Sauce</p>
                      <select>
                        {PizzaIngredients[0].sauces_varients.map((varient) => {
                          return <option value={varient}>{varient}</option>;
                        })}
                      </select>
                    </div>
                    <div class="col">
                      <p className="h3">Cheese</p>
                      <select>
                        {PizzaIngredients[0].cheeses_varients.map((varient) => {
                          return <option value={varient}>{varient}</option>;
                        })}
                      </select>
                    </div>
                    <div class="col">
                      <p className="h3">Veggies</p>
                      <select>
                        {PizzaIngredients[0].veggies_varients.map((varient) => {
                          return <option value={varient}>{varient}</option>;
                        })}
                      </select>
                    </div>
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
