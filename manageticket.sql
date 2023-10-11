-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 10 Eyl 2023, 22:46:56
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `manageticket`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin`
--

CREATE TABLE `admin` (
  `aid` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(150) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `admin`
--

INSERT INTO `admin` (`aid`, `description`, `email`, `name`, `password`, `status`, `surname`, `title`) VALUES
(1, 'admin description', 'isa@mail.com', 'İsa', '12345', b'1', 'Hatipoğlu', 'Uzman');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `operator`
--

CREATE TABLE `operator` (
  `oid` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(150) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `operator`
--

INSERT INTO `operator` (`oid`, `description`, `email`, `name`, `password`, `status`, `surname`, `title`) VALUES
(1, 'Operator Description', 'selman@mail.com', 'Selman', '12345', b'1', 'Ulu', 'Destek Uzmanı');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ticket`
--

CREATE TABLE `ticket` (
  `tid` bigint(20) NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `related_person` varchar(255) DEFAULT NULL,
  `requesting` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `user_uid` bigint(20) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `requester` varchar(255) DEFAULT NULL,
  `solution_provider` varchar(255) DEFAULT NULL,
  `ticked_type` varchar(255) DEFAULT NULL,
  `departmant_manager` varchar(255) DEFAULT NULL,
  `status_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `ticket`
--

INSERT INTO `ticket` (`tid`, `create_date`, `description`, `related_person`, `requesting`, `status`, `subject`, `user_uid`, `category`, `requester`, `solution_provider`, `ticked_type`, `departmant_manager`, `status_type`) VALUES
(1, NULL, 'test', 'test', 'test', NULL, 'tet', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, 'asd', 'asd', 'asd', NULL, 'asd', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, 'test', 'ismail.mert', '', NULL, 'pc arıza', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, 'test', 'ismail.mert', '', NULL, 'pc arıza', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, 'test2', 'ismail.mert2', '', NULL, 'pc arıza2', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, NULL, 'test3', 'test3', '', NULL, 'test3', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, 'test34', 'test34', '', NULL, 'test34', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, NULL, 'asd', 'asd', '', NULL, 'asd', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, NULL, 'asd', 'asd', '', NULL, 'asd', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, NULL, 'asd', 'asd', '', NULL, 'asd', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, NULL, 'asd', 'asd', '', NULL, 'asd', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, NULL, 'wer', 'wer', '', NULL, 'wer', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, NULL, 'test desc', 'isa', 'test', NULL, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, NULL, 'zxczxczxcxz', 'zxc', '', NULL, 'zxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, NULL, 'dsfdsfghghj', 'sdfsd', '', NULL, 'sdfg', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, NULL, 'dsfdsfghghj', 'sdfsd', '', NULL, 'sdfg', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, NULL, 'Mailim çalışmıyor', 'hamdi.doğan', '', NULL, 'mail', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, NULL, 'tets', 'tetse', 'teset', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, NULL, 'test', 'tetse', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, NULL, 'tets', 'tetse', 'testset', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, NULL, 'asc', 'asc', '', NULL, 'sac', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, NULL, 'cfghdh', NULL, NULL, NULL, 'ert', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, NULL, 'testestetestsetest', NULL, NULL, NULL, 'teststetse', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, NULL, 'ertreertreerrer', NULL, NULL, NULL, 'retr', NULL, NULL, '', 'fehim.gursel', '', NULL, NULL),
(25, NULL, 'test ticket', NULL, NULL, NULL, 'tetse', NULL, NULL, '', 'selman.ulu', 'Lan', NULL, NULL),
(26, NULL, 'isa.hatipoglu', NULL, NULL, NULL, 'Firewall kural', NULL, NULL, '', 'Firewall', 'Osman.Eroglu', 'Açık', ''),
(27, NULL, 'isa.hatipoglu', NULL, NULL, NULL, 'deneme ticket', NULL, NULL, '', 'Sistem', 'ismail.Mert', 'Kapandı', '');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ticket_operator`
--

CREATE TABLE `ticket_operator` (
  `ticket_tid` bigint(20) NOT NULL,
  `operator_oid` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user`
--

CREATE TABLE `user` (
  `uid` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(150) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `user`
--

INSERT INTO `user` (`uid`, `description`, `email`, `name`, `password`, `status`, `surname`, `title`) VALUES
(1, 'General user', 'ali@mail.com', 'Ali', '12345', b'1', 'Beke', 'Danışma'),
(2, NULL, 'veli@mail.com', 'Veli', '12345', b'1', 'Kedi', NULL),
(3, 'Test', 'can@mail.com', 'Can', '12345', b'1', 'Demir', 'Muhasebe');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`),
  ADD UNIQUE KEY `UK_c0r9atamxvbhjjvy5j8da1kam` (`email`);

--
-- Tablo için indeksler `operator`
--
ALTER TABLE `operator`
  ADD PRIMARY KEY (`oid`),
  ADD UNIQUE KEY `UK_hkuekv1hsu4avq8y9np4x7wtb` (`email`);

--
-- Tablo için indeksler `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`tid`),
  ADD KEY `FKly488ukcbjo5ch7pvy2b3m507` (`user_uid`);

--
-- Tablo için indeksler `ticket_operator`
--
ALTER TABLE `ticket_operator`
  ADD UNIQUE KEY `UK_imp44j2f8amdg90539m07dda6` (`operator_oid`),
  ADD KEY `FKh8y19nccgolgs26pkbob6d8gx` (`ticket_tid`);

--
-- Tablo için indeksler `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `operator`
--
ALTER TABLE `operator`
  MODIFY `oid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `ticket`
--
ALTER TABLE `ticket`
  MODIFY `tid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Tablo için AUTO_INCREMENT değeri `user`
--
ALTER TABLE `user`
  MODIFY `uid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `FKly488ukcbjo5ch7pvy2b3m507` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`);

--
-- Tablo kısıtlamaları `ticket_operator`
--
ALTER TABLE `ticket_operator`
  ADD CONSTRAINT `FKbnn154qd8n7sft1790p2mqq9n` FOREIGN KEY (`operator_oid`) REFERENCES `operator` (`oid`),
  ADD CONSTRAINT `FKh8y19nccgolgs26pkbob6d8gx` FOREIGN KEY (`ticket_tid`) REFERENCES `ticket` (`tid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
