import React from "react";

const MobileOtp = () => {
    
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h4>Enter 4 Digit Code Sent to your device</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-5 mt-3 text-center">
            <input type="text" className="input p-3 rounded mx-1" />

            <input type="text" className="input p-3 rounded mx-1" />

            <input type="text" className="input p-3 rounded mx-1" />

            <input type="text" className="input p-3 rounded mx-1" />
          </div>
        </div>
        <div className="col-sm-12 text-center">
          <h5 className=" resend text-danger mb-3">Resend Code</h5>
        </div>

        <div className="col-sm-12 text-center">
          <button type="button" class=" col-2 btn btn-warning">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default MobileOtp;
