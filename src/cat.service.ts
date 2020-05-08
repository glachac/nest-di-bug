import { Injectable, Logger, Scope } from '@nestjs/common';
import { CatPetService } from './cat-pet.service';

@Injectable({scope: Scope.TRANSIENT})
export class CatService {
  private logger = new Logger();

  constructor(
    private petService: CatPetService
  ) {
    this.logger.log('Created CatService');
  }

  meow() {
    this.logger.log('Meow!');
  }

  pet() {
    this.petService.pet();
  }
}
