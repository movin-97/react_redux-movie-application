import React from "react";
import { useSelector } from "react-redux";
import { getMoviesData, getSeriesData } from "../../features/Movies/MovieSlice";
import MovieCard from "./../MovieCard/MovieCard";

const MovieListing = () => {
  const movie = useSelector(getMoviesData);
  const series = useSelector(getSeriesData);
  console.log(movie);
  let ListingMovies =
    movie.Response === "True" ? (
      movie.Search.map((movie, i) => {
        return <MovieCard key={i} value={movie} />;
      })
    ) : (
        <h1 className="text-danger">Please Check You'r Internet Conection</h1>
    );
  
    let ListingSeries =
    series.Response === "True" ? (
      series.Search.map((series, i) => {
        return <MovieCard key={i} value={series} />;
      })
    ) : (
        <h1 className="text-danger">Please Check You'r Internet Conection</h1>
    );
    
  return (
    <div className="mb-3">
      <div className="">
        <h2 className="text-center mt-2">MOVIES LIST</h2>
        <div className="row">{ListingMovies}</div>
      </div>
      <div className="mt-5">
        <h2 className="text-center mt-2">SERIES LIST</h2>
        <div className="row">{ListingSeries}</div>
      </div>
    </div>
  );
};

export default MovieListing;
