BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(60) NOT NULL,
    hash_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE UNIQUE INDEX username_uniq_idx ON users (username);

CREATE INDEX name_password_idx ON users (username, hash_password);

CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT REFERENCES users(id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    posted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMIT;