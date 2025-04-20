-- CreateTable
CREATE TABLE "tecnologia" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "id_usuarioResponsavel" INTEGER NOT NULL,
    "id_categoriaPai" INTEGER NOT NULL,
    "inicioVigencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fimVigencia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tecnologia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tecnologia" ADD CONSTRAINT "tecnologia_id_usuarioResponsavel_fkey" FOREIGN KEY ("id_usuarioResponsavel") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnologia" ADD CONSTRAINT "tecnologia_id_categoriaPai_fkey" FOREIGN KEY ("id_categoriaPai") REFERENCES "categoriapai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
