import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./component/404Page";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
