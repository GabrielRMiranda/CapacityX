import { Test, TestingModule } from '@nestjs/testing';
import { CategoriapaiController } from './categoriapai.controller';
import { CategoriapaiService } from './categoriapai.service';

describe('CategoriapaiController', () => {
  let controller: CategoriapaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriapaiController],
      providers: [CategoriapaiService],
    }).compile();

    controller = module.get<CategoriapaiController>(CategoriapaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
