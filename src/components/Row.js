import React, { useState, useEffect } from "react";
import axios from "../axios";
import RowCard from "./RowCard";
import "./row.css";
import TrailerVideo from "./TrailerVideo";
import moveTrailer from "movie-trailer";
const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState(null);
  useEffect(() => {
    axios.get(`${url}`).then((res, err) => {
      if (err) console.log(err);
      console.log(res);
      setMovies([...res.data.results]);
    });
  }, [url]);

  let openTrailer = (movie) => {
    console.log(movie.name);
    if (trailerURL) return setTrailerURL(null);
    moveTrailer(movie?.name || "")
      .then((url) => {
        let urlParams = new URLSearchParams(url);
        console.log(url);
        setTrailerURL(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="cardContainer">
        {movies.map((movie, index) => (
          <RowCard movie={movie} key={index} click={openTrailer} />
        ))}
      </div>
      {/* {trailerURL && <TrailerVideo trailerURL={trailerURL} />} */}
    </div>
  );
};

export default Row;
