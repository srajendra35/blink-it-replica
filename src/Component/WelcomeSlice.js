import React from "react";
 
import Carousel from "react-bootstrap/Carousel";
import Veg from '../assects/fruit.jpg'
import Page from '../assects/page.webp'

const  WelcomeSlice=()=> {
  return (
    <>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 rounded"
              src={Page}
              width="400rem"
              height="400rem"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="vegatable d-block "
              src={Veg}
              height="400rem"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      
     
    </>
  );
}
export default WelcomeSlice;
