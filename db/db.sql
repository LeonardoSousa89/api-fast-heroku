ALTER ROLE admin SUPERUSER;

CREATE DATABASE login; 
DROP DATABASE login;

\c login admin
\dt


CREATE TABLE IF NOT EXISTS usuario(
    id SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    nickname VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(15) NOT NULL
);

DROP TABLE usuario;

INSERT INTO usuario VALUES(1,'leodev88@yahoo.com','Leonardo Sousa','devnode',1234);
INSERT INTO usuario VALUES(2,'pauloinfra48@hotmail.com','Paulo Bento','javadev',1234);

SELECT * FROM usuario;

