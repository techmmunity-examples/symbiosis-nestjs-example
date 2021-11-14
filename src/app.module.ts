import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";
import {
	Connection,
	MongodbConnectionOptions,
} from "@techmmunity/symbiosis-mongodb";
import { ExampleModule } from "api/example/example.module";

@Module({
	imports: [
		SymbiosisModule.forRoot<MongodbConnectionOptions>({
			class: Connection,
			options: {
				entitiesDir: ["src/api/**/*.entity.ts"],
				namingStrategy: {
					entity: "snake_case",
				},
				suffix: {
					entity: {
						remove: "Entity",
					},
				},
				databaseConfig: {
					url: process.env.MONGODB_URL,
					databaseName: process.env.MONGODB_DATABASE,
				},
			},
		}),
		ExampleModule,
	],
})
export class AppModule {}
