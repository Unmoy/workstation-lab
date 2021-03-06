import React from "react";
import BestSeller from "../BestSeller/BestSeller";
import Footer from "../Footer/Footer";
import HomeMain from "../HomeMain/HomeMain";
import Inspiration from "../Inspiration/Inspiration";
import Newsletter from "../Newsletter/Newsletter";
import Onsale from "../Onsale/Onsale";
import Trends from "../Trends/Trends";

const Home = () => {
  return (
    <>
      <HomeMain></HomeMain>
      <Onsale></Onsale>
      <Trends></Trends>
      <BestSeller></BestSeller>
      {/* <Inspiration></Inspiration>
      <Newsletter></Newsletter>
      <Footer></Footer> */}
    </>
  );
};

export default Home;
