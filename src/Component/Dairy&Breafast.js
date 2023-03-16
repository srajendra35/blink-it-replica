import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dairys } from "../MockUp/DairyMockUp";
import { DairyProdects } from "../MockUp/DairyProductsMock";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import {
  productaddcart,
  productsremovecart,
  AddCart,
} from "../Redux/CreateSilce";

const Dairy = () => {
  const nevigate = useNavigate();
  const counter = useSelector((state) => state.counter);
  const dispacth = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="products col-sm-3 mt-3">
            {Dairys.map((item) => (
              <div className="div" key={item.id}>
                <div className="border p-4">
                  <img src={item.image} width="30px" height="30px" alt=""/>
                  <span className="mt-1 mx-1">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-9">
            <div
              className="row col-12 text-center justify-content-around mt-3"
              onClick={() => nevigate("/detail")}
            >
              {DairyProdects.map((product) => (
                <Card style={{ width: "20rem", height: "22rem" }}>
                  <img src={product.image} />

                  <Card.Body>
                    <p>{product.title}</p>
                    <p>{product.weight}ML</p>
                    <div className="d-flex">
                      <p className="mx-4 mt-1">₹{product.price}</p>

                      {counter.some((item) => item.id === product.id) ? (
                        <div className="d-flex mx-4">
                          <button
                            type="button"
                            className="text-white mx-3 btn btn-success"
                            onClick={() => dispacth(productaddcart(1))}
                          >
                            +
                          </button>
                          <span className="mt-2">{counter.length}</span>
                          <button
                            type="button"
                            className="text-white mx-3 btn btn-success"
                            onClick={() => dispacth(productsremovecart(-1))}
                          >
                            -
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="col-6 border border-success btn text-success rounded-xl fw-bolder"
                          onClick={() => dispacth(AddCart(product))}
                        >
                          ADD
                        </button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dairy;
