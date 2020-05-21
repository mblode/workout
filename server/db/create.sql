CREATE TABLE IF NOT EXISTS Workouts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES Account (id),
    title VARCHAR(50) NOT NULL,
    instructions VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    registration_date TIMESTAMP,
    seconds: INTEGER
);

CREATE TABLE IF NOT EXISTS Excersices (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES Account (id),
    title VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    registration_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Routines (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES Account (id),
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    registration_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Account (
    id SERIAL PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
	password VARCHAR (50) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
);
