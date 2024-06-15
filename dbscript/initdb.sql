
CREATE DATABASE IF NOT EXISTS evan;
USE evan;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` enum('pending','completed') DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
);



INSERT INTO `tasks` (`title`, `description`, `status`) VALUES
('Task 1', 'Description for task 1', 'pending'),
('Task 2', 'Description for task 2', 'completed'),
('Task 3', 'Description for task 3', 'pending'),
('Task 4', 'Description for task 4', 'completed'),
('Task 5', 'Description for task 5', 'pending'),
('Task 6', 'Description for task 6', 'completed'),
('Task 7', 'Description for task 7', 'pending'),
('Task 8', 'Description for task 8', 'completed'),
('Task 9', 'Description for task 9', 'pending'),
('Task 10', 'Description for task 10', 'completed'),
('Task 11', 'Description for task 11', 'pending'),
('Task 12', 'Description for task 12', 'completed'),
('Task 13', 'Description for task 13', 'pending'),
('Task 14', 'Description for task 14', 'completed'),
('Task 15', 'Description for task 15', 'pending'),
('Task 16', 'Description for task 16', 'completed'),
('Task 17', 'Description for task 17', 'pending'),
('Task 18', 'Description for task 18', 'completed'),
('Task 19', 'Description for task 19', 'pending'),
('Task 20', 'Description for task 20', 'completed'),
('Task 21', 'Description for task 21', 'pending'),
('Task 22', 'Description for task 22', 'completed'),
('Task 23', 'Description for task 23', 'pending'),
('Task 24', 'Description for task 24', 'completed'),
('Task 25', 'Description for task 25', 'pending');



CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) 



INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, 'evan@gmail.com', 'changeme', 'admin'),
(2, 'evan@mail.com', 'secrET123#@', 'user');
