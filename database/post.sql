-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2020 at 09:22 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `post`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `nama_category` varchar(164) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `nama_category`) VALUES
(1, 'Makanan'),
(2, 'Minuman'),
(3, 'Makanan Ringan'),
(4, 'Makanan Berat'),
(5, 'Makanan Basi'),
(6, 'Penutup'),
(7, 'Camilan'),
(23, 'Buah-buahan'),
(25, 'Sayuran'),
(26, 'Daun'),
(28, 'Rrrr');

-- --------------------------------------------------------

--
-- Table structure for table `detail`
--

CREATE TABLE `detail` (
  `faktur` varchar(20) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail`
--

INSERT INTO `detail` (`faktur`, `id_product`, `qty`, `total`) VALUES
('1582097485727', 59, 1, 1000),
('1582097485727', 58, 1, 1000),
('1582097485727', 122, 1, 35),
('1582097485727', 123, 1, 1000),
('1582097555225', 123, 5, 5000),
('1582098469575', 123, 3, 3000),
('1584955540227', 58, 1, 1000),
('1584955540227', 142, 1, 9000),
('1584955540227', 122, 1, 35),
('1584955540227', 139, 1, 300),
('1584955540227', 123, 1, 1000),
('1584955540227', 137, 1, 2000),
('1584955540227', 140, 1, 400),
('1584955540227', 121, 1, 234),
('1584955540227', 120, 1, 1000),
('1584955540227', 141, 1, 90),
('1584955540227', 60, 1, 12000),
('1584955540227', 59, 1, 1000),
('1584955621140', 58, 58, 58000),
('1584955662375', 58, 3, 3000),
('1584955709635', 58, 10, 10000),
('1584955739649', 122, 32, 1120),
('1584955769192', 142, 79, 711000),
('1584955797782', 139, 69, 20700),
('1584956895822', 123, 1, 1000),
('1584956895822', 137, 1, 2000),
('1584956895822', 121, 1, 234),
('1584956895822', 120, 1, 1000),
('1584956895822', 59, 1, 1000),
('1584956895822', 60, 1, 12000),
('1584956895822', 141, 1, 90),
('1584956895822', 140, 1, 400),
('1584976373291', 137, 18, 36000),
('1584976373291', 144, 1, 700),
('1584976373291', 141, 1, 90),
('1584976373291', 121, 1, 234),
('1585044730845', 146, 1, 600),
('1585044805924', 146, 32, 19200),
('1585401195431', 123, 1, 1000),
('1585401195431', 146, 1, 600),
('1585401230443', 146, 1, 600),
('1585401246163', 146, 5, 3000),
('1585464302257', 146, 4, 2400),
('1585464302257', 123, 1, 1000),
('1585491071410', 146, 1, 600),
('1585491292227', 58, 1, 1000),
('1585492933377', 123, 1, 1000),
('1585493063135', 146, 1, 600),
('1585493245386', 146, 1, 600),
('1585493245386', 123, 1, 1000),
('1585493295748', 146, 1, 600),
('1585493295748', 123, 1, 1000),
('1585493528251', 123, 1, 1000),
('1585493546411', 146, 1, 600),
('1585493689629', 146, 1, 600),
('1585493689629', 123, 1, 1000),
('1585493712266', 123, 1, 1000),
('1585494180788', 123, 1, 1000),
('1585494180788', 58, 1, 1000),
('1585494858805', 123, 1, 1000),
('1585494858805', 58, 1, 1000),
('1585494858805', 137, 1, 2000),
('1585494858805', 152, 1, 2000),
('1585494858805', 150, 1, 20000),
('1585494858805', 149, 1, 2000),
('1585494858805', 144, 1, 700),
('1585494858805', 153, 1, 2000),
('1585494858805', 155, 1, 5000),
('1585494858805', 59, 1, 1000),
('1585494858805', 147, 1, 2000),
('1585494858805', 120, 1, 1000),
('1585494858805', 156, 1, 2000),
('1585494858805', 60, 1, 12000),
('1585494858805', 140, 1, 400),
('1585494858805', 154, 1, 2888),
('1585494858805', 138, 1, 5000),
('1585494858805', 61, 1, 5000),
('1585494858805', 157, 1, 1000),
('1585494858805', 151, 1, 10),
('1585496695009', 123, 4, 4000),
('1585641154469', 157, 1, 1000),
('1585648153417', 123, 1, 1000),
('1585648153417', 58, 1, 1000),
('1585648153417', 137, 1, 2000),
('1585648181359', 123, 1, 1000),
('1585648181359', 58, 5, 5000),
('1585651344329', 157, 1, 1000),
('1585651363075', 123, 5, 5000),
('1585652207162', 123, 1, 1000),
('1585652207162', 58, 3, 3000),
('1585652240639', 123, 3, 3000),
('1585652664496', 58, 2, 2000),
('1585652699620', 155, 3, 15000),
('1585652699620', 153, 2, 4000),
('1585652699620', 144, 2, 1400),
('1585653283775', 123, 1, 1000),
('1585653283775', 58, 1, 1000),
('1585653283775', 137, 1, 2000),
('1585653283775', 152, 1, 2000),
('1585653283775', 150, 1, 20000),
('1585653283775', 149, 1, 2000),
('1585653283775', 144, 1, 700),
('1585653283775', 153, 1, 2000),
('1585653283775', 159, 1, 2000),
('1585653283775', 155, 1, 5000),
('1585653283775', 59, 1, 1000),
('1585653283775', 147, 1, 2000),
('1585653283775', 120, 1, 1000),
('1585653283775', 156, 1, 2000),
('1585653283775', 60, 1, 12000),
('1585653283775', 140, 1, 400),
('1585653283775', 138, 1, 5000),
('1585653283775', 61, 1, 5000),
('1585653283775', 157, 2, 2000);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `faktur` varchar(20) NOT NULL,
  `date_pay` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_user` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`faktur`, `date_pay`, `id_user`, `qty`, `total`) VALUES
('1582097485727', '2020-02-18 17:00:00', 12, 4, 3035),
('1582097555225', '2020-02-18 07:32:36', 12, 4, 4000),
('1582098469575', '2020-02-18 07:47:51', 12, 2, 2000),
('1584955540227', '2020-03-23 09:25:41', 17, 12, 28059),
('1584955606161', '2020-03-23 09:26:47', 17, 62, 62000),
('1584955612592', '2020-03-23 09:26:53', 17, 62, 62000),
('1584955621140', '2020-03-23 09:27:02', 17, 58, 58000),
('1584955662375', '2020-03-23 09:27:44', 17, 3, 3000),
('1584955709635', '2020-03-23 09:28:30', 17, 10, 10000),
('1584955739649', '2020-03-23 09:29:00', 17, 32, 1120),
('1584955769192', '2020-03-23 09:29:30', 17, 79, 711000),
('1584955797782', '2020-03-23 09:29:58', 17, 69, 20700),
('1584956895822', '2020-03-23 09:48:16', 17, 8, 17724),
('1584976373291', '2020-03-23 15:12:55', 17, 21, 37024),
('1585044730845', '2020-03-24 10:12:11', 17, 1, 600),
('1585044805924', '2020-03-24 10:13:27', 17, 32, 19200),
('1585401195431', '2020-03-28 13:13:19', 10, 2, 1600),
('1585401230443', '2020-03-28 13:13:53', 10, 1, 600),
('1585401246163', '2020-03-28 13:14:09', 10, 1, 3000),
('1585464302257', '2020-03-29 06:45:05', 10, 2, 3400),
('1585491071410', '2020-03-29 14:11:23', 39, 1, 600),
('1585491292227', '2020-03-29 14:14:54', 39, 1, 1000),
('1585492933377', '2020-03-29 14:42:16', 10, 1, 1000),
('1585493063135', '2020-03-29 14:44:26', 10, 1, 600),
('1585493245386', '2020-03-29 14:47:28', 10, 2, 1600),
('1585493295748', '2020-03-29 14:48:18', 10, 2, 1600),
('1585493528251', '2020-03-29 14:52:11', 10, 1, 1000),
('1585493546411', '2020-03-29 14:52:29', 10, 1, 600),
('1585493689629', '2020-03-29 14:54:52', 10, 2, 1600),
('1585493712266', '2020-03-29 14:55:15', 10, 1, 1000),
('1585494180788', '2020-03-29 15:03:07', 10, 2, 2000),
('1585494858805', '2020-03-29 15:14:23', 10, 20, 67998),
('1585496695009', '2020-03-29 15:44:58', 10, 1, 4000),
('1585641154469', '2020-03-31 07:52:39', 10, 2, 3000),
('1585648153417', '2020-03-31 09:49:17', 10, 3, 4000),
('1585648181359', '2020-03-31 09:49:45', 10, 2, 6000),
('1585651344329', '2020-03-31 10:42:28', 10, 1, 1000),
('1585651363075', '2020-03-31 10:42:47', 10, 1, 5000),
('1585652207162', '2020-03-31 10:56:53', 10, 2, 4000),
('1585652240639', '2020-03-31 10:57:24', 10, 3, 3000),
('1585652664496', '2020-03-31 11:04:27', 10, 2, 2000),
('1585652699620', '2020-03-31 11:05:02', 10, 7, 20400),
('1585653283775', '2020-03-31 11:14:46', 10, 20, 68100);

-- --------------------------------------------------------

--
-- Table structure for table `product_name`
--

CREATE TABLE `product_name` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` varchar(128) NOT NULL,
  `price` int(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `image` varchar(128) NOT NULL,
  `id_category` int(11) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_name`
--

INSERT INTO `product_name` (`id`, `name`, `description`, `price`, `stok`, `image`, `id_category`, `update_at`, `created_at`) VALUES
(58, 'Ayam Bakar', 'ayam yang dibakar', 1000, 15, 'http://192.168.43.189:4001/uploads/2020-03-28T06-27-31.392Z-image-f954e095-e03a-44bf-ae27-45bc19ca926f.jpg', 1, '2020-03-28 13:24:30', '2020-02-13 01:50:07'),
(59, 'Jus mangga', 'mangga yang dijus', 1000, 73, 'http://192.168.43.189:4001/uploads/2020-03-28T13-23-38.818Z-image-49e43ff6-f7cd-4782-9d95-af8a29f50c47.jpg', 2, '2020-03-28 13:23:38', '2020-02-13 01:50:46'),
(60, 'Nasi Goreng ku', 'Enak dimakan sore sore', 12000, 69, 'http://192.168.43.189:4001/uploads/2020-03-28T13-30-22.023Z-image-414b17a6-52c9-4bea-8c1b-8cec09e106f7.jpg', 1, '2020-03-28 13:30:22', '2020-02-13 01:51:20'),
(61, 'Soto ayam', 'soto ada ayamnya', 5000, 84, 'http://192.168.43.189:4001/uploads/2020-03-28T13-29-27.933Z-image-e2634adb-17a2-4dc5-bf4a-eef890d84754.jpg', 1, '2020-03-28 13:29:28', '2020-02-13 01:51:54'),
(120, 'Kode', 'dfgdfg', 1000, 1, 'http://192.168.43.189:4001/uploads/2020-03-28T13-29-54.667Z-image-0d3ad6d9-7534-403e-9c6f-417e34e34185.jpg', 2, '2020-03-28 13:29:54', '2020-02-17 13:55:48'),
(123, 'aduhm', 'adklmlkdlaskdlskandlsakd', 1000, 21, 'http://192.168.43.189:4001/uploads/2020-03-28T13-20-11.664Z-image-5ad1b2e7-037f-4fbb-9db5-8c7ac3820925.jpg', 2, '2020-03-28 13:20:11', '2020-02-18 13:57:20'),
(137, 'coba', 'asasc', 2000, 17, 'http://192.168.43.189:4001/uploads/2020-03-28T06-25-48.836Z-LiveMessage_2020-01-21-07-18-17.gif', 1, '2020-03-31 09:49:03', '2020-02-19 10:23:01'),
(138, 'sambel terasi', 'eank', 5000, 38, 'http://192.168.43.189:4001/uploads/2020-03-28T13-29-17.355Z-image-0338fff2-b6fa-4b87-9bd5-5eefc25694a4.jpg', 1, '2020-03-28 13:29:17', '2020-03-22 09:39:41'),
(139, 'coba', 'Kosong', 300, 0, 'http://192.168.43.189:4001/uploads/2020-03-28T13-18-38.228Z-image-3c1a4be8-756d-4fed-8af3-6cecc8952814.jpg', 1, '2020-03-28 13:25:01', '2020-03-23 08:19:15'),
(140, 'product', 'ccc', 400, 76, 'http://192.168.43.189:4001/uploads/2020-03-28T13-29-00.826Z-LiveMessage_2020-01-21-07-18-17.gif', 2, '2020-03-28 13:29:01', '2020-03-23 08:19:43'),
(142, 'cohh', 'cooh', 9000, 0, 'http://192.168.43.189:4001/uploads/2020-03-28T13-18-55.613Z-image-62583735-69be-4515-87b3-54f7df4db4dc.jpg', 1, '2020-03-28 13:18:55', '2020-03-23 08:20:58'),
(144, 'ini pake pageination', 'paged', 700, 35, 'http://192.168.43.189:4001/uploads/2020-03-28T13-21-16.218Z-69142852_800045413752352_7943936380477039090_n.jpg', 1, '2020-03-28 13:21:16', '2020-03-23 14:59:36'),
(146, 'added', 'add', 600, 0, 'http://192.168.43.189:4001/uploads/2020-03-28T13-19-57.202Z-image-2d84225b-775c-4604-93bb-efc0def6d23e.jpg', 1, '2020-03-29 13:51:31', '2020-03-24 10:05:58'),
(147, 'kelapa', 'kelaap', 2000, 1998, 'http://192.168.43.189:4001/uploads/2020-03-28T13-24-11.046Z-image-dbaa9feb-dcf9-448a-8f59-79bc5b2203ad.jpg', 2, '2020-03-28 13:24:11', '2020-03-24 10:06:36'),
(149, 'Hujan', 'Hyjffggg', 2000, 28, 'http://192.168.43.189:4001/uploads/2020-03-28T13-21-01.522Z-PicsArt_03-27-01.34.35.png', 4, '2020-03-28 13:21:01', '2020-03-28 01:05:27'),
(150, 'Gula aren', 'Duuuuuh', 20000, 48, 'http://192.168.43.189:4001/uploads/2020-03-28T13-20-48.319Z-image-7c438bb0-2b7a-4228-becb-1a57b2231640.jpg', 1, '2020-03-31 10:35:14', '2020-03-28 01:06:23'),
(151, 'Yyuy', 'Jj', 2000, 0, 'http://192.168.43.189:4001/uploads/2020-03-28T13-30-37.646Z-image-0cd85daf-0126-4b04-9de9-54fbec3a5bff.jpg', 4, '2020-03-31 07:52:20', '2020-03-28 06:23:22'),
(152, 'Dwfwf', 'Y3t3', 2000, 8, 'http://192.168.43.189:4001/uploads/2020-03-28T06-24-57.724Z-LiveMessage_2019-12-22-01-03-06.gif', 1, '2020-03-28 12:52:35', '2020-03-28 06:24:58'),
(153, 'Jajal', 'Tatat', 2000, 46, 'http://192.168.43.189:4001/uploads/2020-03-28T06-49-46.042Z-image-a1093924-8db2-4bfb-8846-731514f57936.jpg', 1, '2020-03-28 06:49:46', '2020-03-28 06:49:46'),
(155, 'Jangkrik', 'Bos', 5000, 25, 'http://192.168.43.189:4001/uploads/2020-03-29T07-11-00.195Z-image-e1fb3f07-0920-448d-81db-482a0c99ba41.jpg', 2, '2020-03-29 07:11:00', '2020-03-29 07:11:00'),
(156, 'Naruto', 'Ramen', 2000, 48, 'http://192.168.43.189:4001/uploads/2020-03-29T07-11-48.040Z-image-62cd901f-d474-435d-a3b1-37920df0379c.jpg', 1, '2020-03-29 07:11:48', '2020-03-29 07:11:48'),
(157, 'Yough', 'Uyh', 1000, 15, 'http://192.168.43.189:4001/uploads/2020-03-29T07-12-06.766Z-image-336f04ff-fa36-44d0-97a3-d2b28a04f2f4.jpg', 2, '2020-03-29 07:12:06', '2020-03-29 07:12:06'),
(159, 'Jambu', 'Buah', 2000, 9, 'http://192.168.43.189:4001/uploads/2020-03-31T09-52-52.980Z-image-2eeb649f-6951-4066-acd1-ba7835d3ed0f.jpg', 4, '2020-03-31 09:52:53', '2020-03-31 09:52:53');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`) VALUES
(10, 'udin', '$2a$10$ufylJnA3gEqRel5mg6EshuxOSePA879EgdTEBXBjVSMDtBqqflb9W', 1),
(11, 'kudin', '$2a$10$qKEgI08uHz6fZ3S.xO.FOuwmPbT1C24I/FBkT5pfGDjuX7bPNkKMe', 2),
(12, 'admin', '$2a$10$iGycvgp22O6r8mhK8Pu0qOPPjefpjRaOL6eUgzqdOejejqheDr776', 1),
(13, 'namikaze', '$2a$10$tRCkb4SM5XuDQMkDBx3tzO3/k6T9TTJc/oE/eZRYDSfdNA5eFOqxq', 2),
(14, 'kamikaze', '$2a$10$KH4dRLl7cnaubYqcE14DyebGdb4u/RWaTARBt7f8kIXg/H7rB/hCK', 2),
(15, 'admin2', '$2a$10$QQ2uQ1f/AvaYvy36rGj4x.ssjSG0agPXeMsqHMD8jIXOQVEzLWIom', 2),
(16, 'din', '$2a$10$33q2/JT7e87.WZqUMTC/1.0I8OadHKBQvXZYqc7DjtQZt.ARdWs4y', 1),
(17, 'siapa', '$2a$10$t.u0aNAeuGWlkeeDpAacYON76G7mQI7nxw5IgK2Sq1jBgV/rErBL.', 2),
(18, 'admin9', '$2a$10$lyatQaCh2dXJPNypN.hlGuDv3gdS4VXwjXtbTdRbOt005yGO7KSGK', 2),
(19, 'kuhud', '$2a$10$/vuOjjD/bqUoTCtgaxmyr.2HoPFXDyOMXxO0vnua0A0.M2bTyt47y', 2),
(20, 'udin5', '$2a$10$I3uitK25fQMiPJDLbmv9Ee5nBzu1N54cPwwo/Vbn6f1W..a4WodJu', 2),
(21, 'udink', '$2a$10$N8oE01qxE8JOIUFd2TcvWOe6IrpVD66LwZkJvjSfGdpuFaF7qiJ3G', 2),
(22, 'misrudin', '$2a$10$D2WTV2b83KlBCdg198IbvOW8jvs/1ncigGshpbeBP3Gwa/ljCx7v.', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`faktur`);

--
-- Indexes for table `product_name`
--
ALTER TABLE `product_name`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `product_name`
--
ALTER TABLE `product_name`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
