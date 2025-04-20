-- CreateTable
CREATE TABLE "contratotrabalho" (
    "id" TEXT NOT NULL,
    "nivelTecnico" INTEGER NOT NULL,
    "cargaHoraria" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "inicioVigencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fimVigencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contratotrabalho_pkey" PRIMARY KEY ("id")
);
