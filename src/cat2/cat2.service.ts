import { Injectable, Logger, Scope } from '@nestjs/common';
import { Cat2PetService } from './cat2-pet.service';

@Injectable({scope: Scope.TRANSIENT})
export class Cat2Service {
  private logger = new Logger();

  constructor(
    private petService: Cat2PetService
  ) {
    this.logger.log('Created Cat2Service');
  }

  meow() {
    this.logger.log('Cat2Service Meow!');
  }

  pet() {
    this.petService.pet();
  }
}
