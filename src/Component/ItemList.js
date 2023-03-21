import React from "react";
import { userCards } from "../MockUp/Dairy&BreadMock";
import Card from "react-bootstrap/Card";

const ItemLists = () => {
  return (
    <>
      <div className="container">
        <div className="prodetail row col text-center justify-content-around mt-3">
          {userCards.map((item) => (
            <Card style={{ width: "18rem", height: "20rem" }}>
              <img src={item.image} />
              <Card.Body></Card.Body>
              <p>{item.title}</p>
              <p>{item.weight}ML</p>
              <div className="d-flex">
                <p className="mx-4 mt-1">₹{item.price}</p>
                <button
                  type="button"
                  className="col-sm-6 mx-5 btn btn-info mb-3"
                >
                  ADD
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemLists;
