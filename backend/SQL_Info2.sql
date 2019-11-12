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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Category 1'),(2,'Category 2'),(3,'Test');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(4) DEFAULT NULL,
  `title` varchar(5) DEFAULT NULL,
  `client_full_name` varchar(45) DEFAULT NULL,
  `client_first_name` varchar(45) DEFAULT NULL,
  `client_last_name` varchar(45) DEFAULT NULL,
  `client_initials` varchar(45) DEFAULT NULL,
  `client_type` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `assi_therapist_full_name` varchar(45) DEFAULT NULL,
  `assi_therapist_first` varchar(45) DEFAULT NULL,
  `assi_therapist_last` varchar(45) DEFAULT NULL,
  `facility` varchar(45) DEFAULT NULL,
  `session_type` varchar(45) DEFAULT NULL,
  `session_cost` double DEFAULT NULL,
  `session_length` double DEFAULT NULL,
  `bday` varchar(45) DEFAULT NULL,
  `password` varchar(75) DEFAULT NULL,
  `confirm_password` varchar(45) DEFAULT NULL,
  `notes` varchar(300) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `contact_title` varchar(45) DEFAULT NULL,
  `contact_first_name` varchar(45) DEFAULT NULL,
  `contact_last_name` varchar(45) DEFAULT NULL,
  `contact_street_address` varchar(45) DEFAULT NULL,
  `contact_city` varchar(45) DEFAULT NULL,
  `contact_state` varchar(45) DEFAULT NULL,
  `contact_zip` varchar(45) DEFAULT NULL,
  `contact_email` varchar(45) DEFAULT NULL,
  `contact_phone` varchar(45) DEFAULT NULL,
  `contact_secondary_phone` varchar(45) DEFAULT NULL,
  `billing_first_name` varchar(45) DEFAULT NULL,
  `billing_last_name` varchar(45) DEFAULT NULL,
  `billing_full_name` varchar(45) DEFAULT NULL,
  `payment_type` varchar(45) DEFAULT NULL,
  `card_type` varchar(45) DEFAULT NULL,
  `card_num` varchar(45) DEFAULT NULL,
  `card_exp_date` varchar(45) DEFAULT NULL,
  `cvv` varchar(45) DEFAULT NULL,
  `billing_street_address` varchar(45) DEFAULT NULL,
  `name_on_card` varchar(45) DEFAULT NULL,
  `billing_city` varchar(45) DEFAULT NULL,
  `billing_state` varchar(45) DEFAULT NULL,
  `billing_email` varchar(45) DEFAULT NULL,
  `billing_phone` varchar(45) DEFAULT NULL,
  `billing_zip` varchar(45) DEFAULT NULL,
  `contact2_active` varchar(5) DEFAULT NULL,
  `contact_title_2` varchar(45) DEFAULT NULL,
  `contact_first_name_2` varchar(45) DEFAULT NULL,
  `contact_last_name_2` varchar(45) DEFAULT NULL,
  `contact_street_address_2` varchar(45) DEFAULT NULL,
  `contact_city_2` varchar(45) DEFAULT NULL,
  `contact_state_2` varchar(45) DEFAULT NULL,
  `contact_zip_2` varchar(45) DEFAULT NULL,
  `contact_email_2` varchar(45) DEFAULT NULL,
  `contact_phone_2` varchar(45) DEFAULT NULL,
  `contact_secondary_phone_2` varchar(45) DEFAULT NULL,
  `contact3_active` varchar(5) DEFAULT NULL,
  `contact_title_3` varchar(45) DEFAULT NULL,
  `contact_first_name_3` varchar(45) DEFAULT NULL,
  `contact_last_name_3` varchar(45) DEFAULT NULL,
  `contact_street_address_3` varchar(45) DEFAULT NULL,
  `contact_city_3` varchar(45) DEFAULT NULL,
  `contact_state_3` varchar(45) DEFAULT NULL,
  `contact_zip_3` varchar(45) DEFAULT NULL,
  `contact_email_3` varchar(45) DEFAULT NULL,
  `contact_phone_3` varchar(45) DEFAULT NULL,
  `contact_secondary_phone_3` varchar(45) DEFAULT NULL,
  `contact1_receive_email` varchar(5) DEFAULT NULL,
  `contact2_receive_email` varchar(5) DEFAULT NULL,
  `contact3_receive_email` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,1,'Mr.','Billy Joe','Billy','Joe','BJ','Individual','123-444-5555','123 Fake Street','bjoe@mail.com','Harry Potter','Harry','Potter',NULL,'Lessons',20,30,'7/3/02','test','test','everything is great','Plano','TX','75023','Mr.','Bob','Joe','123 Fake Street','Plano','TX','75023','bobjoe@mail.com','123-222-2222',NULL,'Bob','Joe','Bob Joe','Card','Visa','11111111111','10/25','123','123 Fake Street','Bob Joe','Plano','TX','bjoe@mail.com','123-222-2222','75023','1','Mr.','Contact','Two','Avenue 2 street','Tyler','TX','11111','c2@mail.com','555-444-3333',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','1',NULL),(2,1,NULL,'Sarah Silver','Sarah','Silver','SS','Facility','123-222-3333','444 Clark Drive','ssilver@mail.com','Lisa Simpson','Lisa','Simpson','Clark High School','Lessons',1,2,'6/3/04','123','123','she is nice','Allen','TX','70986','Ms.','Sarah','Silver','432 Ink Lane','Allen','TX','75643','ssilver@mail.com','555-555-5555',NULL,'Sarah','Silver','Sarah Silver','Check',NULL,NULL,NULL,NULL,'4444 Street',NULL,'Allen','TX','ssilver@mail.com','111-111-1111','34342','1','Mrs.','Contact','Three','Avenue 3 Lane','Houston','TX','34333','c22@mail.com','444-555-4444',NULL,'1','Mx.','C3','PO','123 Moon Lane','Moon','TX','00033','c3po@mail.com','300-222-2222',NULL,'1','0','1'),(3,1,NULL,'Jaren Jones','Jaren','Jones','JJ','Individual','123-111-2232','234 Tree Street','jjones@mail.com','Harry Potter','Harry','Potter',NULL,'Therapy',0,0,'5/7/05','124','124','fantastic so far','Dallas','TX','44444','Mrs.','No','Name','1111 Lane ','Dallas','TX','12345','nname@mail.com','777-777-7777','888-888-8888','Ned','Name','Ned Name','Card','Discover','3333333333','2/23','432','1111 Lane','Ned E Name','Dallas','TX','email@mail.com','222-222-2222','22424',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL),(4,1,NULL,'Ian Stark','Ian','Stark','IS','Individual','122-232-4444','645 Elm Ave','istark@mail.com','Jake Jakerson','Jake','riff',NULL,'Lessons',7,8,'8/2/01','1244','1244','nothing is going on','Smithtown','TX','44444','Mr.','Fake','Fake','3214 Elm Court','Smithtown','TX','54321','ffake@mail.com','234-334-3444','121-112-2222','Fred','Fake','Fred Fake','Check',NULL,NULL,NULL,NULL,'2343 Ave',NULL,'Plano','TX','money@mail.com','444-444-4444','12345',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL),(5,1,NULL,'John Jackson','Johnny','Jackson','JJ','Facility','122-222-1111','789 Tom Lane','johnjack@mail.com','Hermione Grainger','Hermione','Grainger','Thomas Elementary','Lessons',1,11,'9/6/12','4444','4444','everything is cool','Austin','TX','33322','Miss','Jill','Jackson','4352 Imagine Lane','Austin','TX','33333','jjackson@mail.com','111-111-1111',NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,'5555 Lane',NULL,'Austin','TX','jilljackson@mail.com','555-555-5544','54321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL),(70,1,NULL,'Joe Jackson','Joe','Jackson','JJ','Facility','122-222-1111','789 Tom Lane','joejack@mail.com','Hermione Grainger','Hermione','Grainger','Thomas Elementary','Lessons',1,11,'10/4/13','7777','7777','so far so good','Austin','TX','23424','Miss','Jill','Jackson','4352 Imagine Lane','Austin','TX','33333','jjackson@mail.com','111-111-1111',NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,'5555 Lanr',NULL,'Austin','TX','jilljackson@mail.com','555-555-5544','54321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL),(71,1,NULL,'Joan Jackson','Joan','Jackson',NULL,'Facility',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Jill','Jackson',NULL,NULL,NULL,NULL,'jjackson@mail.com',NULL,NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'jilljackson@mail.com','555-555-5544',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(4) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `member_full_name` varchar(45) DEFAULT NULL,
  `member_first_name` varchar(45) DEFAULT NULL,
  `member_last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `bday` varchar(45) DEFAULT NULL,
  `npi` varchar(45) DEFAULT NULL,
  `pass` varchar(75) DEFAULT NULL,
  `notes` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,1,'Mr.','Harry Potter','Harry','Potter','hpotter@gmail.com','123-456-1111','713 Hogwarts Lane','London','77777','Diagon Alley',NULL,'731890','test123',NULL,'Administrator'),(2,1,'Ms.','Hermione Grainger','Hermione','Grainger','email@mail.com','123-333-3333','123 Fake Street','Plano','75023','Wherever',NULL,'2213414','pass',NULL,'Intern'),(3,1,'Mr.','Joe Bob','Joe','Bob','jbob@mail.com','222-223-3333','123 Street Lane','Frisco','12345','Nowhere',NULL,'2223324','ooo',NULL,'Therapist'),(4,1,'Miss','Jennifer Robinson','Jennifer','Robinson','jrob@mail.com','122-222-2222','222 Nowhere','Allen','12333','Somewhere',NULL,'123214','ooee',NULL,'Administrator'),(5,1,'Dr','Lisa Simpson','Lisa','Simpson','lsimpson@mail.com','111-222-2222','222 Evergreen Terrace','Springfield','22244','Everywhere',NULL,'345221','simp',NULL,'Therapist'),(38,1,'Mr.','Jake Jakerson','Jake','Jakerson','jake@mail.com','233-333-3333','123 Jake Street','Jaketopia','33333','Main Building',NULL,'323232','$2b$10$BpKBvvhOsAn93bCLODGOV.bmuHtdTmNp3FIQ7CjgNM8iQwxH.8md2','Jake has notes','Intern');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

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
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `notes` text,
  `attendance` varchar(30) DEFAULT NULL,
  `repeats` tinyint(5) DEFAULT NULL,
  `repeat_option` varchar(45) DEFAULT NULL,
  `end_repeat` varchar(45) DEFAULT NULL,
  `num_occurences` varchar(45) DEFAULT NULL,
  `end_date_occurrence` date DEFAULT NULL,
  `custom_frequency` varchar(45) DEFAULT NULL,
  `repeat_num_days` varchar(45) DEFAULT NULL,
  `sun` tinyint(5) DEFAULT NULL,
  `mon` tinyint(5) DEFAULT NULL,
  `tues` tinyint(5) DEFAULT NULL,
  `wed` tinyint(5) DEFAULT NULL,
  `thu` tinyint(5) DEFAULT NULL,
  `fri` tinyint(5) DEFAULT NULL,
  `sat` tinyint(5) DEFAULT NULL,
  `series_start_id` varchar(45) DEFAULT NULL,
  `billing_email` varchar(45) DEFAULT NULL,
  `session_cost` double DEFAULT NULL,
  `session_set_length` double DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `payor` varchar(45) DEFAULT NULL,
  `transType` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `method` varchar(45) DEFAULT NULL,
  `trans_date` date DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `clients_all` varchar(120) DEFAULT NULL,
  `therapist_all` varchar(120) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=838 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testevent`
--

LOCK TABLES `testevent` WRITE;
/*!40000 ALTER TABLE `testevent` DISABLE KEYS */;
INSERT INTO `testevent` VALUES (734,'Jaren Jones','','Jaren Jones','Harry Potter','2019-10-19 16:21:00','2019-10-19 17:21:00','','',NULL,NULL,0,'false','','','2019-10-19','','',0,0,0,0,0,0,0,'734','email@mail.com',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(745,'Sarah Silver','','Sarah Silver','Lisa Simpson','2019-10-22 20:30:00','2019-10-22 21:30:00','','',NULL,NULL,0,'false','','','2019-10-22','','',0,0,0,0,0,0,0,'745','ssilver@mail.com',1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(747,'Sarah Silver','','Sarah Silver','Lisa Simpson','2019-10-22 20:35:00','2019-10-22 21:35:00','','',NULL,NULL,0,'null','null','null','2019-10-22','','null',0,0,0,0,0,0,0,'747','ssilver@mail.com',1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(749,'Sarah Silver','','Sarah Silver','Lisa Simpson','2019-10-22 20:36:00','2019-10-22 21:36:00','','',NULL,NULL,0,'null','null','null','2019-10-22','','null',0,0,0,0,0,0,0,'749','ssilver@mail.com',1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(762,'Sarah Silver','Billable','Sarah Silver','Lisa Simpson','2019-11-04 19:50:00','2019-11-04 20:50:00','','Test',NULL,NULL,0,'null','null','null','2019-11-04','','null',0,0,0,0,0,0,0,'762','ssilver@mail.com',1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(763,'','Billable','','','2019-10-22 19:57:00','2019-10-22 20:57:00','','',NULL,NULL,0,'null','null','null','2019-10-22','null','null',0,0,0,0,0,0,0,'763','email@mail.com',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(764,'','Billable','','','2019-10-22 19:57:00','2019-10-22 20:57:00','','',NULL,NULL,0,'','','','2019-11-04','','',0,0,0,0,0,0,0,'764','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(771,'','Billable','','','2019-10-22 20:13:00','2019-10-22 21:13:00','','',NULL,NULL,0,'','','','2019-11-04','','',0,0,0,0,0,0,0,'771','email@mail.com',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(774,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-04 21:05:00','2019-11-04 22:05:00','','Test',NULL,NULL,0,'','','','2019-11-04','','',0,0,0,0,0,0,0,'774','email@mail.com',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(779,'Ian Stark','','Ian Stark','Jake Jakerson','2019-11-05 00:33:00','2019-11-05 01:33:00','','',NULL,NULL,0,'false','','','2019-11-05','','',0,0,0,0,0,0,0,'779','money@mail.com',7,8,'2019-11-05 00:33:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(785,'Ian Stark','','Ian Stark','Jake Jakerson','2019-11-05 00:45:00','2019-11-05 01:45:00','','',NULL,NULL,0,'false','','','2019-11-05','','',0,0,0,0,0,0,0,'785','money@mail.com',7,8,'2019-11-05 00:45:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(786,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-05 17:46:00','2019-11-05 18:46:00','','','m m mm','Absent, no notice ($)',0,'null','null','null','2019-11-05','','null',0,0,0,0,0,0,0,'786','email@mail.com',0,0,'2019-11-05 17:46:00',NULL,NULL,NULL,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(787,'Ian Stark','Billable','Ian Stark','Jake Jakerson','2019-11-05 17:46:00','2019-11-05 18:46:00','','',NULL,NULL,0,'','','','2019-11-05','','',0,0,0,0,0,0,0,'787','money@mail.com',7,8,'2019-11-05 17:46:00',NULL,NULL,NULL,NULL,NULL,'Session with Jake Jakerson',NULL,NULL,NULL),(788,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-05 17:46:00','2019-11-05 18:46:00','','',NULL,NULL,0,'null','null','null','2019-11-05','','null',0,0,0,0,0,0,0,'788','email@mail.com',0,0,'2019-11-05 17:46:00',NULL,NULL,NULL,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(789,'Joan Jackson','Billable','Joan Jackson','null','2019-11-05 17:46:00','2019-11-05 18:46:00','','',NULL,NULL,0,'null','null','null','2019-11-05','','null',0,0,0,0,0,0,0,'789','jilljackson@mail.com',0,0,'2019-11-05 17:46:00',NULL,NULL,NULL,NULL,NULL,'Session with null',NULL,NULL,NULL),(790,'Joe Jackson','Billable','Joe Jackson','Hermione Grainger','2019-11-05 17:49:00','2019-11-05 18:49:00','','','wfwfw','Absent, notice',0,'null','null','null','2019-11-05','','null',0,0,0,0,0,0,0,'790','jilljackson@mail.com',1,11,'2019-11-05 17:49:00',NULL,NULL,NULL,NULL,NULL,'Session with Hermione Grainger',NULL,NULL,NULL),(794,'Sarah Silver','Billable','Sarah Silver','Lisa Simpson','2019-11-06 18:32:00','2019-11-06 19:32:00','','','hghjgjk','Absent, no notice ($)',0,'null','null','null','2019-11-06','','null',0,0,0,0,0,0,0,'794','ssilver@mail.com',1,2,'2019-11-06 18:32:00',NULL,NULL,NULL,NULL,NULL,'description with Lisa Simpson',NULL,NULL,NULL),(795,'Jaren Jones','','Jaren Jones','Harry Potter','2019-11-07 18:34:00','2019-11-07 19:34:00','','','wdwdwd','Absent, notice',0,'false','','','2019-11-07','','',0,0,0,0,0,0,0,'795','email@mail.com',0,0,'2019-11-07 18:34:00',NULL,NULL,NULL,NULL,NULL,'Event on 2019-11-07 18:34',NULL,NULL,NULL),(796,'Billy Joe','','Billy Joe','Harry Potter','2019-11-09 19:05:00','2019-11-09 20:05:00','','','jhvhjv','Present ($)',0,'false','','','2019-11-09','','',0,0,0,0,0,0,0,'796','bjoe@mail.com',20,30,'2019-11-09 19:05:00',NULL,NULL,0,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(797,'Billy Joe','Billable','Billy Joe','Harry Potter','2019-11-16 19:06:00','2019-11-16 20:06:00','','',NULL,NULL,0,'','','','2019-11-05','','',0,0,0,0,0,0,0,'797','bjoe@mail.com',20,30,'2019-11-16 19:06:00',NULL,NULL,0,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(798,'Billy Joe','Billable','Billy Joe','Harry Potter','2019-11-23 19:08:00','2019-11-23 20:08:00','','',NULL,NULL,0,'','','','2019-11-05','','',0,0,0,0,0,0,0,'798','bjoe@mail.com',20,30,'2019-11-23 19:08:00',NULL,NULL,0,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(800,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bjoe@mail.com',0,NULL,'2019-11-24 00:00:00','Bob Joe','Payment',60,'Cash','2019-11-24','Payment',NULL,NULL,NULL),(804,'Billy Joe','Billable','Billy Joe','Harry Potter','2019-11-06 21:58:00','2019-11-06 22:58:00','','',NULL,NULL,0,'','','','2019-11-06','','',0,0,0,0,0,0,0,'804','bjoe@mail.com',20,30,'2019-11-06 21:58:00',NULL,NULL,0,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(805,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-11-06 00:00:00','Bob Joe','Payment',60,'Cash','2019-11-06','ihuuh',NULL,NULL,NULL),(806,'Billy Joe','Billable','Billy Joe','Harry Potter','2019-11-08 08:22:00','2019-11-08 09:25:00','','',NULL,NULL,0,'null','null','null','2019-11-08','','null',0,0,0,0,0,0,0,'806','bjoe@mail.com',20,30,'2019-11-08 08:22:00',NULL,NULL,0,NULL,NULL,'Session with Harry Potter',NULL,NULL,NULL),(808,'','Billable','','','2019-11-08 08:22:00','2019-11-08 09:25:00','','',NULL,NULL,0,'','','','2019-11-07','','',0,0,0,0,0,0,0,'808','',0,0,'2019-11-08 08:22:00',NULL,NULL,0,NULL,NULL,'Session with ',NULL,NULL,NULL),(810,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-09 12:02:00','2019-11-09 13:02:00','','',NULL,NULL,0,'','','','2019-11-09','','',0,0,0,0,0,0,0,'810','email@mail.com',0,0,'2019-11-09 12:02:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(812,'John Jackson','Billable','John Jackson','Hermione Grainger','2019-11-09 12:02:00','2019-11-09 13:02:00','','',NULL,NULL,0,'','','','2019-11-09','','',0,0,0,0,0,0,0,'812','jilljackson@mail.com',1,11,'2019-11-09 12:02:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(814,'Sarah Silver','Billable','Sarah Silver','Lisa Simpson','2019-11-09 12:00:00','2019-11-09 13:00:00','','',NULL,NULL,0,'','','','2019-11-09','','',0,0,0,0,0,0,0,'814','ssilver@mail.com',1,2,'2019-11-09 12:00:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(815,'Ian Stark','Billable','Ian Stark','Jake Jakerson','2019-11-09 12:00:00','2019-11-09 13:00:00','','',NULL,NULL,0,'','','','2019-11-09','','',0,0,0,0,0,0,0,'815','money@mail.com',7,8,'2019-11-09 12:00:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(816,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-09 12:00:00','2019-11-09 13:00:00','','',NULL,NULL,0,'null','null','null','2019-11-09','','null',0,0,0,0,0,0,0,'816','email@mail.com',0,0,'2019-11-09 12:00:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(817,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-09 12:00:00','2019-11-09 13:00:00','','',NULL,NULL,0,'null','null','null','2019-11-09','','null',0,0,0,0,0,0,0,'817','email@mail.com',0,0,'2019-11-09 12:00:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(818,'Jaren Jones','Billable','Jaren Jones','Harry Potter','2019-11-09 12:00:00','2019-11-09 13:00:00','','',NULL,NULL,0,'','','','2019-11-09','','',0,0,0,0,0,0,0,'818','email@mail.com',0,0,'2019-11-09 12:00:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(820,'Ian Stark','Billable','Ian Stark','Jake Jakerson','2019-11-09 12:00:00','2019-11-09 13:00:00','','',NULL,NULL,0,'null','null','null','2019-11-09','','null',0,0,0,0,0,0,0,'820','money@mail.com',7,8,'2019-11-09 12:00:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(821,'','','','','2019-11-08 12:24:00','2019-11-08 13:24:00','','',NULL,NULL,0,'false','','','2019-11-08','undefined','',0,0,0,0,0,0,0,'821','',0,0,'2019-11-08 12:24:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(822,'','Billable','','','2019-11-08 12:25:00','2019-11-08 13:25:00','','',NULL,NULL,0,'','','','2019-11-09','','',0,0,0,0,0,0,0,'822','',0,0,'2019-11-08 12:25:00',NULL,NULL,0,NULL,NULL,'undefined',NULL,NULL,NULL),(823,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bjoe@mail.com',0,NULL,'2019-11-28 00:00:00','Bob Joe','Payment',60,'Cash','2019-11-28','test',NULL,NULL,NULL),(826,'John Jackson','','John Jackson','Hermione Grainger','2019-11-10 22:18:00','2019-11-10 23:18:00','','',NULL,NULL,0,'false','','','2019-11-10','','',0,0,0,0,0,0,0,'826','jilljackson@mail.com',1,11,'2019-11-10 22:18:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,NULL,NULL),(827,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ssilver@mail.com',0,NULL,'2019-11-10 00:00:00','Sarah Silver','Discount',50,'Cash','2019-11-10','yubhb',NULL,NULL,NULL),(829,'Sarah Silver','Billable','Sarah Silver','Lisa Simpson','2019-11-11 01:09:00','2019-11-11 02:09:00','','','wdwdw','Absent, notice',0,'','','','2019-11-11','','',0,0,0,0,0,0,0,'829','ssilver@mail.com',1,2,'2019-11-11 01:09:00',NULL,'Calendar',0,NULL,NULL,'undefined',NULL,NULL,NULL),(830,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'email@mail.com',0,NULL,'2019-11-11 00:00:00','Ned Name','Payment',20,'Cash','2019-11-11','test with trans date',NULL,NULL,NULL),(831,'Sarah Silver','Billable','Sarah Silver','Lisa Simpson','2019-11-10 02:34:00','2019-11-10 03:34:00','','',NULL,NULL,0,'null','null','null','2019-11-10','','null',0,0,0,0,0,0,0,'831','ssilver@mail.com',1,2,'2019-11-10 02:34:00',NULL,'Calendar',0,NULL,NULL,'undefined',NULL,NULL,'moo'),(832,'','','','','2019-11-05 22:00:00','2019-11-05 23:00:00','','',NULL,NULL,0,'false','','','2019-11-05','undefined','',0,0,0,0,0,0,0,'832','',0,0,'2019-11-05 22:00:00',NULL,'Calendar',0,NULL,NULL,'undefined',NULL,NULL,NULL),(834,'Sarah Silver','','Sarah Silver','Lisa Simpson','2019-11-11 11:21:00','2019-11-11 12:21:00','','',NULL,NULL,0,'false','','','2019-11-11','','',0,0,0,0,0,0,0,'834','ssilver@mail.com',1,2,'2019-11-11 11:21:00',NULL,'Calendar',0,NULL,NULL,'Session with Lisa Simpson',NULL,NULL,NULL),(837,'Ian Stark','','Ian Stark','Jake Jakerson','2019-11-11 11:21:00','2019-11-11 12:21:00','','',NULL,NULL,0,'false','','','2019-11-11','','',0,0,0,0,0,0,0,'837','money@mail.com',7,8,'2019-11-11 11:21:00',NULL,'Calendar',0,NULL,NULL,'Session with Jake Jakerson',NULL,NULL,NULL);
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

-- Dump completed on 2019-11-12  3:20:37
