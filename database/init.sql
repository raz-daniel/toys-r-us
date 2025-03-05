-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 05, 2025 at 09:03 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toysRus`
--
CREATE DATABASE IF NOT EXISTS `toysRus` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `toysRus`;

-- --------------------------------------------------------

--
-- Table structure for table `audiences`
--

CREATE TABLE `audiences` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `audiences`
--

INSERT INTO `audiences` (`id`, `name`, `created_at`, `updated_at`) VALUES
('30860f44-f9a0-11ef-b364-0242ac110002', 'Babies', '2025-03-05 08:59:47', '2025-03-05 08:59:47'),
('30880f69-f9a0-11ef-b364-0242ac110002', 'Children', '2025-03-05 08:59:47', '2025-03-05 08:59:47'),
('30885006-f9a0-11ef-b364-0242ac110002', 'Teens', '2025-03-05 08:59:47', '2025-03-05 08:59:47'),
('30886e92-f9a0-11ef-b364-0242ac110002', 'Adults', '2025-03-05 08:59:47', '2025-03-05 08:59:47');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `audience_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`, `audience_id`, `description`, `price`, `created_at`, `updated_at`) VALUES
('8ecb044b-f9a0-11ef-b364-0242ac110002', 'Soft Blocks', '30860f44-f9a0-11ef-b364-0242ac110002', 'Colorful soft blocks for babies', 19.99, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb5121-f9a0-11ef-b364-0242ac110002', 'Baby Rattle', '30860f44-f9a0-11ef-b364-0242ac110002', 'Musical rattle toy', 12.50, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb5528-f9a0-11ef-b364-0242ac110002', 'Teething Rings', '30860f44-f9a0-11ef-b364-0242ac110002', 'Set of cooling teething rings', 15.75, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb55f8-f9a0-11ef-b364-0242ac110002', 'LEGO Set', '30880f69-f9a0-11ef-b364-0242ac110002', 'Building blocks set', 49.99, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb5767-f9a0-11ef-b364-0242ac110002', 'Puzzle Game', '30880f69-f9a0-11ef-b364-0242ac110002', '100-piece puzzle', 24.99, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb57e7-f9a0-11ef-b364-0242ac110002', 'Board Game', '30880f69-f9a0-11ef-b364-0242ac110002', 'Family board game', 29.50, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb5840-f9a0-11ef-b364-0242ac110002', 'Strategy Game', '30885006-f9a0-11ef-b364-0242ac110002', 'Complex strategy board game', 39.99, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb5898-f9a0-11ef-b364-0242ac110002', 'Card Game', '30885006-f9a0-11ef-b364-0242ac110002', 'Collectible card game', 19.95, '2025-03-05 09:02:25', '2025-03-05 09:02:25'),
('8ecb58f3-f9a0-11ef-b364-0242ac110002', 'Electronic Game', '30885006-f9a0-11ef-b364-0242ac110002', 'Handheld electronic game', 59.99, '2025-03-05 09:02:25', '2025-03-05 09:02:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audiences`
--
ALTER TABLE `audiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `audience_id` (`audience_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`audience_id`) REFERENCES `audiences` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
