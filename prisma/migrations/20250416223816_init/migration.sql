-- CreateTable
CREATE TABLE "categoriapai" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "inicioVigencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fimVigencia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categoriapai_pkey" PRIMARY KEY ("id")
);
