-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-05-2023 a las 08:07:07
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `maderas_los_angeles`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `balonas`
--
CREATE DATABASE maderas_los_angeles;
USE maderas_los_angeles;

DROP TABLE IF EXISTS `balonas`;
CREATE TABLE IF NOT EXISTS `balonas` (
  `ID` int(12) NOT NULL AUTO_INCREMENT,
  `Balona_derecha` int(12) NOT NULL,
  `Balona_Izquierda` int(12) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ganancias_pies`
--

DROP TABLE IF EXISTS `ganancias_pies`;
CREATE TABLE IF NOT EXISTS `ganancias_pies` (
  `ID` int(12) NOT NULL AUTO_INCREMENT,
  `Mes` varchar(255) NOT NULL,
  `Year` int(12) NOT NULL,
  `Pies_totales` float NOT NULL,
  `Pago_del_mes` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_viajes`
--

DROP TABLE IF EXISTS `tabla_viajes`;
CREATE TABLE IF NOT EXISTS `tabla_viajes` (
  `ID` int(12) NOT NULL AUTO_INCREMENT,
  `Dia` int(12) NOT NULL,
  `Mes` varchar(255) NOT NULL,
  `Year` bigint(12) NOT NULL,
  `Graficos_Carrete` varchar(255) NOT NULL,
  `Tipo_Carrete` varchar(255) NOT NULL,
  `Cantidad` int(12) NOT NULL,
  `Precio_por_pieza` float NOT NULL,
  `Pies_por_pieza` float NOT NULL,
  `Dinero_total` varchar(255) NOT NULL,
  `Dinero_total_iva` varchar(255) NOT NULL,
  `Pies_total` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tabla_viajes`
--

INSERT INTO `tabla_viajes` (`ID`, `Dia`, `Mes`, `Year`, `Graficos_Carrete`, `Tipo_Carrete`, `Cantidad`, `Precio_por_pieza`, `Pies_por_pieza`, `Dinero_total`, `Dinero_total_iva`, `Pies_total`) VALUES
(1, 31, 'Enero', 2023, 'IDK', '15-50-32', 20, 12, 13, '240', '278.4', 260),
(5, 31, 'Enero', 2023, 'IDK', '15-50-32', 20, 145.33, 254.5, '2906.6', '3371.66', 5090),
(6, 31, 'Enero', 2023, 'IDK', '15-50-32', 21, 21.33, 156.34, '426.6', '494.86', 3126.8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `ID` int(12) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Telefono` bigint(12) NOT NULL,
  `Contra` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `Nombre`, `Telefono`, `Contra`) VALUES
(3, 'Martin', 3334726147, '$2y$15$igQCxa7AjjInluf4583VcOHcQZTEyx9rKa4gZiBQ.NwbvaRK./w5y');

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `varillas`
--

DROP TABLE IF EXISTS `varillas`;
CREATE TABLE IF NOT EXISTS `varillas` (
  `ID` int(12) NOT NULL AUTO_INCREMENT,
  `Cantidad` int(12) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
