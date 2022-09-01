import React from "react";
import "./App.sass";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouterProvider from "./Router";
// import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <div className="container">
      <div className="mt-1">
        <Header />
      </div>
      <div className="text-white">
        <RouterProvider />
        {/* <Modal/> */}
      </div>
      <div className="text-dark">
        <Footer />
      </div>
    </div>
  );
};

export default App;
