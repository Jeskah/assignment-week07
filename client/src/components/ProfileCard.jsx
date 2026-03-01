import { Link } from "react-router-dom";
import './profilecard.css';

export default function ProfileCard({ artist }) {
    
console.log("CARD DATA:", artist);
console.log("ARTIST:", artist)
// console.log(JSON.stringify(artist, null, 2));

    return (
<div className="profiles-container">
        <img src={artist.img_url} alt={artist.name}/>

<div className="profile-card">
    <Link  to={`/artists/${artist.id}`} 
        style={{
            textDecoration: "none",
            color: "inherit",
            padding: "16px",
            margin: "12px",
        }}>
        <div className="card-content">
            <h2>{artist.name}</h2>
            <p><strong>Year:</strong> {artist.year}</p>
            <p><strong>Rank:</strong> {artist.rank}</p>
            <p className="bio">{artist.bio?.split(" ").slice(0, 15).join(" ")}...</p>
        </div>
    </Link>
            
        <div className="genre-btn-card">
            {artist.genres && artist.genres.slice(0, 5).map((genre, index) => (
                <div key={index}
                className="genre-tabs">
                    {genre}
                </div>
            ))}
        </div>
    </div>
</div>
);
}