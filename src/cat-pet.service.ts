import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({scope: Scope.TRANSIENT})
export class CatPetService {
  private logger = new Logger();

  constructor() {
    this.logger.log('Created CatPetService');
  }

  pet() {
    this.logger.log('Purrrrr!'); // Error because `this` is an empty object?
  }
}
