import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/JohnFlix.css";
import "../css/NetflixStriming.css";
import BackgroundMain from "../components/BackgroundMain";
import MovieCard from "../components/MovieCard"; 
import FooterBox from "../components/FooterBox";


const API_KEY = "4ac8afc15cc878b14c94def64db8f3fb";
const API_BASE_URL = "https://api.themoviedb.org/3";

 const CustomNextArrow = (props) => {
   const { className, style, onClick } = props;
   return (
     <div
       className={`${className} custom-arrow next-arrow`}
       style={{ ...style,  backgroundColor: "transparent", // Remove background color
        width: "50px", // Increase arrow size
        height: "50px" }}
       onClick={onClick}
     />
   );
 };

 // Custom arrow component for the previous button
 const CustomPrevArrow = (props) => {
   const { className, style, onClick } = props;
   return (
     <div
       className={`${className} custom-arrow prev-arrow`}
       style={{ ...style,  backgroundColor: "transparent", // Remove background color
        width: "50px", // Increase arrow size
        height: "50px"}}
       onClick={onClick}
     />
   );
 };

// Prop type validation for CustomNextArrow component
CustomNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object, // PropTypes.object for style prop
  onClick: PropTypes.func,
};

// Prop type validation for CustomPrevArrow component
CustomPrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object, // PropTypes.object for style prop
  onClick: PropTypes.func,
};


function NetflixStriming() {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const totalPages = 10; // Fetch 10 pages of movie data
        let allMovies = [];
        let idCounter = 1; // Initialize a counter for IDs
        console.log(allMovies);

        for (let page = 1; page <= totalPages; page++) {
          const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page,
            },
          });
          const moviesData = response.data.results.map((movie) => ({
            ...movie,
            id: idCounter++, // Generate a unique ID for each movie
          }));
          allMovies = [...allMovies, ...moviesData];
        }

        setMovies(allMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []); // Run once on component mount

  // Custom arrow component for the next button
 
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const handleMouseEnter = (movieId) => {
    setHoveredMovie(movieId); // Set the hovered movie ID
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null); // Reset hovered movie when mouse leaves
  };

  const handleCardMouseEnter = () => {
    // When the mouse enters the card, keep the card visible
    if (hoveredMovie !== null) {
      setHoveredMovie(hoveredMovie);
    }
  };

  const handleCardMouseLeave = () => {
    // When the mouse leaves the card, hide the card
    setHoveredMovie(null);
  };

  return (
    <div>
      <BackgroundMain />
      {/* First Slider */}
      <div className="sliderBox">
        <h2 className="trending-now-header">Trending Now</h2>

        <Slider {...sliderSettings} className="sliders">
          {movies.slice(0, 20).map((movie) => (
            <div
              key={movie.id}
              className="movieItem"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {hoveredMovie === movie.id && (
                <div
                  className="movieCardContainer"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <MovieCard movie={movie} />
                </div>
              )}
            </div>
          ))}
        </Slider>
        {/* Second Slider */}
        <h2>Top 10 Movies in Belgium Today</h2>
        <Slider {...sliderSettings} className="sliders">
          {movies.slice(20, 40).map((movie) => (
            <div
              key={movie.id}
              className="movieItem"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {hoveredMovie === movie.id && (
                <div
                  className="movieCardContainer"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <MovieCard movie={movie} />
                </div>
              )}
            </div>
          ))}
        </Slider>
        {/* Third Slider */}
        <h2>New Releases</h2>
        <Slider {...sliderSettings} className="sliders">
          {movies.slice(40, 60).map((movie) => (
            <div
              key={movie.id}
              className="movieItem"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {hoveredMovie === movie.id && (
                <div
                  className="movieCardContainer"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <MovieCard movie={movie} />
                </div>
              )}
            </div>
          ))}
        </Slider>
        <h2>Award-Winning International TV Shows</h2>
        <Slider {...sliderSettings} className="sliders">
          {movies.slice(60, 80).map((movie) => (
            <div
              key={movie.id}
              className="movieItem"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {hoveredMovie === movie.id && (
                <div
                  className="movieCardContainer"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <MovieCard movie={movie} />
                </div>
              )}
            </div>
          ))}
        </Slider>
        <h2>Popular on Netflix</h2>
        <Slider {...sliderSettings} className="sliders">
          {movies.slice(80, 100).map((movie) => (
            <div
              key={movie.id}
              className="movieItem"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {hoveredMovie === movie.id && (
                <div
                  className="movieCardContainer"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <MovieCard movie={movie} />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="footer-box">
        <FooterBox />
      </div>
    </div>
  );

  
}

export default NetflixStriming;
