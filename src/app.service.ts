import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CatService } from './cat.service';

@Injectable()
export class AppService {
  private logger = new Logger();

  constructor(
    private moduleRef: ModuleRef,
  ) {}

  async addCat() {
    this.logger.log('`addCat()` called, should create a `CatService` and a `CatPetService` now...')
    const catService = await this.moduleRef.create(CatService);
    catService.meow();
    catService.pet();
  }
}
