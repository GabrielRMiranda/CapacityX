/*
  Warnings:

  - You are about to drop the column `Nome` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `nome` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "Nome",
DROP COLUMN "Status",
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
