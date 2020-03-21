import { Test, TestingModule } from '@nestjs/testing';
import { TaoluController } from './taolu.controller';

describe('Taolu Controller', () => {
  let controller: TaoluController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaoluController],
    }).compile();

    controller = module.get<TaoluController>(TaoluController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
