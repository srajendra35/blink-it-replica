import React from "react";
import { Products } from "../MockUp/CardMockUp";
import { useNavigate } from "react-router-dom";

const CardsOrder = () => {
  const nevigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="order mt-1"> 
            {Products.map((item) => (
              <div className="" onClick={() => nevigate("/fruits")}>
                <img className=" mx-5 col-sm-11 mt-2" src={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardsOrder;
