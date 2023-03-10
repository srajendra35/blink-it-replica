import React from "react";
import {Outlet, useNavigate } from "react-router-dom";
 

const CategoryDetail=()=> { 
  
  const nevigator = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav justify-content-center">
              <nav className=" navbar navbar-expand-lg bg-body-tertiary">
                <div
                  className="navbar collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav main3">
                    <li
                      className="pointer mx-3"
                      onClick={() => nevigator("/fruits")}
                    >
                      Vegetables & Fruits
                    </li>
                    <li
                      className="nav-item pointer mx-3"
                      onClick={() => nevigator("/dairy")}
                    >
                      
                      Dairy & Breafast
                    </li>
                    <li
                      className="nav-item pointer mx-3"
                      onClick={() => nevigator("/munchies")}
                    >
                      Munchies
                    </li>
                    <li
                      className="nav-item pointer mx-3"
                      onClick={() => nevigator("/cold")}
                    >
                      Cold Drinks & Juice
                    </li>
                    <li
                      className="nav-item pointer mx-3"
                      onClick={() => nevigator("/instant")}
                    >
                      Instant & Frezen Food
                    </li>
                    <li
                      className="nav-item pointer mx-3"
                      onClick={() => nevigator("/tea")}
                    >
                      Tea,Coffee & Health Drinks
                    </li>
                    <li
                      className="nav-item pointer mx-3"
                      onClick={() => nevigator("bakery")}
                    >
                      Bakery & Biscuits
                    </li>
                    <li className="nav-item dropdown more">
                      <a
                        className="nav-link dropdown-toggle mx-4  "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Sweet Tooth
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Att,Rice & Dal
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dry,,fruits masala
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Pan Corner
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Baby Care
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Home & Office
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Pet Care
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Beauty & Cosmetics
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
export default CategoryDetail;