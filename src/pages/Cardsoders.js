import React from "react";
import { Products } from "../MockUp/CardMockUp";
import { useNavigate } from "react-router-dom";

const CardsOrder = () => {
    const nevigate = useNavigate();
  return (
    <>
     
        <div className="container-fluid d-flex text-center mt-2 justify-content-around ">
          {Products.map((item) => (
            <div className="" onClick={()=>nevigate('/fruits')}>
              <img src={item.image}/>
            </div>
          ))}
        </div>
    
    </>
  );
};
export default CardsOrder;
