import React from "react";
import { useState } from "react";
import mobile from "../assects/mobile.png";

const ContectNumber = (props) => {
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
      <div className="container">
        <div className=" text-center justify-content-center container center">
          <div className="col-sm-12">
            <div className="fw-bolder text-center">
              <h2 className="mt-3 mb-3">Phone Number Varification</h2>
            </div>
          </div>

          <div className="content text-center ">
            <div className="enter mb-5  fs-4">
              <h4 className="mt-5 mb-4">
                Enter you Phone number to Login/Sign up
              </h4>
            </div>
            <div className="input-group justify-content-center mt-3">
              <span className="input-group-text">
                <img src={mobile} width="15rem" alt="" />
                +91-
              </span>

              <input
                type="text"
                className="col-sm-8 rounded p-2"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleOnchange}
              />
            </div>

            <div>
              {value ? (
                <button
                  className="col-8 mt-4 btn btn-success lg-btn p-2"
                  onClick={props.handleLoginSuccess}
                >
                  Next
                </button>
              ) : (
                <button className="col-8 mt-4 btn btn-secondary lg-btn p-2">
                  Next
                </button>
              )}
            </div>
            <div className="mb-5">
              <p className="mt-5">By continuing, you agree to our</p>
              <div className="mb-2">
                <span className="mx-3 text-success" href="#">
                  Term of Service
                </span>
                <span className="text-success mb-3" href="#">
                  Privacy of Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContectNumber;
