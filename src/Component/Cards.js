import React from "react";
import { userCards } from "../MockUp/Dairy&BreadMock";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AddCart,
  productaddcart,
  productsremovecart,
} from "../Redux/CreateSilce";
const Cards = () => {
  const counter = useSelector((state) => state.counter);
  const dispacth = useDispatch();
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-5 fw-bolder">Dairy, Bread & Eggs</h3>

        <div className="row col-12 text-center justify-content-around mt-3">
          {userCards.map((product) => (
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
    </>
  );
};
export default Cards;
