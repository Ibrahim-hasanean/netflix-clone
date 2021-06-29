import React from "react";
import "./RowCard.css";
const base_url = "https://image.tmdb.org/t/p/original/";
// `${base_url}${movie.poster_path}`
const RowCard = ({ movie, click }) => {
  return (
    <div
      onClick={() => click(movie)}
      className="rowCard"
      style={{
        backgroundImage: `url(${base_url}${movie.poster_path})`,
      }}
    ></div>
  );
};

export default RowCard;
