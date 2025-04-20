import { Test, TestingModule } from '@nestjs/testing';
import { CategoriapaiService } from './categoriapai.service';

describe('CategoriapaiService', () => {
  let service: CategoriapaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriapaiService],
    }).compile();

    service = module.get<CategoriapaiService>(CategoriapaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
