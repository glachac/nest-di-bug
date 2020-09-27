import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CatService } from './cat.service';
import { Cat2Service } from './cat2/cat2.service';

@Injectable()
export class AppService {
  private logger = new Logger();

  constructor(
    private moduleRef: ModuleRef,
    // Force to be in context
  ) {
    this.logger.log('Created AppServer');

  }

  async addCat() {
    this.logger.log('`addCat()` called, should create a `CatService` and a `CatPetService` now...')
    const catService = await this.moduleRef.resolve(CatService);
    const cat2Service = await this.moduleRef.resolve(Cat2Service);
    catService.meow();
    catService.pet();
    cat2Service.meow();
    cat2Service.pet();
  }
}
