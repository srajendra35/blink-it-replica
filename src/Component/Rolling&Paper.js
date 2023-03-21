import React from "react";
import { RollingPapermock } from "../MockUp/Rolling&PaperMock";
import Card from "react-bootstrap/Card";

const RollingPaper = () => {
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-5 fw-bolder">Rolling paper & tobacco</h3>

        <div className="row col-12 text-center justify-content-around mt-3">
          {RollingPapermock.map((product) => (
            <Card style={{ width: "20rem", height: "22rem" }}>
              <div className="img">
                <img src={product.image} />
              </div>

              <Card.Body>
                <div className="tilte">
                  <p className="w-75">{product.title}</p>
                  <p>{product.weight}ML</p>
                </div>

                <div className="d-flex p-4">
                  <p className="mx-4 mt-2">₹{product.price}</p>
                  <button
                    type="button"
                    className=" col-6 btn border-success text-success fw-bolder"
                  >
                    ADD
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default RollingPaper;
