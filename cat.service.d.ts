import { CatPetService } from './cat-pet.service';
export declare class CatService {
    private petService;
    private logger;
    constructor(petService: CatPetService);
    meow(): void;
    pet(): void;
}
