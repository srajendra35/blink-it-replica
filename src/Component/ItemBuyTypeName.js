import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const ItemBuyTypeNumber = () => {
  const carts = useSelector((state) => state.counter);

  useEffect(() => {
    setcount(carts.reduce((acc, curr) => acc + curr.price, 0));
  }, [carts]);

  const [count, setcount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <p>MRP</p>
          </div>
          <div className="col">
            <p>₹{count}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Product discount</p>
          </div>
          <div className="col">
            <p className="text-success">-₹5</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Handling Charge</p>
          </div>
          <div className="col">
            <p>₹2</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Delivery Charge</p>
          </div>
          <div className="col">
            <p>
              <del>₹15</del>{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="fw-bolder">Grand total</p>
          </div>
          <div className="col">
            <p className="fw-bolder">₹---</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Coupons are only applicable on the Blinkit app</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemBuyTypeNumber;
