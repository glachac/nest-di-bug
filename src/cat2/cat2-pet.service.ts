import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({scope: Scope.TRANSIENT})
export class Cat2PetService {
  private logger = new Logger();

  constructor() {
    this.logger.log('Created Cat2PetService');
  }

  pet() {
    this.logger.log('Cat2PetService Purrrrr!'); 
  }
}
