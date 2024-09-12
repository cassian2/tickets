import { Test, TestingModule } from '@nestjs/testing';
import { OrganizadorController } from './organizador.controller';
import { OrganizadorService } from './organizador.service';

describe('OrganizadorController', () => {
  let controller: OrganizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizadorController],
      providers: [OrganizadorService],
    }).compile();

    controller = module.get<OrganizadorController>(OrganizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
