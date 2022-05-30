import { Module } from "@nestjs/common";
import { ThothOMModule } from "@thothom/nestjs";

import { ExampleController } from "./example.controller";
import { ExampleEntity } from "./example.entity";
import { ExampleService } from "./example.service";

@Module({
	imports: [ThothOMModule.forFeature([ExampleEntity])],
	controllers: [ExampleController],
	providers: [ExampleService],
})
export class ExampleModule {}
