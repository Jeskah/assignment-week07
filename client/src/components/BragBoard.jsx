import { useState, useEffect } from "react";

export default function BragBoard({ artistId }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7777/artists/${artistId}/messages`)
        .then(res => res.json())
        .then(data => setMessages(data))
        .catch(err => console.error(err));
    }, [artistId]);

    
    return (
        <div>
            <h2>Post, Boast and Brag!</h2>
            <h6>community feed</h6>


            {messages.map((msg) => {
                const date = new Date(msg.created_at);
                const formattedDate = date.toLocaleString();
                
            return (
                <div key={msg.id}>
                    <strong>{msg.username}</strong>{" "}
                    <small>{formattedDate}</small>
                    <p>{msg.content}</p>
                </div>
            );
            })}
        </div>
    );
}