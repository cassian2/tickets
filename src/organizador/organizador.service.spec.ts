import { Test, TestingModule } from '@nestjs/testing';
import { OrganizadorService } from './organizador.service';

describe('OrganizadorService', () => {
  let service: OrganizadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizadorService],
    }).compile();

    service = module.get<OrganizadorService>(OrganizadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
