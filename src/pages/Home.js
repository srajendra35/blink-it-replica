import React from "react";
import Cards from "./Cards";
import CardsOrder from "./Cardsoders";
import CategeryItems from "./ProductsCategery";
import RollingPaper from "./Rolling&Paper";
import WelcomeSlice from "../Component/Pages/WelcomeSlice";
 
 
 

const Home = () => {
  return (
    <>
  
      <WelcomeSlice />
      <CardsOrder />
      <CategeryItems />
      <Cards />
      <RollingPaper />
    
     
    </>
  );
};

export default Home;
