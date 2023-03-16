import React from "react";



const Fruits = () => {
  return (
    <>
      <div className="container">
        <div className="border">
          <div className="d-flex justify-content-between mt-2">
            <div className="Fresh">
              <p className="mx-2 mt-2 fw-bolder">Buy Fresh Vegetables Online</p>
            </div>

            <div className="price d-flex">
            <p className="fw-bolder mx-3 mt-2">Sort By:</p>
              <ul className="relevence border rounded">
              <li className="nav-item dropdown">
                <a
                  className="text-dark fs-4 nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Relevance
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
                     
                      Price(Low to High)
                      
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fruits;
