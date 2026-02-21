import { useEffect, useState } from 'react';

export default function Artists() {
  
  const [artists, setArtists] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  


  useEffect(() => {
    async function fetchArtists() {
      try{      
        const res = await fetch(`http://localhost:7777/artists`);
        const data = await res.json();
        console.log("Fetched:", data);
        setArtists(data);
    } catch (err) {
        console.error("Error fetching artists:", err);
      }
    }
      fetchArtists();
  }, []);

  return (
    <div>
      <h1>Discover...</h1>

      {artists.length === 0 ? (
        <p>loading...</p>
      ) : (
        artists.map(artist => (
        <div key={artist.id}>
          {artist.name}
    </div>
      ))
      )}
    </div>
  );
};






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

