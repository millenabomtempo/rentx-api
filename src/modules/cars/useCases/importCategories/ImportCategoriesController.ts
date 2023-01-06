import { Request, Response } from 'express';

import { ImportCategoriesService } from './ImportCategoriesService';

export class ImportCategoriesController {
	constructor(private importCategoriesService: ImportCategoriesService) {}
	handle(request: Request, response: Response): Response {
		const { file } = request;

		this.importCategoriesService.execute(file);

		return response.send();
	}
}
