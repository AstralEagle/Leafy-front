import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/Home/LoginPage";
import NotFound from "../pages/Error/NotFound";
import SignupPage from "../pages/Home/SignupPage";
import DashBoard from "../pages/DashBoard/DashBoard";
import UsersBoard from "../pages/DashBoard/UsersBoard";



const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/usersboard' element={<UsersBoard />} />

        </Routes>
    </BrowserRouter>
)

export default Root;