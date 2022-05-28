-- ----------------------------------------------------------------------------------------------
-- Elimar 
-- ----------------------------------------------------------------------------------------------
DROP DATABASE gameBingodb;
-- ----------------------------------------------------------------------------------------------
-- Base de datos creada
-- ----------------------------------------------------------------------------------------------
CREATE DATABASE gameBingodb;
-- ----------------------------------------------------------------------------------------------
-- Usar base de datos
-- ----------------------------------------------------------------------------------------------
USE gameBingodb;
-- ----------------------------------------------------------------------------------------------
-- Tabla principal del juego
-- el gameStatus muestra si el juego ya empezó dando un valor de 1, de lo contrario 0
-- ----------------------------------------------------------------------------------------------
CREATE TABLE gameb(
    idGame INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gameStatus BIT DEFAULT 0
);
-- ----------------------------------------------------------------------------------------------
-- Detalles del juego
-- Posicion del numero relacionado con el juego
-- ----------------------------------------------------------------------------------------------
CREATE TABLE gameDetails(
    idGameDetails INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    numberPosition INT NOT NULL, 
    FKidGame INT NULL,
    CONSTRAINT FKidGame FOREIGN KEY (FKidGame) REFERENCES gameb(idGame)
);
-- ----------------------------------------------------------------------------------------------
-- tarjeta del jugador
-- letra que hará en la tarjeta
-- numero ligado a la tarjeta
-- ----------------------------------------------------------------------------------------------
CREATE TABLE playerCard(
    idPlayerCard INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    letter VARCHAR(2) NOT NULL,
    number INT NOT NULL,
     FKidGame_player INT NULL,
    CONSTRAINT FKidGame_player FOREIGN KEY (FKidGame_player) REFERENCES gameb(idGame)
);




