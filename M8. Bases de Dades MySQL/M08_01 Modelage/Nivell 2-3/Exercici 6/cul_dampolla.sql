-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2021 at 03:56 PM
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
-- Database: `cul_dampolla`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `cli_nom` varchar(45) NOT NULL,
  `cli_tipus_via` varchar(10) DEFAULT NULL,
  `cli_nom_via` varchar(100) DEFAULT NULL,
  `cli_num` int(11) DEFAULT NULL,
  `cli_porta` varchar(10) DEFAULT NULL,
  `cli_cp` varchar(10) DEFAULT NULL,
  `cli_ciutat` varchar(45) DEFAULT NULL,
  `cli_pais` varchar(45) DEFAULT NULL,
  `cli_telf` int(11) NOT NULL,
  `cli_email` varchar(100) DEFAULT NULL,
  `cli_data_reg` date DEFAULT NULL,
  `cli_recomend` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `cli_nom`, `cli_tipus_via`, `cli_nom_via`, `cli_num`, `cli_porta`, `cli_cp`, `cli_ciutat`, `cli_pais`, `cli_telf`, `cli_email`, `cli_data_reg`, `cli_recomend`) VALUES
(1, 'Alfredo', 'Avda', 'Sants', 23, '2', '08003', 'Barcelona', 'España', 933254789, 'asantana@gmail.com', '2020-10-01', NULL),
(2, 'Carlos', 'C/', 'Sant Elies', 32, '1', '08006', 'Barcelona', 'España', 696696696, 'cpdoming@outlook.com', '2020-10-05', 1),
(3, 'Laura', 'Psg', 'Carme', 123, '9', '08002', 'Terrassa', 'España', 698741236, 'lboster@yahoo.es', '2020-10-05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `empleats`
--

CREATE TABLE `empleats` (
  `id_empleat` int(11) NOT NULL,
  `emp_nom` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empleats`
--

INSERT INTO `empleats` (`id_empleat`, `emp_nom`) VALUES
(1, 'Núria'),
(2, 'Jordi'),
(3, 'Jose'),
(4, 'Paul'),
(5, 'Merche');

-- --------------------------------------------------------

--
-- Table structure for table `marques`
--

CREATE TABLE `marques` (
  `id_marca` int(11) NOT NULL,
  `marca_nom` varchar(45) DEFAULT NULL,
  `proveidor_NIF` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `marques`
--

INSERT INTO `marques` (`id_marca`, `marca_nom`, `proveidor_NIF`) VALUES
(1, 'Swiss Glasses', 'A08119687'),
(2, 'EyeWear 2000', 'B60488061'),
(3, 'Oakley Pro', 'B62800529');

-- --------------------------------------------------------

--
-- Table structure for table `proveidor`
--

CREATE TABLE `proveidor` (
  `NIF` varchar(10) NOT NULL,
  `id_proveidor` int(11) NOT NULL,
  `prov_nom` varchar(100) NOT NULL,
  `prov_adrec_carrer` varchar(100) NOT NULL,
  `prov_adrec_num` int(11) DEFAULT NULL,
  `prov_adrec_pis` int(11) DEFAULT NULL,
  `prov_adrec_porta` varchar(10) DEFAULT NULL,
  `prov_cp` varchar(10) NOT NULL,
  `prov_ciutat` varchar(45) NOT NULL,
  `prov_pais` varchar(45) NOT NULL,
  `prov_pref_pais` int(11) DEFAULT NULL,
  `prov_telf` int(11) NOT NULL,
  `prov_fax` int(11) DEFAULT NULL,
  `prov_marca_nom` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `proveidor`
--

INSERT INTO `proveidor` (`NIF`, `id_proveidor`, `prov_nom`, `prov_adrec_carrer`, `prov_adrec_num`, `prov_adrec_pis`, `prov_adrec_porta`, `prov_cp`, `prov_ciutat`, `prov_pais`, `prov_pref_pais`, `prov_telf`, `prov_fax`, `prov_marca_nom`) VALUES
('A08119687', 1, 'Optica SWISS', 'Ctra De L\'hospitalet', 147, 2, NULL, '08940', 'Cornella De Llobregat', 'España', 34, 933037970, 933037970, 'Zeiss'),
('B60488061', 2, 'Optics 2000, SL', ' Calle Muntaner', 83, NULL, NULL, '08011', 'Barcelona', 'España', 34, 934530943, 934530891, 'Police'),
('B62800529', 5, 'Opticalia', 'Gran Via', 544, 9, '9A', '08005', 'Barcelona', 'España', 34, 933023456, 933023456, 'Oakley');

-- --------------------------------------------------------

--
-- Table structure for table `ulleres`
--

CREATE TABLE `ulleres` (
  `id_ullere` int(11) NOT NULL,
  `ull_vid_graduacio_esq` decimal(4,2) DEFAULT NULL,
  `ull_vid_graduacio_dre` decimal(4,2) DEFAULT NULL,
  `ull_vid_col` varchar(45) DEFAULT NULL,
  `ull_mont_tipus` enum('Flotant','Pasta','Metal') DEFAULT NULL,
  `ull_mont_col` varchar(45) DEFAULT NULL,
  `ull_preu` decimal(6,2) DEFAULT NULL,
  `marques_id_marque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ulleres`
--

INSERT INTO `ulleres` (`id_ullere`, `ull_vid_graduacio_esq`, `ull_vid_graduacio_dre`, `ull_vid_col`, `ull_mont_tipus`, `ull_mont_col`, `ull_preu`, `marques_id_marque`) VALUES
(1, '1.25', '1.25', 'Neutro', 'Flotant', 'Black', '299.00', 1),
(2, '1.00', '1.00', 'Neutro', 'Pasta', 'Red', '59.95', 1),
(3, '2.00', '2.00', 'Smoke', 'Metal', 'White', '99.90', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL,
  `ulleres_id_ullere` int(11) NOT NULL,
  `empleats_id_empleat` int(11) NOT NULL,
  `clientes_id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ventas`
--

INSERT INTO `ventas` (`id_ventas`, `ulleres_id_ullere`, `empleats_id_empleat`, `clientes_id_cliente`) VALUES
(1, 1, 2, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`),
  ADD KEY `fk_recomend_idx` (`cli_recomend`);

--
-- Indexes for table `empleats`
--
ALTER TABLE `empleats`
  ADD PRIMARY KEY (`id_empleat`);

--
-- Indexes for table `marques`
--
ALTER TABLE `marques`
  ADD PRIMARY KEY (`id_marca`),
  ADD UNIQUE KEY `marq_nom_UNIQUE` (`marca_nom`),
  ADD KEY `fk_marques_proveidor1_idx` (`proveidor_NIF`);

--
-- Indexes for table `proveidor`
--
ALTER TABLE `proveidor`
  ADD PRIMARY KEY (`NIF`),
  ADD UNIQUE KEY `NIF_UNIQUE` (`NIF`),
  ADD UNIQUE KEY `id_proveidor_UNIQUE` (`id_proveidor`);

--
-- Indexes for table `ulleres`
--
ALTER TABLE `ulleres`
  ADD PRIMARY KEY (`id_ullere`),
  ADD KEY `fk_ulleres_marques1_idx` (`marques_id_marque`);

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_ventas`,`ulleres_id_ullere`,`empleats_id_empleat`,`clientes_id_cliente`),
  ADD KEY `fk_ventas_ulleres1_idx` (`ulleres_id_ullere`),
  ADD KEY `fk_ventas_empleats1_idx` (`empleats_id_empleat`),
  ADD KEY `fk_ventas_clientes1_idx` (`clientes_id_cliente`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `empleats`
--
ALTER TABLE `empleats`
  MODIFY `id_empleat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `marques`
--
ALTER TABLE `marques`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `proveidor`
--
ALTER TABLE `proveidor`
  MODIFY `id_proveidor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ulleres`
--
ALTER TABLE `ulleres`
  MODIFY `id_ullere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_ventas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_recomend` FOREIGN KEY (`cli_recomend`) REFERENCES `clientes` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `marques`
--
ALTER TABLE `marques`
  ADD CONSTRAINT `fk_marques_proveidor1` FOREIGN KEY (`proveidor_NIF`) REFERENCES `proveidor` (`NIF`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `ulleres`
--
ALTER TABLE `ulleres`
  ADD CONSTRAINT `fk_ulleres_marques1` FOREIGN KEY (`marques_id_marque`) REFERENCES `marques` (`id_marca`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `fk_ventas_clientes1` FOREIGN KEY (`clientes_id_cliente`) REFERENCES `clientes` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ventas_empleats1` FOREIGN KEY (`empleats_id_empleat`) REFERENCES `empleats` (`id_empleat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ventas_ulleres1` FOREIGN KEY (`ulleres_id_ullere`) REFERENCES `ulleres` (`id_ullere`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
