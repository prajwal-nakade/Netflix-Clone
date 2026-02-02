import React, { useEffect, useRef, useState } from "react";
import Cards_data from "../../assets/cards/Cards_data.js";
import {Link} from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef(null);

  const [nowPlayingMovieData, setnowPlayingMovieData] = useState([]);
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDlhODgwNmI5YTVjNzIwMGY4MzIzMGJlZmFmYTA4MyIsIm5iZiI6MTc1MjAzNjk5MS43NjcsInN1YiI6IjY4NmRmNjdmM2RhZWU2MzFiNTlhNGE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT2LnDZNIUeu5AVNxO6PYYQA0CEfce_4bLeF-0lgnu8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setnowPlayingMovieData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);


  return (
    <div className="mt-4 mb-6">
      <h2 className="mb-3 text-lg font-semibold text-white items-start">
        {title ? title : "Popular on Netflix"}
      </h2>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide" ref={cardsRef}>
        {nowPlayingMovieData.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index} className="relative shrink-0 w-45">
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.name}
              className="rounded cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <p className="absolute bottom-1 right-1 text-xs bg-black/70 px-1 rounded">
              {card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
