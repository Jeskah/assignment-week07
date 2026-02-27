import { Link } from "react-router-dom"

export default function ProfileCard({ artist }) {
    return (
        <Link
        to={`/artists/${artist.id}`}    
        style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid black",
            padding: "16px",
            margin: "12px",
            borderRadius: "8px"
        }}>
            <h2>{artist.name}</h2>
            <p><strong>Year:</strong> {artist.year}</p>
            <p><strong>Rank:</strong> {artist.rank}</p>
            <p>{artist.bio}</p>
            
        <div>
            {artist.genres && artist.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
            ))}
        </div>

        </Link>
    );
}