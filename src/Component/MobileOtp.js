import React from "react";
import swal from "sweetalert";
import { useState } from "react";
import OtpInput from "react18-input-otp";

const MobileOtp = (props) => {
  const { handleclose, login } = props;

  const handleSuccess = () => {
    swal("", "Login Successfully!", "success");
  };

  const [otp, setOtp] = useState("");
 


 

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  return (
    <>
      <div className="row">
        <div className="col text-center mt-5 mb-5">
          <h4>Enter 4 Digit Code Sent to your Phone</h4>
        </div>

        <div className="col-12 mb-5 mt-3 text-center mx-5">
          <OtpInput
            value={otp}
            className="mx-3"
            inputStyle={{width:'60px',padding:'15px',fontSize:'25'}}
            onChange={handleChange}
            numInputs={4}
            
          />
          
        </div>
      </div>

      <div className="col-sm-12 text-center">
        <h5 className=" resend text-danger mb-3">Resend Code</h5>
      </div>
 <div className="col-sm-12 text-center">
 {otp.length==4 ? ( <button
          type="button"
          class="col-3 btn btn-success mb-2 fs-4"
          onClick={() => {
            handleclose();
            login();
            handleSuccess();
          }}
        >
          Submit
        </button>):( <button
          type="button"
          class="col-3 btn btn-secondary mb-2 fs-4"
          onClick={() => {
            handleclose();
            login();
            handleSuccess();
          }}
        >
          Submit
        </button>)}
        
      </div>
   
        
     
      
    </>
  );
};
export default MobileOtp;
