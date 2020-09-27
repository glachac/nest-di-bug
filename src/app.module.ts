import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat.service';
import { CatPetService } from './cat-pet.service';
import { Cat2Service } from './cat2/cat2.service';
import { Cat2PetService } from './cat2/cat2-pet.service';
import { Cat2Module } from './cat2/cat2.module';

@Module({
  imports: [Cat2Module],
  providers: [
    AppService,
    CatService,
    CatPetService,
    // I Should not need to include these explicitly
    // Cat2Service,
    // Cat2PetService
  ],
})
export class AppModule {}
