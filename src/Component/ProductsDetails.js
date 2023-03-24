import React, { useState } from "react";
import { ProductDetails } from "../MockUp/ProductsDetailMock";
const ProductDetail = () => {
  const [sliderdata, setsliderdata] = useState(ProductDetails[0]);
  const handleClick = (index) => {
    const slider = ProductDetails[index];
    setsliderdata(slider);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="milk col-sm-6">
            <div className="d-flex">
              <div className="row">
                <img
                  src={sliderdata.image}
                  height={"300px"}
                  width={"400px"}
                  className=""
                />
                <div className="border-1 mt-5">
                  {ProductDetails.map((data, i) => {
                    return (
                      <>
                        <img
                          src={data.image}
                          key={data.id}
                          width={"90px"}
                          height={"90px"}
                          className="border mx-4 mt-5"
                          onClick={() => handleClick(i)}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="product">
              <h4>Product Details</h4>
              <h6 className="fw-bold">Key Features</h6>
              <p className="col-3 ">
                Pure, healthy and pasteurized milk Low in fat Packed with the
                goodness of calcium and protein Excellent for preparing tea,
                coffee or desserts
              </p>
              <h6 className="fw-bold">Unit</h6>
              <p>500 ml</p>
              <h6 className="fw-bold">Packaging Type</h6>
              <p>Polypack</p>
              <h6 className="fw-bold"> Shelf Life</h6>
              <p>2 days</p>
              <h6 className="fw-bold">Country Of Origin</h6>
              <p>india</p>
              <h6 className="fw-bold">Customer Care Details</h6>
              <p className="col-2">
                Email: info@blinkit.com Customer Care Number: 1-800-208-8888
              </p>
              <h6 className="fw-bold"> Expiry Date</h6>
              <p>
                Please refer to the packaging of the product for expiry date.
              </p>
              <h6 className="fw-bold"> Seller</h6>
              <p>90MINUTES RETAIL PRIVATE LIMITED</p>
              <h6 className="fw-bold">Disclaimer</h6>
              <p className="col-6">
                Every effort is made to maintain the accuracy of all
                information. However, actual product packaging and materials may
                contain more and/or different information. It is recommended not
                to solely rely on the information presented.
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <p>Home / Milk / Saras Toned Fresh Milk</p>
            <h4>Saras Toned Fresh Milk</h4>
            <h3 className="text-success mt-4 mb-4">Saras</h3>
            <div className="radio">
              <div className=" row col-4 form-check form-check-inline d-flex">
                <div className="border rounded">
                  <input
                    className="form-check-input mt-3 mx-4"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label
                    className="form-check-label fw-bolder"
                    for="inlineRadio1"
                  >
                    500<span className="mx-1">ML</span>{" "}
                  </label>
                  <p>₹25</p>
                </div>
                <div className="border mt-2">
                  <input
                    className="form-check-input mt-3 mx-4"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label
                    className="form-check-label fw-bolder"
                    for="inlineRadio1"
                  >
                    1<span className="">kg</span>
                  </label>
                  <p>₹50</p>
                </div>
              </div>
            </div>

            

            <button
              type="button"
              className="btn border-success text-success col-3 fw-bolder mt-4 fs-5"
            >
              ADD
            </button>
            <h5 className="mt-5 fw-bolder">Why shop from blinkit?</h5>
            <div className="col-sm-12 d-flex mt-5">
              <img
                className="mx-4"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/10_minute_delivery.png"
                alt=""
              />
              <p>
                Superfast Delivery Get your order delivered to your doorstep at
                the earliest from dark stores near you.
              </p>
            </div>
            <div className="col-sm-12 d-flex mt-3">
              <img
                className="mx-4"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Best_Prices_Offers.png"
                alt=""
              />
              <p>
                Best Prices & Offers Best price destination with offers directly
                from the manufacturers..
              </p>
            </div>
            <div className="col-sm-12 d-flex mt-3">
              <img
                className="mx-4"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Wide_Assortment.png"
                alt=""
              />
              <p>
                Wide Assortment Choose from 5000+ products across food, personal
                care, household & other categories..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
