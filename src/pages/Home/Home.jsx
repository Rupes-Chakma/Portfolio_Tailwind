import React from "react";
import Hero from "../../components/Hero/Hero";
import Reward from "../../components/Reward/Reward";
import Myskills from "../../components/Skills/Myskills";
import Contact from "../../components/Contacts/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Reward />
      <Myskills />
      <Contact />
    </div>
  );
};

export default Home;
