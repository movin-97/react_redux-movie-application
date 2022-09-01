import React, { useEffect } from "react";
import MovieListing from "./../MovieListing/MovieListing";
import { asyncMovies, asyncSeries } from "../../features/Movies/MovieSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const showMovie = "movie";
  const showEpisode = "series";
  useEffect(() => {
    dispatch(asyncMovies(showMovie));
    dispatch(asyncSeries(showEpisode));
  }, [dispatch]);

  // useEffect(()=>{
  //   if (localStorage.setItem === "auth") {
  //     return navigate('/home')
  //   }else{
  //     return navigate('/')
  //   }
  // })
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
