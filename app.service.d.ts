import { ModuleRef } from '@nestjs/core';
export declare class AppService {
    private moduleRef;
    private logger;
    constructor(moduleRef: ModuleRef);
    addStore(): Promise<void>;
}
