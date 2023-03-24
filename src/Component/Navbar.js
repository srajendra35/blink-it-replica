import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import cart from "../assects/carts.jpg";
import back from "../assects/back1.png";
import { useNavigate } from "react-router-dom";
import ContectNumber from "./LoginVerifiction";
import MobileOtp from "./MobileOtp";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddCart from "../pages/AddCart";
import { API } from "../api";

const Navbar = () => {
  const nevigate = useNavigate();

  const counter = useSelector((state) => state.counter); //cart

  const [value, setvalue] = useState(false); //Location
  const handledata = () => setvalue(true);
  const handlecldata = () => setvalue(false);

  const cartTotal = counter
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const discount = (cartTotal / 100) * 15;
  const totalPrice = cartTotal - discount + 2;

  const [login, setLogin] = useState(true); //ContectNumber
  const handleLoginSuccess = () => {
    setLogin(false);
  };
  const Loginstate = () => {
    setLogin(true);
  };

  const [show, setShow] = useState(false); // modal
  const handleShow = () => setShow(true);
  const handleclose = () => setShow(false);

  const [canvas, setcanvas] = useState(false);
  const CanvasModalShow = () => setcanvas(true);
  const CanvasModalhide = () => setcanvas(false);

 

  API.getProducts().then((res)=>{
    const data = res.id;
    console.log(data);
  })

  
 

  return (
    <>

    
      <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
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
                    show={value}
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
                variant=" btn  mx-4 fs-5"
                type="button"
                onClick={handleShow}
              >
                Login
              </Button>

              <button
                type="button"
                className="button btn btn-success"
                onClick={CanvasModalShow}
              >
                <div className="img d-flex mt-1">
                  <img
                    className="mt-1 mx-2"
                    src={cart}
                    alt="cart"
                    width="20px"
                    height="20px"
                  />

                  {counter.length == 0 ? (
                    <p className="text-white fw-bolder">My Cart</p>
                  ) : (
                    <>
                      <span className="text-white fw-bolder">
                        {counter.length}
                        <span className="mx-1">item</span>
                      </span>
                    </>
                  )}
                </div>
                <p className="text-white fw-bolder">₹{totalPrice}</p>
              </button>
            </form>
          </div>
        </div>

        <Modal show={show} onHide={handleclose}>
          <div className="row">
            <div className="back col-1 mt-2 mx-2 d-flex" onClick={Loginstate}>
              {login ? (
                <></>
              ) : (
                <>
                  <img src={back} width="25rem" alt="" />
                  <span className="text-success mx-1">Back</span>
                </>
              )}
            </div>
          </div>

          <div className=" text-center justify-content-center container center">
            <div className="col-sm-12">
              <div className="fw-bolder text-center">
                <h4 className="mt-3 mb-3">Phone Number Varification</h4>
              </div>
            </div>
          </div>

          {login ? (
            <ContectNumber handleNext={handleLoginSuccess} />
          ) : (
            <MobileOtp handleclose={handleclose} login={Loginstate} />
          )}
        </Modal>
      </nav>

      <Offcanvas show={canvas} placement="end" onHide={CanvasModalhide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddCart handlecanvasclose={CanvasModalhide} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Navbar;
