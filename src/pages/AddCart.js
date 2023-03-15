import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { RemoveCart } from "../Redux/CreateSilce";
import Modal from "react-bootstrap/Modal";
import greter from "../assects/greter.png";
import swal from "sweetalert";
import MenCart from "../assects/mencart.webp";

const AddCart = () => {
  const carts = useSelector((state) => state.counter);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [count, setcount] = useState(0);

  const handlesetdata = () => {
    swal("", "Login Successfully!", "success");
  };

  useEffect(() => {
    setcount(carts.reduce((acc, curr) => acc + curr.price, 0));
  }, [carts]);

  const dispatch = useDispatch();

  const [inputvalue, setinputvalue] = useState(false);

  const handlesuccess = (e) => {
    const item = e.target.value;
    if (item.length == 10) {
      setinputvalue(true);
    } else {
      setinputvalue(false);
    }
  };

  return (
    <>
      {carts.length > 0 ? (
        <>
          <div className="container">
            <div className="row">
              {carts.map((product) => (
                <div className="col-sm-2 my-1 text-center border mx-1 rounded">
                  <div className="three w-100">
                    <img src={product.image} width="80px" />
                  </div>
                  <div className="h-50">
                    <p className="">{product.title}</p>
                    <p>₹{product.price}</p>
                    <p>wet:{product.weight}ml</p>
                  </div>
                  <div className="w-100">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => dispatch(RemoveCart(product.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col">
                <p>MRP</p>
              </div>
              <div className="col">
                <p>₹{count}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Product discount</p>
              </div>
              <div className="col">
                <p className="text-success">-₹5</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Handling Charge</p>
              </div>
              <div className="col">
                <p>₹2</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Delivery Charge</p>
              </div>
              <div className="col">
                <p>
                  <del>₹15</del>{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="fw-bolder">Grand total</p>
              </div>
              <div className="col">
                <p className="fw-bolder">₹---</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Coupons are only applicable on the Blinkit app</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mt-5 bg-success rounded d-flex">
                <div className="col mb-3">
                  <span className="fw-bolder text-white">{carts.length}</span>
                  <span className="fs-5 mx-2 fw-bolder text-white">item</span>
                  <span className="fw-bolder fs-2 text-white">.</span>
                  <span className="fs-5 fw-bolder mx-2 text-white">
                    ₹{count}
                  </span>
                </div>
                <div className="col-3 mt-3" onClick={handleShow}>
                  <span className="fw-bolder text-white">Proceed</span>
                  <span className="mx-2">
                    <img src={greter} width="18rem" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <div className=" text-center justify-content-center container center">
                <Modal.Header closeButton>
                  <div className="col-sm-12">
                    <Modal.Title className="fw-bolder texx-center" id="phone">
                      Phone Varification
                    </Modal.Title>
                  </div>
                </Modal.Header>

                <div className="content text-center mt-5">
                  <Modal.Body className="mt-3 mb-5 fst-italic fs-4">
                    Enter you Phone number to Login/Sign up
                  </Modal.Body>
                  <div className="input-group justify-content-center mt-3 ">
                    <span className="input-group-text" id="basic-addon3">
                      +91
                    </span>
                    <input
                      className="col-sm-8"
                      type="text"
                      onChange={handlesuccess}
                    />
                  </div>
                  <div>
                    {inputvalue ? (
                      <button
                        className="col-6 mt-4 btn btn-success  lg-btn"
                        onClick={handlesetdata}
                      >
                        Next
                      </button>
                    ) : (
                      <button className="col-6 mt-4 btn btn-secondary lg-btn">
                        Next
                      </button>
                    )}
                  </div>
                  <div className="mb-5">
                    <p className="mt-5">By continuing, you agree to our</p>
                    <span className="mx-3 text-success" href="#">
                      Term of Service
                    </span>{" "}
                    <span className="text-success mb-3" href="#">
                      Privacy of Policy
                    </span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </>
      ) : (
        <>
          <div className="container text-center mt-5">
            <img src={MenCart} width="30%" alt="" />
            <h3 className=" fw-bolder">
              You don't have any items in your cart
            </h3>
            <NavLink to={"/"}>
              <button type="button" className="btn btn-info mt-5 fs-2">
                Start Shopping
              </button>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
};
export default AddCart;
