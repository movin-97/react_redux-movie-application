import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  asyncSeries,
  asyncMovies,
} from "../../features/Movies/MovieSlice";
import {useAuthState} from "react-firebase-hooks/auth"
import auth from "../../firebase";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const[user,loading,error] = useAuthState(auth)
  // const userValue = useSelector(addUser);
  // const data = userValue.payload.userData;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSeries(term));
    dispatch(asyncMovies(term));
    setTerm("");
  };
  return (
    <div
      className="d-flex justify-content-between align-items-center bg-light shadow-lg rounded"
      style={{
        padding: "0 30px",
        height: "60px",
      }}
    >
      <Link to={"/"} className="navbar-brand fs-4 col-2">
        Movies
      </Link>
      <form className="col-5" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-describedby="button-addon2"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>

      <div className="">
        <div className="dropdown">
          <img
            style={{
              cursor: "pointer",
            }}
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user"
            width={40}
            height={40}
            className="dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="">
              <div className="card-body">
                <div className="dropdown-item">
                  <label htmlFor="">Name</label>
                  <h5 className="card-title"> {}</h5>
                </div>
                <div className="mt-2 dropdown-item">
                  <label htmlFor="">Password</label>
                  <h6 className="card-subtitle mb-2 text-muted ">{}</h6>
                </div>
              </div>
            </div>
            <li>
              <Link className="dropdown-item" to={"/"}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
