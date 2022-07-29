import { HashRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import UserInput from "./components/UserInput";
import SplashScreen from "./components/SplashScreen";
import ProtectedRoutes from "./components/ProtectedRoutes"
import "./css/styles.css";
import Pokedex from "./components/Pokedex";
// import React, { useState, useEffect } from "react";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<UserInput />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Pokedex/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default App;
