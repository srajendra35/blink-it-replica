import React from "react";
import Cards from "../Component/Cards";
import CardsOrder from "../Component/Cardsoders";
import CategeryItems from "../Component/ProductsCategery";
import RollingPaper from "../Component/Rolling&Paper";
import WelcomeSlice from "../Component/WelcomeSlice";

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
