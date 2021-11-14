/* eslint-disable sonarjs/no-duplicate-string */

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";
import { Repository } from "@techmmunity/symbiosis-mongodb";
import { Append } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";

@Injectable()
export class ExampleService {
	public constructor(
		@InjectRepository(ExampleEntity)
		private readonly exampleRepository: Repository<ExampleEntity>,
	) {}

	public list() {
		return this.exampleRepository.find({});
	}

	public update() {
		return this.exampleRepository.save<ExampleEntity>({
			id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
			string: "bar",
			list: ["fooBar"],
			subEntity: {
				foo: 2,
			},
		});
	}

	public delete() {
		return this.exampleRepository.delete({
			id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
		});
	}

	public create() {
		return this.exampleRepository.save<ExampleEntity>({
			id: "472cbfbe-d7e4-487e-acd8-b045466a826c", // Hardcoded for the example
			string: "foo",
			list: ["foo", "bar"],
			subEntity: {
				foo: 1,
			},
		});
	}

	public complexUpdate() {
		return this.exampleRepository.save<ExampleEntity>({
			id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
			list: Append("fooBar"),
		});
	}

	public complexList() {
		return this.exampleRepository.find({
			where: {
				subEntity: {
					foo: 1,
				},
			},
		});
	}

	public complexDelete() {
		return this.exampleRepository.delete({
			subEntity: {
				foo: 1,
			},
		});
	}
}
