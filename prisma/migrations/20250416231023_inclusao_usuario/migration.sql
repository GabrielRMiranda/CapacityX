-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "nivelAcesso" INTEGER NOT NULL,
    "Status" TEXT NOT NULL,
    "id_contratoTrabalho" INTEGER NOT NULL,
    "inicioVigencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fimVigencia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);
