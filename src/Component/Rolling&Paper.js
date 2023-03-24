import React from "react";
import { RollingPapermock } from "../MockUp/Rolling&PaperMock";
import Card from "react-bootstrap/Card";

const RollingPaper = () => {
  return (
    <>
      <div className="container-fluid">
        <h3 className=" fw-bolder">Rolling paper & tobacco</h3>

        <div className="row text-center mt-1 p-3">
          {RollingPapermock.map((product) => (
            <div className="col p-1">
              <Card style={{ width: "20rem", height: "20rem" }}>
                <div className="img w-100 h-100">
                  <img src={product.image} />
                </div>

                <Card.Body>
                  <div className="tilte">
                    <p className="w-100">{product.title}</p>
                    <p>{product.weight}ML</p>
                  </div>

                  <div className="d-flex">
                    <p className="w-75">₹{product.price}</p>

                    <button
                      type="button"
                      className="col-5  btn border-success text-success fw-bolder"
                    >
                      ADD
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RollingPaper;
