import React, { useState, useEffect } from "react";
import axios from "../axios";
import requsets from "../requestURLS";
import "./Bannar.css";
const base_url = "https://image.tmdb.org/t/p/original/";

const Bannar = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios.get(requsets.fetchNetflixOriginal).then((res, err) => {
      if (err) console.log(err);
      let movies = res.data.results;
      let bannarMovie = movies[Math.floor(Math.random() * (movies.length - 1))];
      setMovie(bannarMovie);
      console.log(bannarMovie);
    });
  }, []);
  return (
    <header
      className="bannar_header"
      style={{ backgroundImage: `url(${base_url}${movie?.backdrop_path})` }}
    >
      <div className="bannar_container">
        <h2 className="bannar_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div className="bannar_buttons">
          <button className="bannar_button">Play</button>
          <button className="bannar_button">My List</button>
        </div>
        <p className="bannar_description">{movie?.overview}</p>
        <div className="bannar_fadeBottom"></div>
      </div>
    </header>
  );
};

export default Bannar;
