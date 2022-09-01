import LoginForm from "../components/Auth/Login/LoginForm";
import RegisterForm from "../components/Auth/Login/RegisterForm";
import Home from "../components/Home/Home";
import MovieDetalis from "../components/MovieDetalis/MovieDetalis";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import UserDatelis from "../components/Users/UserDatelis";

const routers = [
  {
    path: "*",
    component: <PageNotFound />,
  },
  {
    path: "/",
    component: <LoginForm />,
  },
  {
    path: "/login",
    component: <LoginForm />,
  },
  {
    path: "/register",
    component: <RegisterForm />,
  },
  {
    path: "/users",
    component: <UserDatelis />,
  },
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/movie/:imdbID",
    component: <MovieDetalis />,
  },
];

export default routers;
