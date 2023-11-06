import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Home/LoginPage";
import NotFound from "../pages/Error/NotFound";
import SignupPage from "../pages/Home/SignupPage";
import DashBoard from "../pages/DashBoard/DashBoard";
import UsersBoard from "../pages/DashBoard/UsersBoard";

import IncreaseStorage from "../pages/User/IncreaseStorage/IncreaseStorage";
import Settings from "../pages/User/Settings/Settings";
import { isTokenValid } from "../Config/Auth";
import DashboardPage from "../pages/Home/DashboardPage";

const Root = () => {
  const isUserConnected = isTokenValid();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isUserConnected ? <DashboardPage /> : <LoginPage />} />
        <Route path="/login" element={isUserConnected ? <DashboardPage /> : <LoginPage />} />
        <Route path="/signup" element={isUserConnected ? <DashboardPage /> : <SignupPage />} />
        <Route path="/payment" element={isUserConnected ? <IncreaseStorage /> : <LoginPage />} />
        <Route path="/settings" element={isUserConnected ? <Settings /> : <LoginPage />} />
        {/* TODO : bloquer l'accès */}
        <Route path="/dashboard" element={isUserConnected ? <DashBoard /> : <LoginPage />} />
        <Route path="/usersboard" element={isUserConnected ? <UsersBoard /> : <LoginPage />} />

        {isUserConnected && <Route path="/logout" element={<LoginPage />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
