import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import cart from "../assects/carts.jpg";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ContectNumber from "./ContectNumber";
import MobileOtp from "./MobileOtp";

const Navbar = () => {
  const nevigate = useNavigate();

  const [data, setdata] = useState(false);

  const handledata = () => setdata(true);
  const handlecldata = () => setdata(false);

  const counter = useSelector((state) => state.counter);
  const [count, setcount] = useState(0);

  const handleSuccess = () => {
    swal("", "Login Successfully!", "success");
  };

  useEffect(() => {
    setcount(counter.reduce((acc, curr) => acc + curr.price, 0));
  }, [counter]);

  const [login, setLogin] = useState(false);

  const handleLoginSuccess = () => setLogin(true);
  const handleLogin = () => setLogin(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <div className="row">
              <div className="d-flex">
                <div className="blinkit text">
                  <h3
                    className="fw-bolder fs-1 text-warning"
                    onClick={() => nevigate("/")}
                  >
                    blink<span className="text-success">it</span>
                  </h3>
                </div>
                <div className=" mx-5 delivery">
                  <h6 className="fw-bolder mt-2">Delivery in 10 min</h6>

                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handledata}
                  >
                    Jaipur,Rajasthan, in india
                  </a>

                  <Modal
                    className="mt-5"
                    show={data}
                    onHide={handlecldata}
                    animation={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Change Location</Modal.Title>
                    </Modal.Header>
                    <div className="row">
                      <div className="col-6 mb-3 mt-1 d-flex">
                        <button type="button" className="btn btn-success">
                          Delete my location
                        </button>
                        <div className="col-3 text-center">
                          <p className="">OR</p>
                        </div>
                      </div>
                      <div className="col-1 p-2">
                        <input
                          type="text"
                          className="rounded"
                          placeholder="Type your city Society/Colony/Area"
                        />
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <form className="col-sm-9 d-flex mt-2" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onClick={() => nevigate("/searchitem")}
              />

              <Button
                variant=" btn  mx-4 fs-4"
                type="button"
                onClick={handleLoginSuccess}
              >
                Login
              </Button>

              <button
                type="button"
                className="button btn btn-success"
                onClick={() => nevigate("addcart")}
              >
                <div className="img d-flex mt-1">
                  <img
                    className="mt-1"
                    src={cart}
                    alt="cart"
                    width="20px"
                    height="20px"
                  />

                  {counter.length == 0 ? (
                    <p className=" mx-1 text-white fw-bolder">My Cart</p>
                  ) : (
                    <>
                      <span className=" mx-2 text-white fw-bolder">
                        {counter.length}
                        <span className="mx-1">item</span>
                      </span>
                    </>
                  )}
                </div>
                <p className="text-white fw-bolder">₹{count}</p>
              </button>
            </form>
          </div>
        </div>
        <Modal show={login} onHide={handleLogin}>
          {login ? <ContectNumber props={handleLoginSuccess} /> : <MobileOtp />}
        </Modal>
      </nav>
    </>
  );
};
export default Navbar;
