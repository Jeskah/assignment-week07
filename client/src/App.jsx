import { Route, Routes, Link } from "react-router-dom"
import Artists from "./pages/Artists"
export default function App() {
  return (
<div>

{/* GLOBAL */}

  <h1>
    THIS IS MY MUSIC APP
  </h1>

  <nav>
      <Link to='/'>HOME</Link>
      <Link to='/artists'>ARTISTS<Link/>
      <Link to='/genres'/>
      ARTIST PAGE</Link>
      <Link to='/yourprofile'>YOUR PROFILE</Link>
  </nav>

{/* PAGE - ARTISTS - DISCOVER */}

      <Routes>
        <Route path='/' element={<p>Welcome to the home of all of you undiscovered favourites</p>} />
        <Route path='/artists' element={<Artists />} />
        {/* <Route path='/genres' element={<Genres />} */}
        <Route path='/genres/:genreDefine' element={<Artists />} />
      </Routes>

</div>
  )
}

