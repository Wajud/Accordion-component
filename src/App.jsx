import { useState } from "react";
import "./App.css";
import Accordion from "./components/firstAccordion/Accordion";
import Items from "./components/firstAccordion/Items";
import CarouselGames from "./components/slider/Carousel";
import Carousel from "./components/testimonials/Carousel";

import lady1 from "./assets/lady1.jpg";
import lady2 from "./assets/lady2.jpg";
import ladylaptop from "./assets/ladylaptop.jpg";
import ladytea from "./assets/ladytea.jpg";
import profile8 from "./assets/profile-8.jpg";
import profile11 from "./assets/profile-11.jpg";

const slides = [lady1, lady2, ladylaptop, ladytea];

function App() {
  return (
    <>
      <h1 className="text-red-500 font-semibold">Only one future presido</h1>
      <Accordion className="max-w-lg text-left">
        <Items />
      </Accordion>
      <Carousel>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Carousel>
      <CarouselGames />
    </>
  );
}

export default App;
