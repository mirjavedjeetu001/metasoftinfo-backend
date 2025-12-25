-- ============================================
-- Production Database Migration Script
-- Date: December 25, 2025
-- Description: Add new features without disrupting existing data
-- ============================================

-- 1. Add Team Members Table (Our Management Feature)
-- ============================================
CREATE TABLE IF NOT EXISTS `team_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'management',
  `bio` text COLLATE utf8mb4_unicode_ci,
  `imageUrl` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `displayOrder` int NOT NULL DEFAULT '0',
  `isActive` tinyint NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Add Contact Submissions Table
-- ============================================
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'new',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Add Contact Settings Table
-- ============================================
CREATE TABLE IF NOT EXISTS `contact_settings` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'info@metasoftinfo.com',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '+1 (234) 567-890',
  `addressLine1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '123 Business St, Suite 100',
  `addressLine2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'San Francisco, CA 94107',
  `businessHours1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Monday - Friday: 9:00 AM - 6:00 PM',
  `businessHours2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Saturday: 10:00 AM - 4:00 PM',
  `businessHours3` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Sunday: Closed',
  `heroTitle` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Let us Build Something Great Together',
  `heroSubtitle` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sectionTitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Get In Touch',
  `sectionDescription` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default contact settings if not exists
INSERT IGNORE INTO `contact_settings` (id, email, phone, addressLine1, addressLine2, businessHours1, businessHours2, businessHours3, heroTitle, heroSubtitle, sectionTitle, sectionDescription) 
VALUES (1, 'info@metasoftinfo.com', '+1 (234) 567-890', '123 Business St, Suite 100', 'San Francisco, CA 94107', 'Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed', 'Let us Build Something Great Together', 'Ready to transform your ideas into reality? Get in touch with our team and let us discuss your project.', 'Get In Touch', 'Have a question or want to work together? Fill out the form or reach out directly using the information below.');

-- 4. Update Hero Section Table - Add Button Links
-- ============================================
-- Check if columns exist before adding (safe for production)
SET @dbname = DATABASE();
SET @tablename = 'hero_section';

-- Add primaryCtaLink column if it doesn't exist
SET @query = CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN IF NOT EXISTS `primaryCtaLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT "/contact"');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Add secondaryCtaLink column if it doesn't exist  
SET @query = CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN IF NOT EXISTS `secondaryCtaLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT "/contact"');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Alternative safer approach (use this if above doesn't work):
-- Check and add primaryCtaLink
SELECT COUNT(*) INTO @col_exists 
FROM information_schema.columns 
WHERE table_schema = DATABASE() 
AND table_name = 'hero_section' 
AND column_name = 'primaryCtaLink';

SET @query = IF(@col_exists = 0,
    'ALTER TABLE hero_section ADD COLUMN `primaryCtaLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT "/contact" AFTER `primaryCta`',
    'SELECT "Column primaryCtaLink already exists" AS message');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Check and add secondaryCtaLink
SELECT COUNT(*) INTO @col_exists 
FROM information_schema.columns 
WHERE table_schema = DATABASE() 
AND table_name = 'hero_section' 
AND column_name = 'secondaryCtaLink';

SET @query = IF(@col_exists = 0,
    'ALTER TABLE hero_section ADD COLUMN `secondaryCtaLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT "/contact" AFTER `secondaryCta`',
    'SELECT "Column secondaryCtaLink already exists" AS message');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ============================================
-- Migration Complete
-- ============================================
-- All tables and columns have been safely added
-- Existing data remains intact
