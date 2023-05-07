import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AdminRouter from "./router/AdminRouter";
// import Login_page from './Pages/Login_page';
// import  Toastify from './Components/Toastify/Toastify'
import HostToast from "./Components/Toastify/Hot_toaster";
import UserRouter from "./router/UserRouter";
function App() {
  return (
    <div>
      {/* <Toastify/> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={<UserRouter />} />
          <Route path={"/admin/*"} element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>
      <HostToast />
    </div>
  );
}

export default App;
