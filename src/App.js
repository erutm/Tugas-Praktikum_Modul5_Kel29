import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaBook } from "react-icons/fa"; 
import { GiGamepad } from "react-icons/gi"; 
import './App.css';

import Login from './pages/login'; // Import the Login component
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import Profile from './pages/Profile';
import Buku from './pages/Buku'; 
import Game from './pages/Game'; 
import BukuDetail from './pages/BukuDetail'; 
import GameDetail from './pages/GameDetail'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged-in status to true
  };

  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 29</p>
      </header>

      <Routes>
        {/* If logged in, show main routes; else show login */}
        <Route path="/" element={isLoggedIn ? <Movie /> : <Login onLogin={handleLogin} />} />
        <Route path="/movie" element={isLoggedIn ? <Movie /> : <Login onLogin={handleLogin} />} />
        <Route path="/movie/:id" element={isLoggedIn ? <MovieDetail /> : <Login onLogin={handleLogin} />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login onLogin={handleLogin} />} />
        <Route path="/buku" element={isLoggedIn ? <Buku /> : <Login onLogin={handleLogin} />} />
        <Route path="/buku/:id" element={isLoggedIn ? <BukuDetail /> : <Login onLogin={handleLogin} />} />
        <Route path="/game" element={isLoggedIn ? <Game /> : <Login onLogin={handleLogin} />} />
        <Route path="/game/:id" element={isLoggedIn ? <GameDetail /> : <Login onLogin={handleLogin} />} />
      </Routes>

      {isLoggedIn && ( // Only show footer if logged in
        <footer>
          <NavLink to="/movie" className="iconWrapper">
            <HiHome className="icon" /> Movie
          </NavLink>
          <NavLink to="/buku" className="iconWrapper">
            <FaBook className="icon" /> Buku
          </NavLink>
          <NavLink to="/game" className="iconWrapper">
            <GiGamepad className="icon" /> Game
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      )}
    </BrowserRouter>
  );
}

export default App;
