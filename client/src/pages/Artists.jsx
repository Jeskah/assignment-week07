import ProfileCard from '../components/ProfileCard';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Artists() {
  
  const [artists, setArtists] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { genreDefine } = useParams();

  useEffect(() => {
    const fetchArtists = async () => {
      try {      
        let url = "http://localhost:7777/artists";
        let chosenGenre = genreDefine || selectedGenre;
        if (chosenGenre) {
          url += `?genre=${chosenGenre}`;
          
        }

        const res = await fetch(url);
        const artists = await res.json();

      console.log("Fetched Artists:", artists);
      setArtists(artists);

      } catch (err) {
        console.error("Error fetching artists:", err);
      }
    }
      fetchArtists();
  }, [selectedGenre, genreDefine]);

//     const filteredArtists = selectedGenre
//   ? artists.filter(artist => 
//     artist.genres.includes(selectedGenre)
//   )
// : artists;

// return (
//   <div>
//     {filteredArtists.map(artist => (
//       <div key={artist.id}>
//         <h2>{artist.name}</h2>
//         </div>
//     ))}
//   </div>
// );
// }

  // useEffect(() => {
  //   async function fetchArtists() {
  //     try{      
  //       const res = await fetch(`http://localhost:7777/artists`);
  //       const data = await res.json();
  //       console.log("Fetched:", data);
  //       setArtists(data);
  //   } catch (err) {
  //       console.error("Error fetching artists:", err);
  //     }
  //   }
  //     fetchArtists();
  // }, []);

  return (
    <div>
      <h1>Discover...</h1>
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

      {artists.length === 0 ? (
        <p>loading...</p>
      ) : (
artists.map(artist => (
  <ProfileCard key={artist.id} artist={artist} />
))

      )}
    </div>
  );
}



//   return (
//     <div>
//       <h1>All Artists</h1>
//       {animals.lenght > 0 ? artists.map(animal => (
//         ArtistCard name={artist.name} image={animal.genre}
//       ))) => (
//         <div key={artist.id}>{artist.name}</div>
//       ))}
//     </div>
//   );
// };