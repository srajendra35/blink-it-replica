import React, { useState } from "react";
import swal from "sweetalert";

const MobileOtp = (props) => {
  const { handleclose, login } = props;

  const handleSuccess = () => {
    swal("", "Login Successfully!", "success");
  };

  const [input, setInput] = useState(false);
  const handleInput = (e) => {
    const data = e.target.value;
    if (data.length == 1) {
      setInput(true);
    } else {
      setInput(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center mt-5 mb-5">
          <h4>Enter 4 Digit Code Sent to your Phone</h4>
        </div>

        <div className="col-12 mb-5 mt-3 text-center">
          <input
            type="text"
            className="input  rounded mx-1 fs-1 text-center"
            maxLength={1}
          />

          <input
            type="text"
            className="input  rounded mx-1 fs-1 text-center"
            maxLength={1}
          />

          <input
            type="text"
            className="input  rounded mx-1 fs-1 text-center"
            maxLength={1}
          />

          <input
            type="text"
            className="input  rounded mx-1 fs-1 text-center"
            onChange={handleInput}
            maxLength={1}
          />
        </div>
      </div>

      <div className="col-sm-12 text-center">
        <h5 className=" resend text-danger mb-3">Resend Code</h5>
      </div>

      <div className="col-sm-12 text-center">
        {}
        {input ? (
          <button
            type="button"
            class="col-3 btn btn-warning mb-2 fs-4"
            onClick={() => {
              handleclose();
              login();
              handleSuccess();
            }}
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            class="col-3 btn bg-dark-subtle mb-2 fs-4 "
            onClick={() => {
              handleclose();
              login();
              handleSuccess();
            }}
          >
            Submit
          </button>
        )}
      </div>
    </>
  );
};
export default MobileOtp;
