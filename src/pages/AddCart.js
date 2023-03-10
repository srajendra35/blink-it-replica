import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { RemoveCart } from "../Redux/CreateSilce";
export default function AddCart() {
  const carts = useSelector((state) => state.counter);
  console.log("==>", carts);
  const [count, setcount] = useState(0);

  useEffect(() => {
    setcount(carts.reduce((acc, curr) => acc + curr.price, 0));
  }, [carts]);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h3 className="color fw-bolder fs-1">my cart</h3>
        <p className="fs-3">Total Price:₹{count}</p>
        <p className="fs-3">Cart item:{carts.length}</p>
      </div>
      {carts.length > 0 ? (
        <>
          <div className="container">
            <div className="row">
              {carts.map((product) => (
                <div className=" col-2 border-4 my-2 text-center border mx-2">
                  <img src={product.image} width="70px" />
                  <p>title{product.title}</p>
                  <p>price:₹{product.price}</p>
                  <p>wet:{product.weight}ml</p>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => dispatch(RemoveCart(product.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container text-center mt-5">
            <h3 className=" fw-bolder">
              You don't have any items in your cart
            </h3>
            <NavLink to={"/"}>
              <button type="button" className="btn btn-info mt-5 fs-2">
                Start Shopping
              </button>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
}
