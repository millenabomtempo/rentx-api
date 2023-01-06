import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesService } from './ImportCategoriesService';

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoriesService = new ImportCategoriesService(
	categoriesRepository,
);

export const importCategoriesController = new ImportCategoriesController(
	importCategoriesService,
);
