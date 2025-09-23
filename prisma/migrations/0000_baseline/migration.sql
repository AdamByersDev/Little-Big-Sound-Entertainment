-- CreateTable
CREATE TABLE `features` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `info` TEXT NULL,
    `addtime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `addip` VARCHAR(39) NULL,
    `updatetime` TIMESTAMP(0) NULL,
    `updateip` VARCHAR(39) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packagefeatures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `packageid` INTEGER NOT NULL,
    `featureid` INTEGER NOT NULL,
    `addtime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `addip` VARCHAR(39) NULL,
    `updatetime` TIMESTAMP(0) NULL,
    `updateip` VARCHAR(39) NULL,

    INDEX `featureid`(`featureid`),
    INDEX `packageid`(`packageid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `summary` TEXT NULL,
    `chosenorder` TINYINT NULL,
    `prefered` TINYINT NULL DEFAULT 0,
    `musictime` TINYINT NULL,
    `hidden` BOOLEAN NULL DEFAULT false,
    `addtime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `addip` VARCHAR(39) NULL,
    `updatetime` TIMESTAMP(0) NULL,
    `updateip` VARCHAR(39) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `packagefeatures` ADD CONSTRAINT `packagefeatures_ibfk_1` FOREIGN KEY (`packageid`) REFERENCES `packages`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `packagefeatures` ADD CONSTRAINT `packagefeatures_ibfk_2` FOREIGN KEY (`featureid`) REFERENCES `features`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

