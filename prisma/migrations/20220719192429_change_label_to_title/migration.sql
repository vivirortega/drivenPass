/*
  Warnings:

  - You are about to drop the column `label` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `notes` table. All the data in the column will be lost.
  - Added the required column `title` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "label",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "notes" DROP COLUMN "label",
ADD COLUMN     "title" TEXT NOT NULL;
