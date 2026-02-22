export default function ProfileCard({ artist }) {
    return (
        <div style={{
            border: "1px solid black",
            padding: "16px",
            margin: "12px",
            borderRadius: "8px"
        }}>
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <p><strong>Year:</strong> {artist.year}</p>
            <p><strong>Rank:</strong> {artist.rank}</p>
            
        <div>
            {artist.genres && artist.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
            ))}
        </div>
        </div>
    );
}