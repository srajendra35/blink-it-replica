import React from "react";
import Card from "react-bootstrap/Card";
import { Category } from "../MockUp/CategeryMockUp";
import Trendings from "../assects/trend.png";

const Trending = () => {
  return (
    <>
      <div className="container">
        <div className="tr">
          <img src={Trendings} alt="" />
          <span className="mx-2 fw-bolder">Trending</span>

          <div className="trending ">
            {Category.map((item) => (
              <div className="p-2">
                <Card style={{ width: "7rem", height: "8rem" }}>
                  <Card.Body>
                    <img src={item.image} width="80px" />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Trending;
