import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams, useNavigate } from "react-router-dom";


const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="items-start w-full">
          <img
            src={back_arrow_icon}
            alt=""
            className="absolute cursor-pointer w-10 "
            onClick={()=>{navigate(-2)}}
          />
        </div>
        <div className="h-100">
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}`}
            frameborder="0"
            title="trailer"
            allowFullScreen
            className="rounded-md w-300 h-150"
          ></iframe>
          <div className="w-full flex justify-between ">
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
