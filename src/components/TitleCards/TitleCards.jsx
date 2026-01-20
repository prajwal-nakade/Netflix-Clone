import React, { useEffect, useRef } from "react";
import Cards_data from "../../assets/cards/Cards_data.js";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="mt-4 mb-6">
      <h2 className="mb-3 text-lg font-semibold text-white items-start">
        {title ? title : "Popular on Netflix"}
      </h2>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide" ref={cardsRef}>
        {Cards_data.map((card, index) => (
          <div key={index} className="relative flex-shrink-0 w-[180px]">
            <img
              src={card.image}
              alt={card.name}
              className="rounded cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <p className="absolute bottom-1 right-1 text-xs bg-black/70 px-1 rounded">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
