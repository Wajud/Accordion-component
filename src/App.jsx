import { useState } from "react";
import "./App.css";
import Accordion from "./components/firstAccordion/Accordion";
import Items from "./components/firstAccordion/Items";
import CarouselGames from "./components/slider/Carousel";

function App() {
  return (
    <>
      <h1 className="text-red-500 font-semibold">Only one future presido</h1>
      <Accordion className="max-w-lg text-left">
        <Items />
      </Accordion>
      <CarouselGames />
    </>
  );
}

export default App;
