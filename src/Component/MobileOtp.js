import React from "react";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";

const MobileOtp = (props) => {
  const { handleclose, login } = props;

  const handleSuccess = () => {
    swal("", "Login Successfully!", "success", { timer: 1000 });
  };

  const [otp, setOtp] = useState("");

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setSeconds(30);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 mb-5">
            <h4>Enter 4 Digit Code Sent to your Phone</h4>
          </div>

          <div className="col-12 mb-5 mt-3 text-center mx-5">
            <OtpInput
              type="number"
              value={otp}
              className="mx-3"
              inputStyle={{ width: "60px", padding: "15px", fontSize: "25" }}
              onChange={handleChange}
              numInputs={4}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 text-center">
            {seconds > 0 ? (
              <p>
                Time Remaining: 00:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Didn't recieve code?</p>
            )}
          </div>
          <div className="col-sm-6 text-center">
            <button
              disabled={seconds > 0}
              style={{
                color: seconds > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={resendOTP}
            >
              Resend OTP
            </button>
          </div>
        </div>

        <div className="col-sm-12 text-center">
          <button
            type="button"
            className={
              otp.length == 4
                ? "col-4 btn btn-success mb-2 fs-4"
                : "col-4 btn btn-secondary mb-2 fs-4"
            }
            onClick={() => {
              handleclose();
              login();
              handleSuccess();
            }}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
};
export default MobileOtp;
