import React from "react";
import Hero from "../../components/Hero/Hero";
import Reward from "../../components/Reward/Reward";
import Myskills from "../../components/Skills/Myskills";
import Contact from "../../components/Contacts/Contact";
import Reviews from "../../components/Review/Reviews";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Reward />
      <Myskills />
      <Slider />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
