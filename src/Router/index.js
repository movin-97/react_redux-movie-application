import { Route, Routes } from "react-router-dom";
import routers from "./router";

const RouterProvider = () => {
  return (
    <Routes>
      {routers.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.component} />
        );
      })}
    </Routes> 
  );
};

export default RouterProvider;
