/*
  Warnings:

  - You are about to drop the column `createdAt` on the `wifi` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `wifi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "wifi" DROP COLUMN "createdAt",
DROP COLUMN "name",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
