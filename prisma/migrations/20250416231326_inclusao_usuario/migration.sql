-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_contratoTrabalho_fkey" FOREIGN KEY ("id_contratoTrabalho") REFERENCES "contratotrabalho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
