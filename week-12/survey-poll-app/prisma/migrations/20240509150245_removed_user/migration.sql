/*
  Warnings:

  - You are about to drop the column `userId` on the `Surveys` table. All the data in the column will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Surveys" DROP CONSTRAINT "Surveys_userId_fkey";

-- AlterTable
ALTER TABLE "Surveys" DROP COLUMN "userId";

-- DropTable
DROP TABLE "Users";
