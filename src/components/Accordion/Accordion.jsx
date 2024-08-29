import AccordionItem from "./AccordionItem/AccordionItem";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="mt-[1rem] w-11/12">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
