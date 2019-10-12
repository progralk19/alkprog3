-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: nodemysql
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `testevent`
--

DROP TABLE IF EXISTS `testevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `testevent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `bill_type` varchar(45) DEFAULT NULL,
  `client` varchar(45) DEFAULT NULL,
  `therapist` varchar(45) DEFAULT NULL,
  `start` timestamp NULL DEFAULT NULL,
  `end` timestamp NULL DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `repeats` varchar(5) DEFAULT NULL,
  `repeat_option` varchar(45) DEFAULT NULL,
  `end_repeat` varchar(45) DEFAULT NULL,
  `num_occurences` varchar(45) DEFAULT NULL,
  `end_date_occurrence` date DEFAULT NULL,
  `custom_frequency` varchar(45) DEFAULT NULL,
  `repeat_num_days` varchar(45) DEFAULT NULL,
  `sun` varchar(5) DEFAULT NULL,
  `mon` varchar(5) DEFAULT NULL,
  `tues` varchar(5) DEFAULT NULL,
  `wed` varchar(5) DEFAULT NULL,
  `thu` varchar(5) DEFAULT NULL,
  `fri` varchar(5) DEFAULT NULL,
  `sat` varchar(5) DEFAULT NULL,
  `series_start_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=628 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testevent`
--

LOCK TABLES `testevent` WRITE;
/*!40000 ALTER TABLE `testevent` DISABLE KEYS */;
INSERT INTO `testevent` VALUES (615,'Billy Joe','','Billy Joe','Hermione Grainger','2019-10-12 03:23:45','2019-10-12 04:23:00','','','true','Custom','After','3','2019-10-11','Every x days','2','false','false','false','false','false','false','false','615'),(616,'Billy Joe','','Billy Joe','Hermione Grainger','2019-10-14 03:23:45','2019-10-14 04:23:00','','','true','Custom','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'615'),(617,'Billy Joe','','Billy Joe','Hermione Grainger','2019-10-16 03:23:45','2019-10-15 16:23:00','','','true','Custom','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'615'),(618,'Sarah Silver','','Sarah Silver','Harry Potter','2019-10-12 03:25:06','2019-10-12 04:25:06','','','true','Custom','After','4','2019-10-11','Specific Days','','false','true','true','false','false','false','true','618'),(619,'Sarah Silver','','Sarah Silver','Harry Potter','2019-10-13 03:25:06','2019-10-13 04:25:06','','','true','Custom','After','4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'618'),(620,'Sarah Silver','','Sarah Silver','Harry Potter','2019-10-15 03:25:06','2019-10-15 04:25:06','','','true','Custom','After','4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'618'),(621,'Sarah Silver','','Sarah Silver','Harry Potter','2019-10-16 03:25:06','2019-10-16 04:25:06','','','true','Custom','After','4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'618'),(625,'Jaren Jones','','Jaren Jones','Harry Potter','2019-10-12 03:28:17','2019-10-12 04:28:00','','','true','Weekly','On Date','','2019-10-11','','','false','false','false','false','false','false','false','625'),(626,'Jaren Jones','','Jaren Jones','Harry Potter','2019-10-19 03:28:17','2019-10-19 04:28:00','','','true','Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'625'),(627,'Jaren Jones','','Jaren Jones','Harry Potter','2019-10-26 03:28:17','2019-10-26 04:28:00','','','true','Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'625');
/*!40000 ALTER TABLE `testevent` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-11 23:32:07
