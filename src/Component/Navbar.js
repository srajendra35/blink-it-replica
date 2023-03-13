import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import cart from "../assects/carts.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nevigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setdata] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handledata = () => setdata(true);
  const handlecldata = () => setdata(false);

  const counter = useSelector((state) => state.counter);

  const [count, setcount] = useState(0);

  useEffect(() => {
    setcount(counter.reduce((acc, curr) => acc + curr.price, 0));
  }, [counter]);

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
                    <div className="row col">
                      <div className="col-6 mx-2 mb-3 mt-1">
                        <button type="button" class="btn btn-success">
                          {" "}
                          Delete my location
                        </button>
                        <span>--</span>
                        <span className=" col-4 border border-dark rounded-pill mx-2">
                          OR
                        </span>
                        <span>--</span>
                      </div>
                      <div className="col-1 p-2">
                        <input
                          type="text"
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
                onClick={handleShow}
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
                  <span className=" mx-2 text-white fw-bolder">
                    {counter.length}My Cart
                  </span>
                </div>
                <span className="text-white fw-bolder">₹{count}</span>
              </button>
            </form>
          </div>
        </div>

        <Modal  show={show} onHide={handleClose}>
          <div className=" text-center justify-content-center container center">
            <Modal.Header closeButton>
              <div className="col-sm-12">
                <Modal.Title className="fw-bolder texx-center">
                  Phone Varification
                </Modal.Title>
              </div>
            </Modal.Header>

            <div className="content text-center mt-5">
              <Modal.Body className="enter  mb-5  fs-4">
                Enter you Phone number to Login/Sign up
              </Modal.Body>
              <div className="input-group justify-content-center mt-3 ">
             
  <span class="input-group-text" id="basic-addon1">91+</span>
  <input type="text" className="col-sm-8 rounded"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>
              
              <div>
                <button
                  className="col-9 mt-4 btn btn-success lg-btn"
                  onClick={() => nevigate("/")}
                >
                  Next
                </button>
              </div>
              <p className="mt-3">By continuing, you agree to our</p>
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
        </Modal>
      </nav>
    </>
  );
};
export default Navbar;
