import React from "react";
import { userCards } from "../MockUp/Mock";
import Card from "react-bootstrap/Card";

const Fruits = () => {
  return (
    <>
      <div className="container">
        <div className="row col-12 text-center justify-content-around mt-3">
          <div className="col-sm-12 border d-flex mb-2">
            <div className="col-sm-8 mt-2">
              <p className="text-start fw-bolder">
                Buy Fresh Vegetables Online
              </p>
            </div>
            <div className="col-sm-1 mt-2">
              <p>Sort By</p>
            </div>
            <div className="col-sm-3 mt-2">
              <li className="nav-item dropdown">
                <a
                  className=" text-success nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Price(Low to High)
                </a>
                <ul className="dropdown-menu p-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Relevance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Price(High to low)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Discount(Low to high)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Name(A-Z)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Price(Low to high)
                    </label>
                  </div>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fruits;
