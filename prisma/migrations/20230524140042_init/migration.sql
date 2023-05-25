/*
  Warnings:

  - You are about to drop the `MenuOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MenuOption" DROP CONSTRAINT "MenuOption_menuId_fkey";

-- DropForeignKey
ALTER TABLE "MenuOption" DROP CONSTRAINT "MenuOption_positionId_fkey";

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "addOptions" TEXT[],
ADD COLUMN     "removeOptions" TEXT[];

-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "addOptions" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "removeOptions" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- DropTable
DROP TABLE "MenuOption";
