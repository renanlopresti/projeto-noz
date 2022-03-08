import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "../pages/errorPage/errorPage";
import HomePage from "../pages/homePage/homePage";
import LoginPage from "../pages/loginPage/loginPage";


export default function Router() {

 return (
  <BrowserRouter>
   <Routes>
    <Route path='/login' element={<LoginPage />} />
    <Route path='/' element={<HomePage />} />
    <Route path='*' element={<ErrorPage />} />
   </Routes>
  </BrowserRouter>
 )
}