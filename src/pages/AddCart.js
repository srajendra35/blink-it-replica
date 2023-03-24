import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementItem, decrementItem, RemoveCart } from "../Redux/CreateSilce";
import greter from "../assects/greter.png";
import MenCart from "../assects/mencart.webp";
import ItemBuyTypeNumber from "../Component/ItemBuyTypeName";

const AddCart = (props) => {
  const { handlecanvasclose } = props;

  const carts = useSelector((state) => state.counter);
   

  const dispatch = useDispatch();

  const cartTotal = carts
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const discount = (cartTotal / 100) * 15;
  const totalPrice = cartTotal - discount + 2;

  const navigate = useNavigate();
  const shoopping = () => {
    navigate("/");
  };

  return (
    <>
      {carts.length > 0 ? (
        <>
          <div className="container">
            <div className="row">
              {carts.map((product) => (
                <div className="my-1 border text-center mx-1 rounded d-flex">
                  <div className="mt-1  w-50">
                    <img src={product.image} width="50%" height="65%" />
                    <p>₹{product.price}</p>
                  </div>

                  <div className="w-50">
                    <p>{product.title}</p>
                    <p className="w-100 h-20">{product.weight}ml</p>

                    <div className="d-flex mx-4">
                      {product.quantity == 0 ? (
                        <button  
                          type="button"
                          className="btn btn-info  h-25"
                          onClick={() => dispatch(RemoveCart(product.id))}
                        >
                          Remove
                        </button>
                      ) : (
                        <>
                      
                          <button
                            type="button"
                            className="text-white mx-3 btn btn-success"
                            onClick={() => dispatch(incrementItem(product.id))}
                          >
                            +
                          </button>
                          <b className="mt-2">{product.quantity}</b>
                          <button
                            type="button"
                            className="text-white mx-3 btn btn-success"
                            onClick={() => dispatch(decrementItem(product.id))}
                          >
                            -
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ItemBuyTypeNumber value={discount} />

            <div className="row">
              <div className="mt-5 bg-success rounded d-flex">
                <div className="col mb-3">
                  <span className="fs-5 fw-bolder text-white">
                    {carts.length}
                  </span>
                  <span className="fs-5 mx-2 fw-bolder text-white">item</span>
                  <span className="fw-bolder fs-2 text-white">.</span>
                  <span className="fs-5 fw-bolder mx-2 text-white">
                    ₹{totalPrice}
                  </span>
                </div>
                <div className="proced mt-3">
                  <span className="fw-bolder text-white">Proceed</span>
                  <span className="mx-1">
                    <img src={greter} width="14rem" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container text-center mt-5">
            <img src={MenCart} width="30%" alt="" />
            <h3 className=" fw-bolder">
              You don't have any items in your cart
            </h3>

            <button
              type="button"
              className="btn btn-info mt-5 fs-2"
              onClick={() => (shoopping(), handlecanvasclose())}
            >
              Start Shopping
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default AddCart;
