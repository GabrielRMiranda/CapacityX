/*
  Warnings:

  - You are about to drop the column `id_Tecnologia` on the `tecnico` table. All the data in the column will be lost.
  - Added the required column `id_tecnologia` to the `tecnico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tecnico" DROP COLUMN "id_Tecnologia",
ADD COLUMN     "id_tecnologia" INTEGER NOT NULL;
