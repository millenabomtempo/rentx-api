import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationService } from './CreateSpecificationService';

const specificationsRepository = new SpecificationsRepository();

const createCategoriesService = new CreateSpecificationService(
	specificationsRepository,
);

export const createSpecificationController = new CreateSpecificationController(
	createCategoriesService,
);
