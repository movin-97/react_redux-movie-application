import React from "react";
import './MovieCard.css'
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="col-3 text-dark mt-4 mb-4">
      <Link to={`/movie/${props.value.imdbID}`} style={{ textDecoration: 'none' }}>
      <div className="card hover">
        <img
          src={props.value.Poster}
          className="card-img-top"
          alt={props.value.Title}
          width={150}
          height={250}
        />
        <div className="card-body">
          <h5 className="card-title under">{props.value.Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted ">{props.value.Year}</h6>
          <p className="card-text">{props.value.Type}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
