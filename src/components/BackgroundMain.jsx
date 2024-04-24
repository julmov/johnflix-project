import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBox from "../components/TopBox";

const API_KEY = "4ac8afc15cc878b14c94def64db8f3fb";
const API_BASE_URL = "https://api.themoviedb.org/3";

function BackgroundMain({ children }) {
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchRandomBackdrop = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1, // Fetch the first page
          },
        });
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        const backdropPath = randomMovie.backdrop_path;
        const backdropUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;

        setMovieInfo({
          title: randomMovie.title,
          description: randomMovie.overview,
          imageUrl: backdropUrl,
        });
      } catch (error) {
        console.error("Error fetching random backdrop:", error);
      }
    };

    fetchRandomBackdrop();
  }, []);

  return (
    <div className="background-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${movieInfo.imageUrl})` }}
      >
        <TopBox title={movieInfo.title} description={movieInfo.description} />
      </div>
      {children}
    </div>
  );
}

export default BackgroundMain;
