import { Test, TestingModule } from '@nestjs/testing';
import { ContratotrabalhoController } from './contratotrabalho.controller';
import { ContratotrabalhoService } from './contratotrabalho.service';

describe('ContratotrabalhoController', () => {
  let controller: ContratotrabalhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContratotrabalhoController],
      providers: [ContratotrabalhoService],
    }).compile();

    controller = module.get<ContratotrabalhoController>(ContratotrabalhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
