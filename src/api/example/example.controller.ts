import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ExampleService } from "./example.service";

@Controller("/example")
export class ExampleController {
	public constructor(private readonly exampleService: ExampleService) {}

	@Get()
	public list() {
		return this.exampleService.list();
	}

	@Put()
	public put() {
		return this.exampleService.update();
	}

	@Delete()
	public delete() {
		return this.exampleService.delete();
	}

	@Post()
	public create() {
		return this.exampleService.create();
	}

	@Put("/complex")
	public complexUpdate() {
		return this.exampleService.complexUpdate();
	}

	@Get("/complex")
	public complexList() {
		return this.exampleService.complexList();
	}

	@Delete("/complex")
	public complexDelete() {
		return this.exampleService.complexDelete();
	}
}
