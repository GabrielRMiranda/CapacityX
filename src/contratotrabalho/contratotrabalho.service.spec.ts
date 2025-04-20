import { Test, TestingModule } from '@nestjs/testing';
import { ContratotrabalhoService } from './contratotrabalho.service';

describe('ContratotrabalhoService', () => {
  let service: ContratotrabalhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContratotrabalhoService],
    }).compile();

    service = module.get<ContratotrabalhoService>(ContratotrabalhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
