CREATE TABLE artists (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  bio TEXT,
  year INT,
  rank TEXT NOT NULL
);

CREATE TABLE genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  genres TEXT NOT NULL
);

CREATE TABLE artists_genres (
  artist_id INT REFERENCES artists(id),
  genre_id INT REFERENCES genres(id),
  PRIMARY KEY (artist_id, genre_id) 
);

CREATE TABLE braggers (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT NOT NULL
);

CREATE TABLE messages (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  artist_id INT REFERENCES artists(id) ON DELETE CASCADE,
  bragger_id INT REFERENCES braggers(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categories (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE locations (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  location TEXT NOT NULL
);

INSERT INTO locations (location) VALUES
('Norwich'),
('Bristol'),
('London'),
('Manchester'),
('Brighton');

INSERT INTO categories (category, description) VALUES
('RIFT', 'Techno in Norwich? We"ve got you covered, check out our past events, upcoming nights and our selectors'),
('Bristol Born', 'Brisol has plenty to say for itself, hub to some of the most creative and influencial artists of our time. What is it about that place?'),
('GOATED', 'Check out the Fathers of their Genre, where it all started and how it evolved beyond'),
('A Fine City', 'Take a look at Norwich"s finest underground artist and events - find out what"s buzzing and head to some our unique spots');

INSERT INTO braggers (username) VALUES
('Vatick_Trix');

INSERT INTO messages (artist_id, bragger_id, content) VALUES
(1, 1, 'Shame they never tour the UK, I`ve only seen them the once at Reading, missed them at Hellfest`s 7 day festival in France after lockdown due to passport delays yet having tickets and didn`t get there in time the last time they were here. Not so much a brag but a heartbreak. Hope to see them in future.');

SELECT * FROM messages;

INSERT INTO artists (name, bio, year, rank) VALUES
('Nine Inch Nails', 'Grinding sounds and melodic distant dystopian tension', 1988, 'Mechanical God'),
('Killing Joke', 'Politically charged, mechanical and poetic with cheery undertones ', 1979, 'Veterans'),
('The Cure', 'Brooding, atmospheric postpunk with dark, shimmering guitars and ethereal textures and hypnotic riffs', 1978, 'Moody'),
('Portishead', 'atmospheric soundscapes, haunting vocals from Beth Gibbons, and a mix of hip-hop beats and samples. Dummy, is particularly noted for its melancholic and cinematic quality', 1992, 'Holy Trinity'),
('Tricky', 'some description for now', 1992, 'Holy Trinity'),
('Massive Attack', 'some description for now', 1992, 'Holy Trinity');

INSERT INTO genres (genres) VALUES
('Rock'),
('Industrial'),
('Metal'),
('Post-Punk'),
('Goth'),
('New-Wave'),
('Hip-Hop'),
('Trip-Hop'),
('Chill');


INSERT INTO artists_genres (artist_id, genre_id)
SELECT artist.id, genre.id
FROM artists artist
JOIN genres genre ON genre.genres IN ('New-Wave')
WHERE artist.name = 'The Cure'
ON CONFLICT DO NOTHING;


SELECT 
  artists.name,
  ARRAY_AGG(genres.genres) AS genre_list
FROM artists
JOIN artists_genres 
  ON artists.id = artists_genres.artist_id
JOIN genres 
  ON artists_genres.genre_id = genres.id
WHERE artists.name = 'Portishead'
GROUP BY artists.id, artists.name;


SELECT * from artists_genres
SELECT * from artists
SELECT * from genres


SELECT a.name, g.genres, ag.artist_id, ag.genre_id
FROM artists_genres ag
JOIN artists a ON a.id = ag.artist_id
JOIN genres g ON g.id = ag.genre_id
ORDER BY ag.artist_id, ag.genre_id;

