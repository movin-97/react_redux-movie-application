import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncMoviesOrSeriesDetalis,
  getVideosData,
} from "../../features/Movies/MovieSlice";

const MovieDetalis = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const videoData = useSelector(getVideosData);

  // console.log(videoData);
  useEffect(() => {
    dispatch(asyncMoviesOrSeriesDetalis(imdbID));
    return () => {
      dispatch(asyncMoviesOrSeriesDetalis());
    };
  }, [dispatch, imdbID]);
  // console.log(imdbID);
  return (
    <div className="">
      {Object.keys(videoData) === 0 ? (
        <div className="">
          <h1 className="text-success">...Loading</h1>
        </div>
      ) : (
        <div className="row mt-3 mb-3">
          <div className="text-center mb-2">
            <h1 className="text-info">TITLE</h1>
            <h3>{videoData.Title}</h3>
          </div>
          <div className="col-6">
            <img
              src={videoData.Poster}
              alt={videoData.Title}
              className="mx-auto d-block rounded"
            />
          </div>
          <div className="col-6">
            <div className="">
              <h6 className="text-success">Actors</h6>
              <label htmlFor="award" className="form-label">
                {videoData.Actors}
              </label>
            </div>
            <div className="">
              <h6 className="text-success">Awards</h6>
              <label htmlFor="award" className="form-label">
                {videoData.Awards}
              </label>
            </div>
            <div className="row">
              <div className="col-6">
                <h6 className="text-success">Country</h6>
                <label htmlFor="award" className="form-label">
                  {videoData.Country}
                </label>
              </div>
              <div className="col-6">
                <h6 className="text-success">Writer</h6>
                <label htmlFor="award" className="form-label">
                  {videoData.Writer}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h6 className="text-success">Director</h6>
                <label htmlFor="award" className="form-label">
                  {videoData.Director}
                </label>
              </div>
              <div className="col-6">
                <h6 className="text-success">Language</h6>
                <label htmlFor="award" className="form-label">
                  {videoData.Language}
                </label>
              </div>
            </div>
            <div className="">
              <h6 className="text-success">Year</h6>
              <label htmlFor="award" className="form-label">
                {videoData.Year}
              </label>
            </div>
            <div className="">
              <h6 className="mt-3 text-danger">Plot</h6>
              <label htmlFor="award" className="form-label">
                {videoData.Plot}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetalis;
