-- CreateTable
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fileName` VARCHAR(191) NOT NULL,
    `imageName` VARCHAR(191) NOT NULL,
    `uploader` VARCHAR(191) NOT NULL,

    INDEX `images_uploader_idx`(`uploader`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_uploader_fkey` FOREIGN KEY (`uploader`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
