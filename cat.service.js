"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cat_pet_service_1 = require("./cat-pet.service");
let CatService = class CatService {
    constructor(petService) {
        this.petService = petService;
        this.logger = new common_1.Logger();
        this.logger.log('Created CatService');
    }
    meow() {
        this.logger.log('Meow!');
    }
    pet() {
        this.petService.pet();
    }
};
CatService = __decorate([
    common_1.Injectable({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [cat_pet_service_1.CatPetService])
], CatService);
exports.CatService = CatService;
//# sourceMappingURL=cat.service.js.map