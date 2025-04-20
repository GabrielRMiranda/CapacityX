/*
  Warnings:

  - The primary key for the `contratotrabalho` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `contratotrabalho` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "contratotrabalho" DROP CONSTRAINT "contratotrabalho_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "fimVigencia" DROP DEFAULT,
ADD CONSTRAINT "contratotrabalho_pkey" PRIMARY KEY ("id");
