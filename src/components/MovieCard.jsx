import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faThumbsUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "../css/MovieCard.css"; // Import the CSS file

const MovieCard = ({ movie }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM4YWZjMTVjYzg3OGIxNGM5NGRlZjY0ZGI4ZjNmYiIsInN1YiI6IjY2MjI1MDcwOTYwY2RlMDE0YWE2NGRiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XAnieB3qWxUx9QCD71e4chOMUTUSsNU9WiDdaHYH94w",
          },
        };
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          options
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const { backdrop_path, title, release_date, vote_average, genre_ids } =
    movie || {};

  // Map genre IDs to genre names
  const genreNames = genre_ids.map(
    (genreId) => genres.find((genre) => genre.id === genreId)?.name
  );

  return (
    <div className="movieCard">
      {/* Movie poster image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
        className="movieCardPoster"
      />

      {/* Movie card info */}
      <div className="movieCardInfo">
        <div className="iconRow">
          <FontAwesomeIcon icon={faPlay} className="playIcon2" />
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <FontAwesomeIcon icon={faChevronDown} className="chevronIcon" />
        </div>
        {/* <div className="movieCardTitle">{title}</div> */}
        <div className="movieCardContent">
          {/* Other movie card content */}
          <div className="cinemaInfoRow">
            <p className="rating">{Math.round(vote_average)}</p>
            <p>{release_date}</p>
            <p className="hd">HD</p>
          </div>
          <p className="genre">{genreNames.join(" • ")}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
