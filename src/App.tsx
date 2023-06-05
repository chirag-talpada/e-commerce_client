import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./component/404Page";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "./component/AuthGaurd";
import UserPage from "./pages/UserPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/" element={<AuthGuard Component={UserPage} />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
