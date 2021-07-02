import React, { useState, useEffect } from "react";
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
          Math.trunc(Math.random() * request.data.results.length + 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        {/* play buttons (Play and More info)*/}
        <div className="banner_buttons">
          <button className="banner_button play_button">Play</button>
          <button className="banner_button">More info</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
    // <header
    //   className="banner"
    //   style={{
    //     backgroundSize: "cover",
    //     backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    //     backdropPosition: "center center",
    //   }}
    // >
    //   {/* Background image */}
    //   <div className="banner_contents">
    //     {/* title */}
    //     <h1 className="banner_title">
    //       {movie?.title || movie?.name || movie?.original_name}
    //     </h1>

    //     {/* 2 buttons */}
    //     <div className="banner_buttons">
    //       <button className="banner_button">Play</button>
    //       <button className="banner_button">My List </button>
    //     </div>

    //     {/* description */}
    //     <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
    //   </div>
    //   <div className="banner_fadeBottom" />
    // </header>
  );
}

export default Banner;
