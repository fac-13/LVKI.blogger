BEGIN;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    hash_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE UNIQUE INDEX username_uniq_idx ON users (username);

CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    user_id BIGINT REFERENCES users(id) NOT NULL,
    post_title VARCHAR(255) NOT NULL,
    post_content TEXT NOT NULL,
    posted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMIT;