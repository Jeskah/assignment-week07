import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());


const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
    console.log("Server is running")
    res.status(200).json({message: "Welcome to the server, we are running"});
});


app.get('/artists', async (req, res) => {
console.log("Well done artist route hit")
    try {
            const { genre } = req.query;
            
            let query = `
            SELECT
                artists.id,
                artists.name,
                artists.bio, 
                artists.year,
                artists.rank,
                COALESCE(
                ARRAY_REMOVE(ARRAY_AGG(genres.genres), NULL),
                '{}'
                ) AS genres
            FROM artists
            LEFT JOIN artists_genres
                ON artists.id = artists_genres.artist_id
            LEFT JOIN genres
                ON genres.id = artists_genres.genre_id
            `;

            const values = [];

            if (genre) {
                query += ` WHERE genres.genres = $1 `;
                values.push(genre);
            }

            query += `
            GROUP BY artists.id, artists.name, artists.bio, artists.year, artists.rank
            ORDER BY artists.id;
            `;

            const result = await db.query(query, values);
            res.json(result.rows);

}   catch (err) {
    console.error(err);
            res.status(500).json({ error: 'server error' });
}
});

app.get("/genres", async (req, res) => {
    try {
        const result = await db.query(`
            SELECT id, genres
            FROM genres
            ORDER BY genres;
            `);
            res.json(result.rows);
    } catch (err) {
        console.error("Genre Error:", err);
        res.status(500).json({ error: "server error fetching genres"});
    }
});

app.get("/artists/:id", async (req, res) => {
    const { id } = req.params;

    const result = await db.query(
        "SELECT * FROM artists WHERE id = $1",
        [id]
    );

    res.json(result.rows[0]);
});
// app.get('/genres', async (req, res) => {
//     try {
//         const result = await db.query(`SELECT * FROM genres ORDER BY genres`);
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error fetching genres'});
//     }
//     });

app.listen(7777, () => {
    console.log("server running on http://localhost:7777/")
});
