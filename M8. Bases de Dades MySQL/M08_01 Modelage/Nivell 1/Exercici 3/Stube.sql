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
-- Database: `stube`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuaris`
--

CREATE TABLE `usuaris` (
  `id_usuari` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuaris`
--

INSERT INTO `usuaris` (`id_usuari`, `email`, `password`) VALUES
(1, 'ldarkku@shoppyhunt.com', 'dyu6=$Qs3NQ6EU+y'),
(2, 'ogeRmIm@sikatan.co', 'SSv7!NsGB9*g_&jc'),
(3, 'cpinto@ncpine.com', '&Z3&@w9-s?h=r8*b');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id_video` int(45) NOT NULL,
  `titol` varchar(200) NOT NULL,
  `descripcio` varchar(500) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `id_url` varchar(50) GENERATED ALWAYS AS (substr(`url`,locate('=',`url`) + 1)) VIRTUAL,
  `usuaris_id_usuari` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id_video`, `titol`, `descripcio`, `url`, `usuaris_id_usuari`) VALUES
(1, '\"Overkill\" - Colin Hay', 'Colin Hay formerly of Men at Work stopped by to sing acoustic versions of his classic hits. You may remember this one from Scrubs.', 'https://www.youtube.com/watch?v=6XUeB3eO9qU', 1),
(2, 'Exclusive footage of BLACKPINK revealed on RELEASED', 'New BLACKPINK music video! Lovesick Girls, watch now - https://youtu.be/dyRsYk0LyA8. Watch never before seen footage of BLACKPINK’S new Netflix documentary, get exclusive access to the kpop group and ', 'https://www.youtube.com/watch?v=vKLN5UKo87c', 1),
(3, 'BLACKPINK: How You Like That (The Tonight Show: At Home Ed)', 'BLACKPINK comes together for a debut performance of \"How You Like That\" for another Tonight Show: At Home Edition.', 'https://www.youtube.com/watch?v=yBZKk-cCv64', 1),
(4, 'Monster School: SCP Temple Run - Hamarr Minecraft Animation', 'Hey guys, let\'s make some challenges with Temple Run and SCP 096 in Monster School. I\'m Hamarr, welcome on my channnel!', 'https://www.youtube.com/watch?v=WMCIU-xGaEY', 2),
(5, 'Groups Day 2 | 2020 World Championship', '2020 World Championship Groups #Worlds2020', 'https://www.youtube.com/watch?v=OmSiJDNVs0I', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id_usuari`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id_video`),
  ADD KEY `fk_videos_usuaris_idx` (`usuaris_id_usuari`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id_usuari` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id_video` int(45) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `fk_videos_usuaris` FOREIGN KEY (`usuaris_id_usuari`) REFERENCES `usuaris` (`id_usuari`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
