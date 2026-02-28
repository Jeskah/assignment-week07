import ProfileCard from '../components/ProfileCard';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import BASE_URL from '../config';
import "./artists.css";


export default function Artists() {
  
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { genreDefine } = useParams();

  useEffect(() => {
    const fetchArtists = async () => {
      try {      
        let url = `${BASE_URL}/artists`;

        let chosenGenre = genreDefine || selectedGenre;

        if (chosenGenre) {
          url += `?genre=${chosenGenre}`;
          
        }
        

        const res = await fetch(url);
        const artists = await res.json();

      setArtists(artists);
      
      console.log("Fetched Artists:", artists);
      console.log("Param:", genreDefine);

      console.log("BASE_URL:", BASE_URL);

      } catch (err) {
        console.error("Error fetching artists:", err);
      }
    }
    
      fetchArtists();
  }, [selectedGenre, genreDefine]);


  useEffect(() => {
    const fetchGenres = async () => {
      try {
    const res = await fetch(`${BASE_URL}/genres`);
    const genres = await res.json();
          setGenres(genres);
    } catch (err) {
        console.error("Error fetching genres:", err);
      }
      };
      fetchGenres();
    }, []);

  return (
    <div className='artists-page'>

      <div className='discover'>
      <h2>Discover...</h2>

<div className='genre-select'>
<div className='dropdown'>
    <select onChange={(e) => setSelectedGenre(e.target.value)}>
      <option value="">All</option>
      <option value="Industrial">Industrial</option>
      <option value="Metal">Metal</option>
      <option value="Post-Punk">Post-Punk</option>
      <option value="Goth">Goth</option>
      <option value="New-Wave">New-Wave</option>
      <option value="Hip-Hop">Hip-Hop</option>
      <option value="Trip-Hop">Trip-Hop</option>
      <option value="Chill">Chill</option>
    </select>
</div>
        
        

<div className='buttons'>
  
  <div className='genre-btns'>
    {genres.slice(0, 5).map((g) => (
      <Link
        key={g.id}
        to={`/genres/${encodeURIComponent(g.genres)}`}
      >

          <button className="genre-btn">
          {g.genres}
        </button>
      </Link>
    ))}

    <Link to="/genres">
      <button className='see-more'>
        See More →
      </button>
    </Link>
  </div>
</div>


</div>

</div>

<div className='all-artists'>
    {artists.length === 0 ? (
      <p>loading...</p>
    ) : (
      artists.map(artist => (
        <ProfileCard key={artist.id} artist={artist} />
      ))
  )}
        </div>
    </div>
  );
}
