import React from "react";
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import {movie} from "../Constant/MovieData"
const MovieList = () => {
  return (
    <div className="movieList">
          {" "}
      {movie.map((movie) =>(
         <MovieCard movie={movie} key={movie.id} />
       )) }
    </div>
  )
}

export default MovieList