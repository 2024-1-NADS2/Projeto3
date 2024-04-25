create database intelectify;
use intelectify;

create table usuarios(
email VARCHAR(100) PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
senha VARCHAR(50) NOT NULL CHECK (CHAR_LENGTH(senha) >= 8),
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table posts(
id int auto_increment primary key,
texto varchar(250),
imagens varchar(300),
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
curtidas int,
criado_por varchar(100) not null,
FOREIGN KEY (criado_por) REFERENCES usuarios(email)
);

create table comentarios(
id int auto_increment primary key,
texto varchar(250),
imagens varchar(1500),
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
curtidas int,
criado_por varchar(100) not null,
FOREIGN KEY (criado_por) REFERENCES usuarios(email)
);

CREATE TABLE posts_comentarios (
id_posts INT,
id_comentarios INT,
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id_posts, id_comentarios),
FOREIGN KEY (id_posts) REFERENCES posts(id),
FOREIGN KEY (id_comentarios) REFERENCES comentarios(id)
);