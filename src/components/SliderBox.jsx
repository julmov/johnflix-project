import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBox = ({ movies }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="sliderBox">
      {/* First Slider */}
      <h2>Trending Now</h2>
      <div
        className="sliderContainer"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {showArrows && (
          <>
            <div className="arrow leftArrow" onClick={scrollLeft}>
              &lt;
            </div>
            <div className="arrow rightArrow" onClick={scrollRight}>
              &gt;
            </div>
          </>
        )}
        <Slider {...sliderSettings} ref={sliderRef}>
          {movies.slice(0, 20).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Slider>
        <h2>Top 10 Movies in Belgium Today</h2>
        <Slider {...sliderSettings}>
          {movies.slice(20, 40).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Slider>
        {/* Third Slider */}
        <h2>New Releases</h2>
        <Slider {...sliderSettings}>
          {movies.slice(40, 60).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Slider>
        <h2>Award-Winning International TV Shows</h2>
        <Slider {...sliderSettings}>
          {movies.slice(60, 80).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Slider>
        <h2>Popular on Netflix</h2>
        <Slider {...sliderSettings}>
          {movies.slice(80, 100).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                className="moviePosters"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Add other sliders here similarly */}
    </div>
  );
};

export default SliderBox;
