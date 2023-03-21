import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
 

const ItemBuyTypeNumber = (props) => {

  const {value}=props;
  const carts = useSelector((state) => state.counter);
 
  const [count, setcount] = useState(0);

  const totalPrice = count-value + 2;


  useEffect(() => {
    setcount(carts.reduce((acc, curr) => acc + curr.price, 0));
  }, [carts]);

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
            <p className="text-success">-₹{value.toFixed(2)}</p>
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
              <del>₹15</del><span> Free</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="fw-bolder">Grand total</p>
          </div>
          <div className="col">
            <p className="fw-bolder">₹{totalPrice}</p>
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
