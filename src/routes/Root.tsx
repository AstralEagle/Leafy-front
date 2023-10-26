import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/Home/LoginPage";
import NotFound from "../pages/Error/NotFound";
import SignupPage from "../pages/Home/SignupPage";
import IncreaseStorage from "../pages/User/IncreaseStorage/IncreaseStorage";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/payment" element={<IncreaseStorage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Root;