import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Player2 from './pages/Player2';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import UserLiked from './pages/UserLiked';
import SearchResults from './pages/SearchResults';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player/:id" element={<Player />} />
      <Route exact path="/player2" element={<Player2 />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/tv" element={<TvShows />} />
      <Route exact path="/mylist" element={<UserLiked />} />
      <Route exact path="/search/:query" element={<SearchResults />} />
      <Route exact path="/" element={<Netflix />} />
    </Routes>
  </BrowserRouter>
  );
}
