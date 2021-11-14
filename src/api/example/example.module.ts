import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

import { ExampleController } from "./example.controller";
import { ExampleEntity } from "./example.entity";
import { ExampleService } from "./example.service";

@Module({
	imports: [SymbiosisModule.forFeature([ExampleEntity])],
	controllers: [ExampleController],
	providers: [ExampleService],
})
export class ExampleModule {}
