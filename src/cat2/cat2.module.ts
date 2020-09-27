import { Module, Scope } from '@nestjs/common';
import { Cat2PetService } from './cat2-pet.service';
import { Cat2Service } from './cat2.service';

@Module({
  imports: [],
  providers: [ 
    Cat2Service, 
    Cat2PetService
  ],
  exports:[Cat2Service,Cat2PetService]
})
export class Cat2Module {}
