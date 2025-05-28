DROP DATABASE IF EXISTS `watchhub`;
CREATE DATABASE `watchhub` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `watchhub`;

-- Tabla `usuarios`
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla `comentarios`
CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `comentario` text NOT NULL,
  `likes` int(11) DEFAULT 0,
  `fecha_publicacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comentario`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla `peliculas`
CREATE TABLE `peliculas` (
  `id_pelicula` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `genero` varchar(50) DEFAULT NULL,
  `año_lanzamiento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pelicula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla `series`
CREATE TABLE `series` (
  `id_serie` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `genero` varchar(50) DEFAULT NULL,
  `año_lanzamiento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_serie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
