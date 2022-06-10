-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: WDCproject1
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `WDCproject1`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `WDCproject1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `WDCproject1`;

--
-- Table structure for table `DESC_EVENT`
--

DROP TABLE IF EXISTS `DESC_EVENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DESC_EVENT` (
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DESC_EVENT`
--

LOCK TABLES `DESC_EVENT` WRITE;
/*!40000 ALTER TABLE `DESC_EVENT` DISABLE KEYS */;
INSERT INTO `DESC_EVENT` VALUES ('GREAT!'),('This Textbox will be use for the event description ');
/*!40000 ALTER TABLE `DESC_EVENT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Events_Backup`
--

DROP TABLE IF EXISTS `Events_Backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Events_Backup` (
  `event_name` varchar(63) DEFAULT NULL,
  `price` varchar(127) DEFAULT NULL,
  `publicity` varchar(255) DEFAULT NULL,
  `event_method` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events_Backup`
--

LOCK TABLES `Events_Backup` WRITE;
/*!40000 ALTER TABLE `Events_Backup` DISABLE KEYS */;
INSERT INTO `Events_Backup` VALUES ('test','1','private','online');
/*!40000 ALTER TABLE `Events_Backup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Events_Backup_2`
--

DROP TABLE IF EXISTS `Events_Backup_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Events_Backup_2` (
  `event_name` varchar(63) DEFAULT NULL,
  `price` varchar(127) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events_Backup_2`
--

LOCK TABLES `Events_Backup_2` WRITE;
/*!40000 ALTER TABLE `Events_Backup_2` DISABLE KEYS */;
INSERT INTO `Events_Backup_2` VALUES ('test','2'),('abcd','12');
/*!40000 ALTER TABLE `Events_Backup_2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adminAccount`
--

DROP TABLE IF EXISTS `adminAccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adminAccount` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminAccount`
--

LOCK TABLES `adminAccount` WRITE;
/*!40000 ALTER TABLE `adminAccount` DISABLE KEYS */;
INSERT INTO `adminAccount` VALUES ('Ernest','Ernest123'),('admin','admin123'),('Jennifer','123456'),('Dale','123456'),('Alexandra','123456');
/*!40000 ALTER TABLE `adminAccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `availability`
--

DROP TABLE IF EXISTS `availability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `availability` (
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availability`
--

LOCK TABLES `availability` WRITE;
/*!40000 ALTER TABLE `availability` DISABLE KEYS */;
INSERT INTO `availability` VALUES ('a'),('test123');
/*!40000 ALTER TABLE `availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edit_event_2`
--

DROP TABLE IF EXISTS `edit_event_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edit_event_2` (
  `event_overview` varchar(2000) DEFAULT NULL,
  `event_date` varchar(100) DEFAULT NULL,
  `event_time` varchar(50) DEFAULT NULL,
  `event_location` varchar(1000) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edit_event_2`
--

LOCK TABLES `edit_event_2` WRITE;
/*!40000 ALTER TABLE `edit_event_2` DISABLE KEYS */;
INSERT INTO `edit_event_2` VALUES ('abcdef ghijk','05/12/2022','14.00','123 North Terrace, Adelaide SA 5000','5.00');
/*!40000 ALTER TABLE `edit_event_2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `lastname` varchar(128) DEFAULT NULL,
  `firstname` varchar(128) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-10  9:10:05
