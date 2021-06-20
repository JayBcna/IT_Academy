-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2021 at 03:46 PM
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
-- Database: `xarxa_social`
--

-- --------------------------------------------------------

--
-- Table structure for table `amistat`
--

CREATE TABLE `amistat` (
  `id_amistat` int(11) NOT NULL,
  `origen_amistat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `amistat`
--

INSERT INTO `amistat` (`id_amistat`, `origen_amistat`) VALUES
(1, 'Col·legi o universitat'),
(2, 'Bar'),
(3, 'Festa'),
(4, 'Familia'),
(5, 'Passeig'),
(6, 'App de Citas');

-- --------------------------------------------------------

--
-- Table structure for table `fotografies`
--

CREATE TABLE `fotografies` (
  `id_fotografia` int(11) NOT NULL,
  `adreca` varchar(200) DEFAULT NULL,
  `gps` varchar(60) DEFAULT NULL,
  `url_foto` varchar(150) DEFAULT NULL,
  `usuaris_id_usuari` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fotografies`
--

INSERT INTO `fotografies` (`id_fotografia`, `adreca`, `gps`, `url_foto`, `usuaris_id_usuari`) VALUES
(1, 'Barcelona', '@41.3947688,2.0787279', 'https://media-edg.barcelona.cat/wp-content/uploads/2017/12/19145940/DISE-Pla%C3%A7a-de-Catalunya-13-6-13-VZ-07-760x428.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuaris`
--

CREATE TABLE `usuaris` (
  `id_usuari` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `contrasenya` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuaris`
--

INSERT INTO `usuaris` (`id_usuari`, `nom`, `email`, `contrasenya`) VALUES
(1, 'vroth', 'vroth@gmail.com', 'CX12!23lkj87&'),
(2, 'rriordar', 'riordan@outlook.com', 'QZ@0B3*zen8X'),
(3, 'Dan', 'd.brown@books.com', 'xHkXOGYE@@HG'),
(4, 'George', 'lord@thering.com', 'khFEAupY@^wJ'),
(5, 'Paula', 'phawkins@gmail.com', 'HMV&*cP%#aMI');

-- --------------------------------------------------------

--
-- Table structure for table `usuaris_has_amistat`
--

CREATE TABLE `usuaris_has_amistat` (
  `usuaris_id_usuari` int(11) NOT NULL,
  `amistat_id_amistat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amistat`
--
ALTER TABLE `amistat`
  ADD PRIMARY KEY (`id_amistat`);

--
-- Indexes for table `fotografies`
--
ALTER TABLE `fotografies`
  ADD PRIMARY KEY (`id_fotografia`),
  ADD KEY `fk_fotografies_usuaris1_idx` (`usuaris_id_usuari`);

--
-- Indexes for table `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id_usuari`);

--
-- Indexes for table `usuaris_has_amistat`
--
ALTER TABLE `usuaris_has_amistat`
  ADD PRIMARY KEY (`usuaris_id_usuari`,`amistat_id_amistat`),
  ADD KEY `fk_usuaris_has_amistat_amistat1_idx` (`amistat_id_amistat`),
  ADD KEY `fk_usuaris_has_amistat_usuaris_idx` (`usuaris_id_usuari`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amistat`
--
ALTER TABLE `amistat`
  MODIFY `id_amistat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fotografies`
--
ALTER TABLE `fotografies`
  MODIFY `id_fotografia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id_usuari` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fotografies`
--
ALTER TABLE `fotografies`
  ADD CONSTRAINT `fk_fotografies_usuaris1` FOREIGN KEY (`usuaris_id_usuari`) REFERENCES `usuaris` (`id_usuari`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `usuaris_has_amistat`
--
ALTER TABLE `usuaris_has_amistat`
  ADD CONSTRAINT `fk_usuaris_has_amistat_amistat1` FOREIGN KEY (`amistat_id_amistat`) REFERENCES `amistat` (`id_amistat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuaris_has_amistat_usuaris` FOREIGN KEY (`usuaris_id_usuari`) REFERENCES `usuaris` (`id_usuari`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
