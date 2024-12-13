import React from "react";
import { AccordionItem } from "./Accordion";

const Items = () => {
  return (
    <div>
      <AccordionItem value="1" trigger="Accordion Item 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In
        necessitatibus illum omnis modi incidunt nihil consequuntur
        reprehenderit recusandae laboriosam ipsam.
      </AccordionItem>
      <AccordionItem value="2" trigger="Accordion Item 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
        ipsam animi, accusantium assumenda, perferendis deleniti eaque soluta
        dignissimos id blanditiis dolorum inventore ab fugit, dicta sit dolore
        eos! Quo.
      </AccordionItem>
      <AccordionItem value="3" trigger="Accordion Item 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        voluptatem.
      </AccordionItem>
      <AccordionItem value="4" trigger="Accordion Item 4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
        ipsam animi, accusantium assumenda, perferendis deleniti eaque soluta
        dignissimos id blanditiis dolorum inventore ab fugit, dicta sit dolore
        eos! Quo.
      </AccordionItem>
    </div>
  );
};

export default Items;
