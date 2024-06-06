-- postgres is locally persistent

-- Switch to the boulder_hub database
\c boulderboost

-- drop if exists
DROP TABLE IF EXISTS users;

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    oauth_id VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);