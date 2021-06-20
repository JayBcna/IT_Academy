-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2021 at 03:44 PM
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
-- Database: `amazon`
--

-- --------------------------------------------------------

--
-- Table structure for table `autors`
--

CREATE TABLE `autors` (
  `id_autor` int(11) NOT NULL,
  `nom` varchar(60) DEFAULT NULL,
  `cognoms` varchar(60) DEFAULT NULL,
  `direccio` varchar(100) DEFAULT NULL,
  `nro_publicacions` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `autors`
--

INSERT INTO `autors` (`id_autor`, `nom`, `cognoms`, `direccio`, `nro_publicacions`) VALUES
(1, 'Dan', 'Brown', 'London', 3);

-- --------------------------------------------------------

--
-- Table structure for table `facturas`
--

CREATE TABLE `facturas` (
  `id_factura` int(11) NOT NULL,
  `data` date NOT NULL,
  `facturas_nro` int(11) DEFAULT NULL,
  `usuaris_id_usuari` int(11) NOT NULL,
  `preu` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `facturas`
--

INSERT INTO `facturas` (`id_factura`, `data`, `facturas_nro`, `usuaris_id_usuari`, `preu`) VALUES
(1, '2020-10-14', 1000, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `factura_detall`
--

CREATE TABLE `factura_detall` (
  `facturas_id_factura` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `llibre_detall` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `factura_detall`
--

INSERT INTO `factura_detall` (`facturas_id_factura`, `cantidad`, `llibre_detall`) VALUES
(1, 2, 'Inferno');

-- --------------------------------------------------------

--
-- Table structure for table `llibres`
--

CREATE TABLE `llibres` (
  `id-llibre` int(11) NOT NULL,
  `nom-llibre` varchar(100) DEFAULT NULL,
  `autors_id_autor` int(11) NOT NULL,
  `preu` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `llibres`
--

INSERT INTO `llibres` (`id-llibre`, `nom-llibre`, `autors_id_autor`, `preu`) VALUES
(1, 'Inferno', 1, '22.99');

-- --------------------------------------------------------

--
-- Table structure for table `usuaris`
--

CREATE TABLE `usuaris` (
  `id_usuari` int(11) NOT NULL,
  `nom_usuari` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuaris`
--

INSERT INTO `usuaris` (`id_usuari`, `nom_usuari`, `email`, `password`) VALUES
(1, 'dobramado', 'dobramado@gmail.com', 'egr!23ERtyzx!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autors`
--
ALTER TABLE `autors`
  ADD PRIMARY KEY (`id_autor`);

--
-- Indexes for table `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id_factura`),
  ADD UNIQUE KEY `facturas_nro_UNIQUE` (`facturas_nro`),
  ADD KEY `fk_facturas_usuaris1_idx` (`usuaris_id_usuari`);

--
-- Indexes for table `factura_detall`
--
ALTER TABLE `factura_detall`
  ADD KEY `fk_table1_facturas1_idx` (`facturas_id_factura`),
  ADD KEY `fk_table1_llibres1_idx` (`llibre_detall`);

--
-- Indexes for table `llibres`
--
ALTER TABLE `llibres`
  ADD PRIMARY KEY (`id-llibre`,`autors_id_autor`),
  ADD KEY `fk_llibres_autors_idx` (`autors_id_autor`),
  ADD KEY `fk_nom_llibre` (`nom-llibre`);

--
-- Indexes for table `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id_usuari`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `nom_usuari_UNIQUE` (`nom_usuari`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autors`
--
ALTER TABLE `autors`
  MODIFY `id_autor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `llibres`
--
ALTER TABLE `llibres`
  MODIFY `id-llibre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id_usuari` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `fk_facturas_usuaris1` FOREIGN KEY (`usuaris_id_usuari`) REFERENCES `usuaris` (`id_usuari`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `factura_detall`
--
ALTER TABLE `factura_detall`
  ADD CONSTRAINT `fk_table1_facturas1` FOREIGN KEY (`facturas_id_factura`) REFERENCES `facturas` (`id_factura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_table1_llibres1` FOREIGN KEY (`llibre_detall`) REFERENCES `llibres` (`nom-llibre`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `llibres`
--
ALTER TABLE `llibres`
  ADD CONSTRAINT `fk_llibres_autors` FOREIGN KEY (`autors_id_autor`) REFERENCES `autors` (`id_autor`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
