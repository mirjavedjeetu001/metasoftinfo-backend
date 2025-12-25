-- MySQL dump 10.13  Distrib 8.0.44, for Linux (x86_64)
--
-- Host: localhost    Database: metasoftinfo
-- ------------------------------------------------------
-- Server version	8.0.44-0ubuntu0.24.04.2

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
-- Table structure for table `hero_section`
--

DROP TABLE IF EXISTS `hero_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero_section` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `primaryCta` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `primaryCtaLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/contact',
  `secondaryCta` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secondaryCtaLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/contact',
  `stat1Value` int NOT NULL DEFAULT '120',
  `stat1Label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stat2Value` int NOT NULL DEFAULT '18',
  `stat2Label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stat3Value` int NOT NULL DEFAULT '98',
  `stat3Label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_section`
--

LOCK TABLES `hero_section` WRITE;
/*!40000 ALTER TABLE `hero_section` DISABLE KEYS */;
INSERT INTO `hero_section` VALUES ('3bb85a67-1349-457d-84ae-2d94adbb9524','Scale Your Dev Team With Top Talent in 4 Weeks','We architect, design, and deliver world-class digital products.','Start Your Project','/contact','Schedule a Call','/contact',120,'Projects Shipped',18,'Years Experience',98,'Client Satisfaction','2025-12-20 11:07:01.297162',NULL);
/*!40000 ALTER TABLE `hero_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_members`
--

DROP TABLE IF EXISTS `team_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageUrl` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `displayOrder` int NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `idx_category` (`category`),
  KEY `idx_display_order` (`displayOrder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_members`
--

LOCK TABLES `team_members` WRITE;
/*!40000 ALTER TABLE `team_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_slide`
--

DROP TABLE IF EXISTS `hero_slide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero_slide` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL,
  `imageUrl` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `caption` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_slide`
--

LOCK TABLES `hero_slide` WRITE;
/*!40000 ALTER TABLE `hero_slide` DISABLE KEYS */;
INSERT INTO `hero_slide` VALUES ('546e8a90-15db-4a55-b3cf-af1abd7ab561',3,'https://i.postimg.cc/QdFBk5hZ/2_(3).png','',1,'2025-12-20 12:13:32.439209','admin@metasoftinfo.com'),('6ee1f047-d3f2-4aa3-a23d-347c9b7c7468',2,'https://i.postimg.cc/4xjY8dx7/1_(2).png','',1,'2025-12-20 11:27:11.096956','admin@metasoftinfo.com'),('e3646d47-ac4a-4a1c-a1b9-8e74d2d6a5ac',1,'https://i.postimg.cc/4xjY8dx7/1_(2).png','',1,'2025-12-20 11:26:38.782633','admin@metasoftinfo.com');
/*!40000 ALTER TABLE `hero_slide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navbar_menu`
--

DROP TABLE IF EXISTS `navbar_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navbar_menu` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL,
  `label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `openInNewTab` tinyint NOT NULL DEFAULT '0',
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navbar_menu`
--

LOCK TABLES `navbar_menu` WRITE;
/*!40000 ALTER TABLE `navbar_menu` DISABLE KEYS */;
INSERT INTO `navbar_menu` VALUES ('81aab25c-fdd4-4f71-9b09-829df68ea6d0',1,'About Us','/page/about-us',1,0,'2025-12-20 12:27:03.149083',NULL),('ba30a5eb-1555-4c4f-b736-588b4fa893ab',2,'Services','/services',1,0,'2025-12-20 12:27:03.176318',NULL),('f1eef1ff-480e-46f8-9fa8-a7464b4df892',3,'Projects','/projects',1,0,'2025-12-20 12:27:03.181989',NULL),('fe3d22ac-87fc-4459-ac17-5a77254124b4',4,'Testimonials','/testimonials',1,0,'2025-12-20 12:27:03.187634',NULL);
/*!40000 ALTER TABLE `navbar_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `metaDescription` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isPublished` tinyint NOT NULL DEFAULT '1',
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fe66ca6a86dc94233e5d778953` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES ('1442b03e-ca42-4795-9512-cfde3465b8e3','about-us','About Us','<div class=\"max-w-4xl mx-auto py-16 px-4\">\n  <h1 class=\"text-4xl font-bold text-gray-900 mb-6\">About Us</h1>\n  <p class=\"text-lg text-gray-700 mb-4\">We are a leading technology company dedicated to delivering innovative solutions that transform businesses.</p>\n  <h2 class=\"text-2xl font-bold text-gray-900 mt-8 mb-4\">Our Mission</h2>\n  <p class=\"text-gray-700 mb-4\">To empower businesses with cutting-edge technology solutions that drive growth and success.</p>\n  <h2 class=\"text-2xl font-bold text-gray-900 mt-8 mb-4\">Our Values</h2>\n  <ul class=\"list-disc list-inside text-gray-700 space-y-2\">\n    <li>Innovation and Excellence</li>\n    <li>Customer-First Approach</li>\n    <li>Integrity and Transparency</li>\n    <li>Continuous Learning</li>\n  </ul>\n</div>',NULL,1,'2025-12-20 12:26:31.309191',NULL);
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logoUrl` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `websiteUrl` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES ('c0bee299-a1f1-484a-8906-57d8e0c5a39f',2,'test','https://i.postimg.cc/R0HYw32P/images.png','',1,'2025-12-20 12:16:22.232207','admin@metasoftinfo.com'),('dbb5ce2f-4877-44a8-8d66-75b9b82b5570',1,'test','https://i.postimg.cc/R0HYw32P/images.png','',1,'2025-12-20 12:16:15.145700','admin@metasoftinfo.com');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_step`
--

DROP TABLE IF EXISTS `process_step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_step` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL,
  `title` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_step`
--

LOCK TABLES `process_step` WRITE;
/*!40000 ALTER TABLE `process_step` DISABLE KEYS */;
INSERT INTO `process_step` VALUES ('3ce21644-291c-4064-b564-8a385c52247b',3,'Build with AI Guardrails','AI pair-programming assistants (70% faster dev)','2025-12-20 11:07:01.319855',NULL),('47852f1f-9b9e-4aba-910f-f625f8081046',1,'AI-Powered Discovery Audit','Free 60-min strategy session to analyze your tech stack','2025-12-20 11:07:01.297748',NULL),('ac6dce0a-e9b8-4776-a443-4967c27b2a1d',4,'Scale with Confidence','AI-optimized cloud deployment','2025-12-20 11:07:01.326477',NULL),('e1439ec0-5b07-4b45-ab80-9c0eb06bcbd6',2,'Hybrid Team Onboarding','Match with vetted engineers (800+ experts)','2025-12-20 11:07:01.312381',NULL);
/*!40000 ALTER TABLE `process_step` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `coverImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tags` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `liveUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `repoUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `displayOrder` int NOT NULL DEFAULT '0',
  `publishedAt` datetime DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_96e045ab8b0271e5f5a91eae1e` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'AI Ops Console','ai-ops-1766204167162','Automation suite reducing MTTR by 42%.','Full case study pending',NULL,'AI, DevOps',NULL,NULL,1,NULL,'2025-12-20 10:16:07.172797','2025-12-20 10:16:07.172797'),(2,'AI Ops Console','ai-ops-1766204186980','Automation suite reducing MTTR by 42%.','Full case study pending',NULL,'AI, DevOps',NULL,NULL,1,NULL,'2025-12-20 10:16:26.993031','2025-12-20 10:16:26.993031'),(3,'AI Ops Console','ai-ops-1766204187411','Automation suite reducing MTTR by 42%.','Full case study pending',NULL,'AI, DevOps',NULL,NULL,1,NULL,'2025-12-20 10:16:27.420166','2025-12-20 10:16:27.420166'),(4,'AI Ops Console','ai-ops-1766204226666','Automation suite reducing MTTR by 42%.','Full case study pending',NULL,'AI, DevOps',NULL,NULL,1,NULL,'2025-12-20 10:17:06.675691','2025-12-20 10:17:06.675691'),(5,'New Project','project-1766205970371','Project description','Full case study',NULL,'Web Development',NULL,NULL,1,NULL,'2025-12-20 10:46:10.394181','2025-12-20 10:46:10.394181');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_offerings`
--

DROP TABLE IF EXISTS `service_offerings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_offerings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `iconKey` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `featured` tinyint NOT NULL DEFAULT '0',
  `displayOrder` int NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_offerings`
--

LOCK TABLES `service_offerings` WRITE;
/*!40000 ALTER TABLE `service_offerings` DISABLE KEYS */;
INSERT INTO `service_offerings` VALUES (1,'Custom software delivery','Enterprise-grade builds with cloud native quality.','Full copy pending',NULL,'Software',1,0,'2025-12-20 10:16:05.651441','2025-12-20 10:16:05.651441'),(2,'Custom software delivery','Enterprise-grade builds with cloud native quality.','Full copy pending',NULL,'Software',1,0,'2025-12-20 10:16:06.216637','2025-12-20 10:16:06.216637'),(3,'Custom software delivery','Enterprise-grade builds with cloud native quality.','Full copy pending',NULL,'Software',1,0,'2025-12-20 10:16:26.486731','2025-12-20 10:16:26.486731'),(4,'Custom software delivery','Enterprise-grade builds with cloud native quality.','Full copy pending',NULL,'Software',1,0,'2025-12-20 10:17:06.141525','2025-12-20 10:17:06.141525'),(5,'New Service','Service description','Full details',NULL,'Software',1,0,'2025-12-20 10:28:07.656434','2025-12-20 10:28:07.656434'),(6,'New Service','Service description','Full details',NULL,'Software',1,0,'2025-12-20 10:44:39.966496','2025-12-20 10:44:39.966496'),(7,'New Service','Service description','Full details',NULL,'Software',1,0,'2025-12-20 10:44:42.122713','2025-12-20 10:44:42.122713');
/*!40000 ALTER TABLE `service_offerings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_settings`
--

DROP TABLE IF EXISTS `site_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_settings` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `siteName` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `siteDescription` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footerText` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `companyEmail` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `companyPhone` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `companyAddress` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `socialFacebook` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `socialLinkedin` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `socialTwitter` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logoUrl` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `navbarBgColor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#1e293b',
  `navbarTextColor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#ffffff',
  `preloaderEnabled` tinyint NOT NULL DEFAULT '1',
  `preloaderText` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Metasoft Info',
  `preloaderDuration` int NOT NULL DEFAULT '2000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_settings`
--

LOCK TABLES `site_settings` WRITE;
/*!40000 ALTER TABLE `site_settings` DISABLE KEYS */;
INSERT INTO `site_settings` VALUES ('db15174f-9c6d-4591-86f6-5f4ddc77ff6d','Metasoft Info','Premium Tech Services - Custom Solutions for Growing Businesses','© 2025 Metasoft Info. All rights reserved.','hello@metasoftinfo.com','+1 (555) 123-4567','123 Tech Street, San Francisco, CA 94102','https://facebook.com/metasoftinfo','https://linkedin.com/company/metasoftinfo','https://twitter.com/metasoftinfo','2025-12-20 11:30:06.000000','admin@metasoftinfo.com','https://i.postimg.cc/6qmKv1pv/City-Bank-Bangladesh-Logo.png','#ffffff','#000000',1,'Metasoft Info',2000);
/*!40000 ALTER TABLE `site_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials`
--

DROP TABLE IF EXISTS `testimonials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clientName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clientTitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int NOT NULL DEFAULT '5',
  `avatarUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `displayOrder` int NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials`
--

LOCK TABLES `testimonials` WRITE;
/*!40000 ALTER TABLE `testimonials` DISABLE KEYS */;
INSERT INTO `testimonials` VALUES (1,'VP Engineering',NULL,'Metasoft ships fast, with exceptional polish.',5,NULL,'Global SaaS',0,'2025-12-20 10:16:07.742795','2025-12-20 10:16:07.742795');
/*!40000 ALTER TABLE `testimonials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme_settings`
--

DROP TABLE IF EXISTS `theme_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theme_settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `primaryColor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#0A84FF',
  `secondaryColor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#111827',
  `accentColor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#F59E0B',
  `surfaceColor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#F3F4F6',
  `neutralColor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#0B1021',
  `darkMode` tinyint NOT NULL DEFAULT '0',
  `updatedBy` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme_settings`
--

LOCK TABLES `theme_settings` WRITE;
/*!40000 ALTER TABLE `theme_settings` DISABLE KEYS */;
INSERT INTO `theme_settings` VALUES (1,'#0aa1ff','#111827','#f59e0b','#f3f4f6','#0b1021',0,'admin@metasoftinfo.com','2025-12-20 10:45:46.000000');
/*!40000 ALTER TABLE `theme_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passwordHash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('SUPER_ADMIN','ADMIN','EDITOR') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'SUPER_ADMIN',
  `avatarUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastLoginAt` datetime DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@metasoftinfo.com','$2b$10$/xrx.U5Mc0nNK4QRQfd8xuOOiAZQFmgWrDZLxePIq/leNeChnBxnm','Super Admin','SUPER_ADMIN',NULL,NULL,'2025-12-20 10:10:37.581986','2025-12-20 10:10:37.581986');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `why_choose_us`
--

DROP TABLE IF EXISTS `why_choose_us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `why_choose_us` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL,
  `title` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `updatedBy` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `why_choose_us`
--

LOCK TABLES `why_choose_us` WRITE;
/*!40000 ALTER TABLE `why_choose_us` DISABLE KEYS */;
INSERT INTO `why_choose_us` VALUES ('4966ba22-08d4-4c18-83de-06e2e7c7ea32',1,'Expert Team','Senior developers with 10+ years experience','2025-12-20 11:07:01.299999',NULL),('6fe7f51c-69e0-46ee-bb6b-e52a6107cadf',2,'Agile Process','Fast iteration, quick results, full transparency','2025-12-20 11:07:01.312814',NULL),('96bee92a-25bf-4937-81ca-ac4dd86cb84b',4,'Modern Tech','Latest frameworks, tools, and best practices','2025-12-20 11:07:01.328207',NULL),('c6a57373-2dd8-437f-9ada-f741b26141ad',3,'Proven Track Record','120+ shipped projects across industries','2025-12-20 11:07:01.321527',NULL);
/*!40000 ALTER TABLE `why_choose_us` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

--
-- Table structure for table `contact_submissions`
--

DROP TABLE IF EXISTS `contact_submissions`;
CREATE TABLE `contact_submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'new',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `idx_status` (`status`),
  KEY `idx_created` (`createdAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `contact_settings`
--

DROP TABLE IF EXISTS `contact_settings`;
CREATE TABLE `contact_settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT 'info@metasoftinfo.com',
  `phone` varchar(50) NOT NULL DEFAULT '+1 (234) 567-890',
  `addressLine1` varchar(255) NOT NULL DEFAULT '123 Business St, Suite 100',
  `addressLine2` varchar(255) NOT NULL DEFAULT 'San Francisco, CA 94107',
  `businessHours1` varchar(255) NOT NULL DEFAULT 'Monday - Friday: 9:00 AM - 6:00 PM',
  `businessHours2` varchar(255) NOT NULL DEFAULT 'Saturday: 10:00 AM - 4:00 PM',
  `businessHours3` varchar(255) NOT NULL DEFAULT 'Sunday: Closed',
  `heroTitle` varchar(500) NOT NULL DEFAULT 'Let us Build Something Great Together',
  `heroSubtitle` varchar(1000) DEFAULT NULL,
  `sectionTitle` varchar(255) NOT NULL DEFAULT 'Get In Touch',
  `sectionDescription` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_settings`
--

LOCK TABLES `contact_settings` WRITE;
INSERT INTO `contact_settings` VALUES (1,'info@metasoftinfo.com','+1 (234) 567-890','123 Business St, Suite 100','San Francisco, CA 94107','Monday - Friday: 9:00 AM - 6:00 PM','Saturday: 10:00 AM - 4:00 PM','Sunday: Closed','Let us Build Something Great Together','Ready to transform your ideas into reality? Get in touch with our team and let us discuss your project.','Get In Touch','Have a question or want to work together? Fill out the form or reach out directly using the information below.');
UNLOCK TABLES;

-- Dump completed on 2025-12-24 10:36:53

