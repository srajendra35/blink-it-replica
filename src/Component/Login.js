// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// import { NavLink } from "react-router-dom";

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <div className=" text-center justify-content-center container center">
//           <Modal.Header closeButton>
//             <div className="col-sm-12">
//               <Modal.Title className="fw-bolder texx-center">
//                 Phone Varification
//               </Modal.Title>
//             </div>
//           </Modal.Header>

//           <div className="content text-center mt-5">
//             <Modal.Body className="mt-3 mb-5 fst-italic fs-4">
//               Enter you Phone number to Login/Sign up
//             </Modal.Body>
//             <div className="input-group justify-content-center mt-3 ">
//               <span className="input-group-text" id="basic-addon3">
//                 +91
//               </span>
//               <input className="col-sm-8" type="text" />
//             </div>
//             <div>
//               <NavLink to={"/"}>
//                 <button className="col-6 mt-4 btn btn-success lg-btn">
//                   Next
//                 </button>
//               </NavLink>
//             </div>
//             <p className="mt-5">By continuing, you agree to our</p>
//             <a className="mx-3 text-success" href="#">
//               Term of Service
//             </a>{" "}
//             <a className="text-success mb-3" href="#">
//               Privacy of Policy
//             </a>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };
// export default Login;