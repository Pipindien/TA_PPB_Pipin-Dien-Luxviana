import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import './Components/style.css';
import Navbar from './Components/navbar';
import ProfilePage from "./Components/profile/ProfilePage";
import ProfileDetail from "./Components/profile/ProfileDetail";
import BookRecommendations from './Components/BookRecommendations';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/profile" element={<ProfilePage/>} />
        <Route exact path="/profiledetail/:id" element={<ProfileDetail/>} />
        <Route exact path="/recommendations" element={<BookRecommendations/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
