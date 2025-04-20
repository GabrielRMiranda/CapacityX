-- CreateTable
CREATE TABLE "tecnico" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_Tecnologia" INTEGER NOT NULL,
    "knowhow" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tecnico_pkey" PRIMARY KEY ("id")
);
