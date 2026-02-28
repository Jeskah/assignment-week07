import { Link } from "react-router-dom";
import './profilecard.css';

export default function ProfileCard({ artist }) {
    return (

<div className="profiles-container">

<div className="profile-card">
        <Link
        to={`/artists/${artist.id}`} 
        style={{
            textDecoration: "none",
            color: "inherit",
            padding: "16px",
            margin: "12px",
        }}>
            <h2>{artist.name}</h2>
            <p><strong>Year:</strong> {artist.year}</p>
            <p><strong>Rank:</strong> {artist.rank}</p>
            <p>{artist.bio}</p>
            
        <div className="genre-btn-card">
            {artist.genres && artist.genres.slice(0, 5).map((genre, index) => (
                <span key={index}><strong>{genre}</strong></span>
            ))}
        </div>
            

        </Link>
    </div>
    </div>
    );
}