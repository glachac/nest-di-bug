import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat.service';
import { CatPetService } from './cat-pet.service';

@Module({
  imports: [],
  providers: [
    AppService,
    CatService,
    CatPetService,
  ],
})
export class AppModule {}
