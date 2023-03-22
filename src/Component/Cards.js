import React from "react";
import { userCards } from "../MockUp/Dairy&BreadMock";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { AddCart, decrementItem, incrementItem } from "../Redux/CreateSilce";

const Cards = () => {
  const counter = useSelector((state) => state.counter);

  const dispacth = useDispatch();
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-1 fw-bolder">Dairy, Bread & Eggs</h3>

        <div className="row text-center mt-1 p-3">
          {userCards.map((product) => (
            <div className="col p-1">
              <Card style={{ width: "18rem", height: "18rem" }}>
                <NavLink to={"/detail"}>
                  <img src={product.image} />
                </NavLink>

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
                          onClick={() => dispacth(incrementItem(product.id))}
                        >
                          +
                        </button>

                        <b className="mt-2">{product.quantity}</b>
                        <button
                          type="button"
                          className="text-white mx-3 btn btn-success"
                          onClick={() => dispacth(decrementItem(product.id))}
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cards;
