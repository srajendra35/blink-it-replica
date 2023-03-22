import React from "react";
import { Category } from "../MockUp/CategeryMockUp";
import ReactCard from "./ReactCard";
import { useNavigate } from "react-router-dom";

const CategeryItems = () => {
  const nevigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row p-3 text-center">
          {Category.map((item) => (
            <div className="page col p-2" onClick={() => nevigate("/fruits")}>
              <ReactCard image={item.image} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CategeryItems;
