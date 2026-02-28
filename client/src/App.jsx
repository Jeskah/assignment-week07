import { Route, Routes, Link } from "react-router-dom"
import Artists from "./pages/Artists";
import Genres from "./pages/Genres";
import ArtistPage from "./pages/ArtistPage";
import BragLogo from './assets/brag.svg';
import './App.css';

export default function App() {
  return (
<div className="app">

<div className="header">
  <div>
      <img src={BragLogo} className="brag-logo" />
  </div>

  <nav>
      <Link to='/'>HOME</Link>
      <Link to='/artists'>ARTISTS</Link>
      <Link to='/genres'>GENRES</Link>
      <Link to='/yourprofile'>YOUR PROFILE</Link>
  </nav>
</div>

{/* PAGE - ARTISTS - DISCOVER */}

      <Routes>
        <Route path='/' element={<p>Welcome to the home of all of you undiscovered favourites</p>} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/genres' element={<Genres />} />
        <Route path="/artists/:id" element={<ArtistPage />} />
        <Route path='/genres/:genreDefine' element={<Artists />} />
      </Routes>
</div>

  );
};

//you can 1 up someone
