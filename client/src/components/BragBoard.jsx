import { useState, useEffect } from "react";
import BASE_URL from "../config";

export default function BragBoard({ artistId }) {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}/artists/${artistId}/messages`)
        .then(res => res.json())
        .then(data => setMessages(data))
        .catch(err => console.error(err));
    }, [artistId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `${BASE_URL}${artistId}/messages`,
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bragger_id: 1,
                content
            })
        }
        );

        const newMessage = await response.json();
        setMessages(prev => [...prev, newMessage]);

        setUsername("");
        setContent("");
    };
    
    return (
        <div>
            <h2>Post, Boast & Brag!</h2>
            <h6>community feed</h6>

            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />

                <textarea
                placeholder="Brag about it!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required 
                />

                <button type="submit">Post</button>

            </form>

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