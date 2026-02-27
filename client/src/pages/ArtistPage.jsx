import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BragBoard from "../components/BragBoard";
import BASE_URL from "../config";
import "./artistpage.css";

export default function ArtistPage() {

    const { id } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
    console.log("ID PARAM:", id);

        fetch(`${BASE_URL}/artists/${id}`)
        .then(res => res.json())
        .then(data => setArtist(data))
        .catch(err => console.error(err));
    }, [id]);

    if (!artist) return <p>Loading Artist...</p>;

    return (

        
        <div>
            <h1>{artist.name}</h1>
            <p>{artist.bio}</p>
            <p>{artist.year}</p>
            <p>{artist.rank}</p>

            <BragBoard artistId={id} />
        </div>

    );
}