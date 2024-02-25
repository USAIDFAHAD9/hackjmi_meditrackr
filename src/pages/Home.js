import React from "react";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Map from "./Map/Map";
const Home = () => {
  return (
    <div class="flex flex-col">
      <div>
        <Hero />
        <Map />
        <Hero2 />
      </div>
    </div>
  );
};

export default Home;
