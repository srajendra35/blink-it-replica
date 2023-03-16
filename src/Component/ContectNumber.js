import React from "react";
import { useState } from "react";
import mobile from "../assects/mobile.png";

const ContectNumber = (props) => {
  const { handleNext } = props;

  const [value, setvalue] = useState(false);

  const handleOnchange = (e) => {
    const data = e.target.value;
    if (data.length == 10) {
      setvalue(true);
    } else {
      setvalue(false);
    }
  };

  return (
    <>
      <div className="content text-center ">
        <div className="enter mb-5  fs-4">
          <div className="row">
            <div className="col-sm-12">
              <h5 className=" col-8 offset-2 mt-5 mb-4">
                Enter you Phone number to Login/Sign up
              </h5>
            </div>
          </div>
        </div>
        <div className="input-group justify-content-center mt-3">
          <span className="input-group-text">
            <img src={mobile} width="15rem" alt="" />
            +91-
          </span>

          <input
            type="text"
            maxLength={10}
            className="inputbox col-sm-8 rounded fs-3 p-2"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleOnchange}
          />
        </div>

        <div>
          {value ? (
            <button
              className="col-10 mt-4 btn btn-success  p-2"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button className="col-10 mt-4 btn btn-secondary lg-btn p-2">
              Next
            </button>
          )}
        </div>

        <p className="mt-4">By continuing, you agree to our</p>
        <div className="mb-2">
          <span className="mx-3 text-success" href="#">
            Term of Service
          </span>
          <span className="text-success" href="#">
            Privacy of Policy
          </span>
        </div>
      </div>
    </>
  );
};
export default ContectNumber;
