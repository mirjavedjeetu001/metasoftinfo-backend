-- ============================================
-- SIMPLE MIGRATION SCRIPT FOR cPanel/phpMyAdmin
-- Run these queries one by one in phpMyAdmin
-- ============================================

-- Step 1: Create Team Members Table (if not exists)
CREATE TABLE IF NOT EXISTS `team_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL DEFAULT 'management',
  `bio` text,
  `imageUrl` varchar(500) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `linkedin` varchar(500) DEFAULT NULL,
  `twitter` varchar(500) DEFAULT NULL,
  `displayOrder` int NOT NULL DEFAULT '0',
  `isActive` tinyint NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Step 2: Create Contact Submissions Table (if not exists)
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'new',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Step 3: Create Contact Settings Table (if not exists)
CREATE TABLE IF NOT EXISTS `contact_settings` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL DEFAULT 'info@metasoftinfo.com',
  `phone` varchar(255) NOT NULL DEFAULT '+1 (234) 567-890',
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

-- Step 4: Insert default contact settings
INSERT IGNORE INTO `contact_settings` VALUES 
(1, 'info@metasoftinfo.com', '+1 (234) 567-890', '123 Business St, Suite 100', 'San Francisco, CA 94107', 'Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed', 'Let us Build Something Great Together', 'Ready to transform your ideas into reality? Get in touch with our team and let us discuss your project.', 'Get In Touch', 'Have a question or want to work together? Fill out the form or reach out directly using the information below.');

-- Step 5: Add button link columns to hero_section (only if they don't exist)
-- If you get "Duplicate column" error, that's fine - it means column already exists

ALTER TABLE `hero_section` ADD COLUMN `primaryCtaLink` varchar(255) NOT NULL DEFAULT '/contact' AFTER `primaryCta`;

ALTER TABLE `hero_section` ADD COLUMN `secondaryCtaLink` varchar(255) NOT NULL DEFAULT '/contact' AFTER `secondaryCta`;

-- ============================================
-- DONE! Your database is now updated
-- ============================================
