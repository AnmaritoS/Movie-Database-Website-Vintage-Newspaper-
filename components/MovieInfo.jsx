import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "axios";

function MovieInfo({ movie }) {
  const router = useRouter();
  const { movieId, searchedMovie } = router.query;
  const [trailerId, setTrailerId] = useState(null);

  async function getTrailerId() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=166b5d91c302695e47098755a46149d8`
    );
    const videos = response.data.results;
    console.log(videos);
    const trailer = videos.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailerVideoId = trailer?.key;
    return trailerVideoId;
  }

  useEffect(() => {
    async function fetchData() {
      const id = await getTrailerId(movieId);
      setTrailerId(id);
    }
    fetchData();
  }, []);

  const options = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="container px-5 py-12 mx-auto">
      <BsArrowLeft
        className="text-4xl ml-2 cursor-pointer hover:scale-[1.1] transition duration-300 mb-4"
        onClick={() => router.push(`/${searchedMovie}`)}
      />
      <div
        className="w-full px-8 py-8 border-2 rounded-2xl shadow-2xl border-black border-opacity-60 flex items-center space-x-12 bg-black/50"
        key={movie.id}
      >
        <div className="space-y-4">
          <img
            className=""
            src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          />
          <div className="">
            <h2 className="text-lg sm:text-xl text-white font-semibold title-font">
              {movie.original_title}
            </h2>
            <p className="leading-relaxed text-md text-gray-600">
              {`Release date : ${movie.release_date}`}
            </p>
          </div>
          <p className="leading-relaxed text-md text-white font-semibold">
            {movie.overview}
          </p>
        </div>
        <YouTube videoId={trailerId} opts={options} />
      </div>
    </div>
  );
}

export default MovieInfo;
