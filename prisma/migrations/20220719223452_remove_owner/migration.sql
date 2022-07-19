/*
  Warnings:

  - You are about to drop the column `owner` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `cards` table. All the data in the column will be lost.
  - Added the required column `name` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "owner",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;
