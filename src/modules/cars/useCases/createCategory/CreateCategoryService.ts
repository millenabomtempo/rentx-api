import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

interface IRequest {
	name: string
	description: string
}

export class CreateCategoryService {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExistis = this.categoriesRepository.findByName(name)

		if (categoryAlreadyExistis) {
			throw new Error('Category already exists!')
		}

		this.categoriesRepository.create({ name, description })
	}
}
