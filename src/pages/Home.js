import React from "react";
import Cards from "../Component/Cards";
import GiftCard from "../Component/GiftCard";
import CategeryItems from "../Component/ProductsCategery";
import RollingPaper from "../Component/Rolling&Paper";
import WelcomeSlice from "../Component/WelcomeSlice";

const Home = () => {
  return (
    <>
      <WelcomeSlice />
      <GiftCard/>
      <CategeryItems />
      <Cards />
      <RollingPaper />
    </>
  );
};

export default Home;
