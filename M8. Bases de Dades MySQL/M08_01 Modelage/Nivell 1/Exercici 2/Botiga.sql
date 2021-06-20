-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2021 at 03:38 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `botiga`
--

-- --------------------------------------------------------

--
-- Table structure for table `comandes`
--

CREATE TABLE `comandes` (
  `id_comande` int(11) NOT NULL,
  `data` date DEFAULT NULL,
  `comprador_id_comprador` int(11) NOT NULL,
  `quadres_id_quadres` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `compradors`
--

CREATE TABLE `compradors` (
  `id_comprador` int(11) NOT NULL,
  `nom` varchar(60) DEFAULT NULL,
  `cognom` varchar(100) DEFAULT NULL,
  `dni` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quadres`
--

CREATE TABLE `quadres` (
  `id_quadre` int(11) NOT NULL,
  `preu` decimal(12,2) DEFAULT NULL,
  `autor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comandes`
--
ALTER TABLE `comandes`
  ADD PRIMARY KEY (`id_comande`,`comprador_id_comprador`,`quadres_id_quadres`),
  ADD KEY `fk_comandes_comprador_idx` (`comprador_id_comprador`),
  ADD KEY `fk_comandes_quadres1_idx` (`quadres_id_quadres`);

--
-- Indexes for table `compradors`
--
ALTER TABLE `compradors`
  ADD PRIMARY KEY (`id_comprador`),
  ADD UNIQUE KEY `dni_UNIQUE` (`dni`);

--
-- Indexes for table `quadres`
--
ALTER TABLE `quadres`
  ADD PRIMARY KEY (`id_quadre`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comandes`
--
ALTER TABLE `comandes`
  MODIFY `id_comande` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `compradors`
--
ALTER TABLE `compradors`
  MODIFY `id_comprador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quadres`
--
ALTER TABLE `quadres`
  MODIFY `id_quadre` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comandes`
--
ALTER TABLE `comandes`
  ADD CONSTRAINT `fk_comandes_comprador` FOREIGN KEY (`comprador_id_comprador`) REFERENCES `compradors` (`id_comprador`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_comandes_quadres1` FOREIGN KEY (`quadres_id_quadres`) REFERENCES `quadres` (`id_quadre`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
