import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
const ReactCard = (props) => {
  const Nevigate = useNavigate();
  return (
    <>
      <Card style={{ width: "10rem", height: "12rem" }}>
        <div className="h-50" onClick={() => Nevigate("/category")}>
          <Card.Img
            variant="top"
            src={props.image}
            className=" w-80 h-100 justify-content-center mt-2"
          />
        </div>

        <p className="text-center mt-5">{props.title}</p>
      </Card>
    </>
  );
};
export default ReactCard;
