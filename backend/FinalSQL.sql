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
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (8,'Music Therapy','#109bf2'),(9,'Group Session','#b8e986'),(10,'Lessons','#ff39cf');
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
  `active` tinyint(5) DEFAULT NULL,
  `title` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_initials` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `street_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `assi_therapist_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `assi_therapist_first` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `assi_therapist_last` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `facility` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `session_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `session_cost` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `session_length` double DEFAULT NULL,
  `bday` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `confirm_password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `notes` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `zip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_street_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_state` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_zip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_phone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_secondary_phone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payment_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_num` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_exp_date` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvv` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_street_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name_on_card` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_state` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_phone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_zip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact2_active` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_title_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_first_name_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_last_name_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_street_address_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_city_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_state_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_zip_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_email_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_phone_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_secondary_phone_2` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact3_active` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_title_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_first_name_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_last_name_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_street_address_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_city_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_state_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_zip_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_email_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_phone_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_secondary_phone_3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact1_receive_email` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact2_receive_email` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact3_receive_email` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `addgoal1_box` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `goal1_active` tinyint(5) DEFAULT NULL,
  `goal1_desc` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `obj1_1_desc` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `obj2_2_desc` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `obj3_3_desc` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,0,'Mr.','Billy Joe','Billy','Joe','BJ','Individual','123-444-5555','123 Fake Street','bjoe@mail.com','Harry Potter','Harry','Potter',NULL,'Therapy','40',60,'7/3/02','test','test','He is shy at first but will eventually open up','Plano','TX','75023','Mr.','Bob','Joe','123 Apple Street','Plano','TX','75023','bobjoe@mail.com','123-222-2222',NULL,'Bob','Joe','Bob Joe','Card','Visa','11111111111','10/25','123','123 Fake Street','Bob Joe','Plano','TX','bjoe@mail.com','123-123-123','75023','1','Mrs.','Rachel','Joe','123 Orange Street','Plano','TX','75023','rjoe@mail.com','555-444-3333',NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1','1',NULL,'1',1,'Test',NULL,NULL,NULL),(2,1,'Miss','Sarah Silver','Sarah','Silver','SS','Facility','123-222-3333','444 Clark Drive','ssilver@mail.com','Lisa Simpson','Lisa','Simpson','Clark High School','Therapy','20',60,'6/3/00','123','123',NULL,'Allen','TX','75002','Ms.','Sarah','Silver','432 Rose Road','Allen','TX','75002','ssilver@mail.com','555-555-5555',NULL,'Sarah','Silver','Sarah Silver','Check',NULL,NULL,NULL,NULL,'432 Rose Road',NULL,'Allen','TX','ssilver@mail.com','111-111-1111','34342','1','Mr.','Sam','Silver','432 Rose Road','Allen','TX','75002','samsilver@mail.com','444-555-4444',NULL,'1','Mx.','Alex','Silver','200 Golden Avenue','Highland Park','TX','75209','asilver@mail.com','300-222-2222',NULL,'1','0','1',NULL,NULL,NULL,NULL,NULL,NULL),(3,1,'Mr.','Jaren Jones','Jaren','Jones','JJ','Individual','123-111-2232','234 Tree Street','jjones@mail.com','Harry Potter','Harry','Potter',NULL,'Therapy','20',60,'5/7/05','124','124',NULL,'Dallas','TX','75019','Mrs.','Peter','Jones','1111 Ivy Lane','Dallas','TX','75019','nname@mail.com','777-777-7777','888-888-8888','Ned','Jones','Ned Jones','Card','Discover','3333333333','2/23','432','1111 Lane','Ned E. Jones','Dallas','TX','ned@mail.com','222-222-2222','22424',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,1,'Mr.','Ian Stark','Ian','Stark','IS','Individual','122-232-4444','645 Elm Ave','istark@mail.com','Jake Jakerson','Jake','Jakerson',NULL,'Therapy','20',60,'8/2/01','1244','1244',NULL,'Dallas','TX','75032','Mr.','Bill','Jakerson','3214 Elm Court','Smithtown','TX','75032','ffake@mail.com','234-334-3444','121-112-2222','Fred','Jakerson','Fred Jakerson','Check',NULL,NULL,NULL,NULL,'2343 Ave',NULL,'Plano','TX','money@mail.com','444-444-4444','12345',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,1,'Mr.','John Jackson','Johnny','Jackson','JJ','Facility','122-222-1111','789 Tom Lane','johnjack@mail.com','Hermione Grainger','Hermione','Grainger','Thomas Elementary','Lessons','20',60,'9/6/12','4444','4444',NULL,'Frisco','TX','75068','Mrs.','Tony','Stark','4352 Imagine Lane','Austin','TX','75068','jjackson@mail.com','111-111-1111',NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,'5555 Lane',NULL,'Frisco','TX','jilljackson@mail.com','555-555-5544','54321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(70,1,'Mr.','Joe Jackson','Joe','Jackson','JJ','Facility','122-222-1111','789 Tom Lane','joejack@mail.com','Hermione Grainger','Hermione','Grainger','Thomas Elementary','Lessons','20',60,'10/4/13','7777','7777',NULL,'Frisco','TX','75068','Mrs.','Jill','Jackson','4352 Imagine Lane','Austin','TX','75068','jjackson@mail.com','111-111-1111',NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,'5555 Lanr',NULL,'Frisco','TX','jilljackson@mail.com','555-555-5544','54321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,1,'Miss','Joan Jackson','Joan','Jackson','JJ','Facility','122-222-1111','789 Tom Lane','joanjack@mail.com','Hermione Grainger','Hermione','Grainger','Thomas Elementary','Lessons','20',60,'1/4/15',NULL,NULL,NULL,'Frisco','TX','75068','Mrs.','Jill','Jackson','4352 Imagine Lane','Austin','TX','75068','jjackson@mail.com','111-111-1111',NULL,'Jill','Jackson','Jill Jackson','Cash',NULL,NULL,NULL,NULL,NULL,NULL,'Frisco',NULL,'jilljackson@mail.com','555-555-5544',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(118,1,'','Mary Altom','Mary','Altom',NULL,'Individual','','','maryaltom@gmail.com','',NULL,NULL,NULL,'','',NULL,'',NULL,NULL,'','','','','','Mary','Altom','','','','','maryaltom@gmail.com','','','','',' ','Card',NULL,NULL,NULL,NULL,'',NULL,'','','','','','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
  `active` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `member_full_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `member_first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `member_last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `member_initials` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `street_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `zip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `location` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bday` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `npi` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pass` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `notes` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'1','Mr.','Harry Potter','Harry','Potter','HP','hpotter@gmail.com','123-456-1111','713 Hogwarts Lane','London','77777','Diagon Alley','1/1/99','731890','test123',NULL,'Administrator'),(2,'1','Ms.','Hermione Grainger','Hermione','Grainger','HG','email@mail.com','123-333-3333','123 Fake Street','Plano','75023','Wherever','2/1/99','2213414','pass',NULL,'Intern'),(3,'1','Mr.','Joe Bob','Joe','Bob','JB','jbob@mail.com','222-223-3333','123 Street Lane','Frisco','12345','Nowhere','3/1/99','2223324','ooo',NULL,'Therapist'),(4,'1','Miss','Jennifer Robinson','Jennifer','Robinson','JR','jrob@mail.com','122-222-2222','222 Nowhere','Allen','12333','Somewhere','4/1/99','123214','ooee',NULL,'Administrator'),(5,'1','Dr','Lisa Simpson','Lisa','Simpson','LS','lsimpson@mail.com','111-222-2222','222 Evergreen Terrace','Springfield','22244','Everywhere','5/1/99','345221','simp',NULL,'Therapist'),(38,'1','Mr.','Jake Jakerson','Jake','Jakerson','JJ','jake@mail.com','233-333-3333','123 Jake Street','Jaketopia','33333','Main Building','6/1/99','323232','$2b$10$BpKBvvhOsAn93bCLODGOV.bmuHtdTmNp3FIQ7CjgNM8iQwxH.8md2','Jake has notes','Intern');
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
  `title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bill_type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `client` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `therapist` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `location` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `category` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `notes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `attendance` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `repeats` tinyint(5) DEFAULT NULL,
  `repeat_option` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `end_repeat` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `num_occurences` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `end_date_occurrence` date DEFAULT NULL,
  `custom_frequency` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `repeat_num_days` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sun` tinyint(5) DEFAULT NULL,
  `mon` tinyint(5) DEFAULT NULL,
  `tues` tinyint(5) DEFAULT NULL,
  `wed` tinyint(5) DEFAULT NULL,
  `thu` tinyint(5) DEFAULT NULL,
  `fri` tinyint(5) DEFAULT NULL,
  `sat` tinyint(5) DEFAULT NULL,
  `series_start_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `billing_email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `session_cost` double DEFAULT NULL,
  `session_set_length` double DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `payor` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `transType` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `method` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `trans_date` date DEFAULT NULL,
  `description` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `clients` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `therapists` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testevent`
--

LOCK TABLES `testevent` WRITE;
/*!40000 ALTER TABLE `testevent` DISABLE KEYS */;
INSERT INTO `testevent` VALUES (10,'','Billable','','','2019-10-20 09:00:00','2019-10-20 10:00:00','','',NULL,NULL,1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'888','bjoe@mail.com',20,60,'2019-10-20 09:00:00',NULL,'Calendar',0,NULL,'2019-10-20','Session with Harry Potter',NULL,'Billy Joe','Harry Potter'),(888,'','Billable','','','2019-11-01 09:00:00','2019-11-01 10:00:00','','',NULL,'Present ($)',1,'Weekly','On Date','','2019-11-29','','',0,0,0,0,0,0,0,'888','bjoe@mail.com',20,60,'2019-11-01 09:00:00',NULL,'Calendar',0,NULL,'2019-11-01','Session with Harry Potter',NULL,'Billy Joe','Harry Potter'),(889,'','Billable','','','2019-11-08 09:00:00','2019-11-08 10:00:00','','',NULL,'Present ($)',1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'888','bjoe@mail.com',20,60,'2019-11-08 09:00:00',NULL,'Calendar',0,NULL,'2019-11-08','Session with Harry Potter',NULL,'Billy Joe','Harry Potter'),(890,'','Billable','','','2019-11-15 09:00:00','2019-11-15 10:00:00','','',NULL,'Absent, no notice ($)',1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'888','bjoe@mail.com',20,60,'2019-11-15 09:00:00',NULL,'Calendar',0,NULL,'2019-11-15','Session with Harry Potter',NULL,'Billy Joe','Harry Potter'),(891,'','Billable','','','2019-11-22 09:00:00','2019-11-22 10:00:00','','',NULL,NULL,1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'888','bjoe@mail.com',20,60,'2019-11-22 09:00:00',NULL,'Calendar',0,NULL,'2019-11-22','Session with Harry Potter',NULL,'Billy Joe','Harry Potter'),(892,'','Billable','','','2019-11-29 09:00:00','2019-11-29 10:00:00','','',NULL,NULL,1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'888','bjoe@mail.com',20,60,'2019-11-29 09:00:00',NULL,'Calendar',0,NULL,'2019-11-29','Session with Harry Potter',NULL,'Billy Joe','Harry Potter'),(893,'','','','','2019-11-10 08:30:00','2019-11-10 09:00:00','','',NULL,'Present ($)',0,'false','','','2019-11-21','','',0,0,0,0,0,0,0,'893','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Jaren Jones,Ian Stark','Harry Potter'),(894,'','Billable','','','2019-11-04 09:00:00','2019-11-04 10:00:00','','#109bf2',NULL,'Present ($)',1,'Weekly','On Date','','2019-12-02','','',0,0,0,0,0,0,0,'894','ssilver@mail.com',20,60,'2019-11-04 00:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'Sarah Silver','Hermione Grainger'),(895,'','Billable','','','2019-11-11 09:00:00','2019-11-11 10:00:00','','#109bf2',NULL,'Present ($)',1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'894','ssilver@mail.com',20,60,'2019-11-04 00:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'Sarah Silver','Hermione Grainger'),(896,'','Billable','','','2019-11-18 09:00:00','2019-11-18 10:00:00','','#109bf2',NULL,NULL,1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'894','ssilver@mail.com',20,60,'2019-11-04 00:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'Sarah Silver','Hermione Grainger'),(897,'','Billable','','','2019-11-25 09:00:00','2019-11-25 10:00:00','','#109bf2',NULL,NULL,1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'894','ssilver@mail.com',20,60,'2019-11-04 00:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'Sarah Silver','Hermione Grainger'),(898,'','Billable','','','2019-12-02 09:00:00','2019-12-02 10:00:00','','#109bf2','hh','Present ($)',1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'894','ssilver@mail.com',20,60,'2019-11-04 00:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'Sarah Silver','Hermione Grainger'),(899,'','Billable','','','2019-11-04 09:00:00','2019-11-04 10:00:00','','#ff39cf',NULL,'Absent, notice',1,'Custom','On Date','','2019-11-17','Specific Days','',0,1,0,1,0,0,0,'899','jilljackson@mail.com',20,60,'2019-11-04 09:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'John Jackson','Hermione Grainger'),(900,'','Billable','','','2019-11-06 09:00:00','2019-11-06 10:00:00','','#ff39cf',NULL,'Absent, no notice ($)',1,'Custom','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'899','jilljackson@mail.com',20,60,'2019-11-06 09:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'John Jackson','Hermione Grainger'),(901,'','Billable','','','2019-11-11 09:00:00','2019-11-11 10:00:00','','#ff39cf',NULL,NULL,1,'Custom','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'899','jilljackson@mail.com',20,60,'2019-11-11 09:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermion Grainger',NULL,'John Jackson','Hermione Grainger'),(902,'','Billable','','','2019-11-13 09:00:00','2019-11-13 10:00:00','','#ff39cf','hh','Present ($)',1,'Custom','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'899','jilljackson@mail.com',20,60,'2019-11-13 09:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'John Jackson','Hermione Grainger'),(903,'','Billable','','','2019-11-12 15:00:00','2019-11-12 16:00:00','','#b8e986',NULL,NULL,0,'false','','','2019-11-12','','',0,0,0,0,0,0,0,'903','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Joe Jackson,Joan Jackson','Hermione Grainger,Jennifer Robinson'),(904,'','Billable','','','2019-11-19 14:00:00','2019-11-19 15:00:00','','',NULL,'Absent, notice',0,'','','','2019-11-21','','',0,0,0,0,0,0,0,'904','',0,0,'2019-11-19 14:00:00',NULL,'Calendar',NULL,NULL,NULL,'Session with Jennifer Robinson',NULL,'Jaren Jones','Jennifer Robinson'),(905,'','Billable','','','2019-11-08 09:00:00','2019-11-08 10:00:00','','',NULL,'Absent, no notice ($)',1,'Weekly','On Date','','2019-11-30','','',0,0,0,0,0,0,0,'905','',0,0,'2019-11-08 09:00:00',NULL,'Calendar',NULL,NULL,NULL,'Session with Joe Bob',NULL,'Jaren Jones','Joe Bob'),(906,'','Billable','','','2019-11-15 09:00:00','2019-11-15 10:00:00','','',NULL,'Present ($)',1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'905','',0,0,'2019-11-15 09:00:00',NULL,'Calendar',NULL,NULL,NULL,'Session with Joe Bob',NULL,'Jaren Jones','Joe Bob'),(907,'','Billable','','','2019-11-22 09:00:00','2019-11-22 10:00:00','','','m m','Present ($)',1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'905','',0,0,'2019-11-22 09:00:00',NULL,'Calendar',NULL,NULL,NULL,'Session with Joe Bob',NULL,'Jaren Jones','Joe Bob'),(908,'','Billable','','','2019-11-29 09:00:00','2019-11-29 10:00:00','','',NULL,NULL,1,'Weekly','On Date','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'905','',0,0,'2019-11-29 09:00:00',NULL,'Calendar',NULL,NULL,NULL,'Session with Joe Bob',NULL,'Jaren Jones','Joe Bob'),(909,'','Billable','','','2019-11-21 14:00:00','2019-11-21 15:00:00','','#109bf2',NULL,NULL,1,'Weekly','After','3','2019-11-21','','',0,0,0,0,0,0,0,'909','istark@mail.com',20,60,'2019-11-21 14:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Joe Bob',NULL,'Ian Stark','Joe Bob'),(910,'','Billable','','','2019-11-28 14:00:00','2019-11-28 15:00:00','','#109bf2',NULL,NULL,1,'Weekly','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'909','istark@mail.com',20,60,'2019-11-28 14:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Joe Bob',NULL,'Ian Stark','Joe Bob'),(911,'','Billable','','','2019-12-05 14:00:00','2019-12-05 15:00:00','','#109bf2',NULL,'Absent, no notice ($)',1,'Weekly','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'909','istark@mail.com',20,60,'2019-12-05 14:00:00',NULL,'Calendar',0,NULL,NULL,'Session with Joe Bob',NULL,'Ian Stark','Joe Bob'),(912,'','Billable','','','2019-11-21 14:00:00','2019-11-21 15:00:00','','',NULL,NULL,1,'Weekly','After','3','2019-11-21','','',0,0,0,0,0,0,0,'912','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Joe Jackson','Hermione Grainger'),(913,'','Billable','','','2019-11-28 14:00:00','2019-11-28 15:00:00','','',NULL,NULL,1,'Weekly','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'912','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Joe Jackson','Hermione Grainger'),(914,'','Billable','','','2019-12-05 14:00:00','2019-12-05 15:00:00','','',NULL,NULL,1,'Weekly','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'912','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Joe Jackson','Hermione Grainger'),(915,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(918,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bjoe@mail.com',0,NULL,'2019-11-21 00:00:00','Bob Joe','Payment',30,'Cash','2019-11-21','Payment',NULL,NULL,NULL),(920,'','Billable','','','2019-11-21 15:20:00','2019-11-21 15:52:00','','#b8e986',NULL,'Present ($)',0,'false','','','2019-11-21','','',0,0,0,0,0,0,0,'920','jilljackson@mail.com',20,60,'2019-11-21 15:20:00',NULL,'Calendar',0,NULL,NULL,'Session with Hermione Grainger',NULL,'John Jackson','Hermione Grainger'),(937,'','','','','2019-11-24 10:30:00','2019-11-24 11:30:00','','','ddd','Absent, no notice ($)',0,'false','','','2019-11-24','','',0,0,0,0,0,0,0,'937','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Sarah Silver','Hermione Grainger'),(938,'','Billable','','','2019-11-24 10:30:00','2019-11-24 11:30:00','','','vv','Absent, notice',0,'','','','2019-11-24','','',0,0,0,0,0,0,0,'938','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Jaren Jones','Hermione Grainger'),(939,'','Billable','','','2019-11-24 09:30:00','2019-11-24 10:30:00','','','ss','Present ($)',0,'','','','2019-11-24','','',0,0,0,0,0,0,0,'939','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Sarah Silver','Hermione Grainger'),(984,'','Billable','','','2019-12-10 17:10:00','2019-12-10 18:10:00','','',NULL,'Present ($)',1,'Daily','After','3','2019-12-10','','',0,0,0,0,0,0,0,'984','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Sarah Silver','Hermione Grainger'),(985,'','Billable','','','2019-12-11 17:10:00','2019-12-11 18:10:00','','',NULL,'Absent, no notice ($)',1,'Daily','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'984','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Sarah Silver','Hermione Grainger'),(986,'','Billable','','','2019-12-12 17:10:00','2019-12-12 18:10:00','','',NULL,'Absent, notice',1,'Daily','After','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'984','',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Sarah Silver','Hermione Grainger');
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

-- Dump completed on 2019-12-12 18:58:53
