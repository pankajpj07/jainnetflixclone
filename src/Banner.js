import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "./axios";
import requests from "./request";

import "./css/Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNeflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__contents-title">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
        </div>
        <div className="banner__contents-description">
          <p className="banner__description">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
        <div className="banner__buttons">
          <button className="banner__button banner__button-play">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="banner__button banner__button-info">
            <FontAwesomeIcon icon={faInfoCircle} /> More info
          </button>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
