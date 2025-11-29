-- Script SQL 
-- Crear base de datos (opcional)
CREATE DATABASE IF NOT EXISTS blog;
USE blog;

-- Tabla de autores
CREATE TABLE autores (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  imagen VARCHAR(255),
  PRIMARY KEY (id)
) ENGINE = InnoDB;

-- Tabla de posts
CREATE TABLE posts (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(200) NOT NULL,
  descripcion TEXT NOT NULL,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  categoria VARCHAR(100),
  autor_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (autor_id) REFERENCES autores(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;
