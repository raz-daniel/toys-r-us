-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 04, 2025 at 08:34 PM
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
-- Database: `steimatzky`
--
CREATE DATABASE IF NOT EXISTS `steimatzky` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `steimatzky`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `genre_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `summary` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `genre_id`, `summary`, `price`, `stock`, `created_at`, `updated_at`) VALUES
('01c3b577-f938-11ef-8d52-0242ac110002', 'The Great Gatsby', 'b579d86a-f937-11ef-8d52-0242ac110002', 'A novel about the American Dream set in the Roaring Twenties.', 12.99, 25, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c40078-f938-11ef-8d52-0242ac110002', 'To Kill a Mockingbird', 'b579d86a-f937-11ef-8d52-0242ac110002', 'A story about racial injustice and moral growth in the American South.', 14.50, 30, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c40372-f938-11ef-8d52-0242ac110002', 'Pride and Prejudice', 'b579d86a-f937-11ef-8d52-0242ac110002', 'A romantic novel about the relationships between the Bennet sisters and their suitors.', 11.99, 20, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c40422-f938-11ef-8d52-0242ac110002', '1984', 'b579d86a-f937-11ef-8d52-0242ac110002', 'A dystopian novel about totalitarianism, surveillance, and loss of individual identity.', 13.75, 15, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c4047e-f938-11ef-8d52-0242ac110002', 'The Catcher in the Rye', 'b579d86a-f937-11ef-8d52-0242ac110002', 'A story of teenage alienation and identity crisis by J.D. Salinger.', 10.50, 18, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c720c6-f938-11ef-8d52-0242ac110002', 'Sapiens: A Brief History of Humankind', 'b57b6a64-f937-11ef-8d52-0242ac110002', 'An exploration of the history of Homo sapiens from prehistory to the present.', 18.99, 22, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c7291a-f938-11ef-8d52-0242ac110002', 'Atomic Habits', 'b57b6a64-f937-11ef-8d52-0242ac110002', 'A guide to building good habits and breaking bad ones through small changes.', 15.99, 35, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c72af6-f938-11ef-8d52-0242ac110002', 'Educated', 'b57b6a64-f937-11ef-8d52-0242ac110002', 'A memoir about a woman who leaves her survivalist family and goes on to earn a PhD.', 14.75, 19, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c72ba5-f938-11ef-8d52-0242ac110002', 'The Immortal Life of Henrietta Lacks', 'b57b6a64-f937-11ef-8d52-0242ac110002', 'The story of a woman whose cells became one of the most important tools in medicine.', 16.50, 12, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c72bff-f938-11ef-8d52-0242ac110002', 'Thinking, Fast and Slow', 'b57b6a64-f937-11ef-8d52-0242ac110002', 'An exploration of the two systems that drive the way we think and make decisions.', 17.99, 16, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c99a4e-f938-11ef-8d52-0242ac110002', 'Dune', 'b57b893c-f937-11ef-8d52-0242ac110002', 'An epic science fiction novel about politics, religion, and ecology on a desert planet.', 16.99, 28, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c9ab28-f938-11ef-8d52-0242ac110002', 'The Hitchhiker\'s Guide to the Galaxy', 'b57b893c-f937-11ef-8d52-0242ac110002', 'A comedic science fiction series following the adventures of Arthur Dent.', 12.99, 23, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c9abe7-f938-11ef-8d52-0242ac110002', 'Neuromancer', 'b57b893c-f937-11ef-8d52-0242ac110002', 'A groundbreaking cyberpunk novel about hackers and artificial intelligence.', 13.50, 17, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c9ac41-f938-11ef-8d52-0242ac110002', 'The Three-Body Problem', 'b57b893c-f937-11ef-8d52-0242ac110002', 'A hard science fiction novel about humanity\'s first contact with an alien civilization.', 15.75, 14, '2025-03-04 20:34:01', '2025-03-04 20:34:01'),
('01c9ac95-f938-11ef-8d52-0242ac110002', 'Foundation', 'b57b893c-f937-11ef-8d52-0242ac110002', 'A science fiction series chronicling the fall and rebirth of a galactic empire.', 14.25, 20, '2025-03-04 20:34:01', '2025-03-04 20:34:01');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
('b579d86a-f937-11ef-8d52-0242ac110002', 'Fiction', '2025-03-04 20:31:53', '2025-03-04 20:31:53'),
('b57b6a64-f937-11ef-8d52-0242ac110002', 'Non-Fiction', '2025-03-04 20:31:53', '2025-03-04 20:31:53'),
('b57b893c-f937-11ef-8d52-0242ac110002', 'Science Fiction', '2025-03-04 20:31:53', '2025-03-04 20:31:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
