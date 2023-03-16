import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RemoveCart } from "../Redux/CreateSilce";
import greter from "../assects/greter.png";
import MenCart from "../assects/mencart.webp";
import ItemBuyTypeNumber from "./ItemBuyTypeName";

const AddCart = (props) => {
  const { handlecanvasclose } = props;

  const carts = useSelector((state) => state.counter);

  const [count, setcount] = useState(0);

  useEffect(() => {
    setcount(carts.reduce((acc, curr) => acc + curr.price, 0));
  }, [carts]);

  const dispatch = useDispatch();
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
                <div className="my-1 text-center border mx-1 rounded">
                  <div className="three w-100">
                    <img src={product.image} width="80px" />
                  </div>
                  <div className="h-50">
                    <p className="">{product.title}</p>
                    <p>₹{product.price}</p>
                    <p>wet:{product.weight}ml</p>
                  </div>
                  <div className="w-100">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => dispatch(RemoveCart(product.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <ItemBuyTypeNumber />

            <div className="row">
              <div className="mt-5 bg-success rounded d-flex">
                <div className="col mb-3">
                  <span className="fs-5 fw-bolder text-white">
                    {carts.length}
                  </span>
                  <span className="fs-5 mx-2 fw-bolder text-white">item</span>
                  <span className="fw-bolder fs-2 text-white">.</span>
                  <span className="fs-5 fw-bolder mx-2 text-white">
                    ₹{count}
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
