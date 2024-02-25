import React from "react";
import Hero from "../components/Hero";
import Map from "./Map/Map";
const Home = () => {
  return (
    <div class="flex flex-col">
      <div>
        <Hero />
        <Map />
      </div>
    </div>
  );
};

export default Home;
