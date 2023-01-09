import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryService } from './CreateCategoryService'

const categoriesRepository = CategoriesRepository.getInstance()

const createCategoriesService = new CreateCategoryService(categoriesRepository)

export const createCategoryController = new CreateCategoryController(
	createCategoriesService
)
