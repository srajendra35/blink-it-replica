import React from "react";
import { ListCategorys } from "../MockUp/ListMock";
import { useNavigate } from "react-router-dom";
import ItemLists from "../Component/ItemList";
import Fruits from "../Component/SortByPrice";

const ListCategory = () => {
  const nevigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 p-2" onClick={() => nevigate("/dairy")}>
            {ListCategorys.map((item) => (
              <div className="" key={item.id}>
                <div className="products border p-4">
                  <img src={item.image} width="40px" height="50px" alt="" />
                  <span className="mt-1 mx-1">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-9">
            <Fruits />
            <ItemLists />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategory;
