import "./style.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Server from "./Pages/Server";
import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/Home" element={<Home />} exact />
      <Route path="/Server" element={<Server />} exact/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
