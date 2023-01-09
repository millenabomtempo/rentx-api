import { ISpecificationsRepository } from '../../repositories/implementations/ISpecificationsRepository'

interface IRequest {
	name: string
	description: string
}

export class CreateSpecificationService {
	constructor(
		private createSpecificationsRepository: ISpecificationsRepository
	) {}

	execute({ name, description }: IRequest) {
		const specificationAlreadyExists =
			this.createSpecificationsRepository.findByName(name)

		if (specificationAlreadyExists) {
			throw new Error('Specification already exists!')
		}
		this.createSpecificationsRepository.create({ name, description })
	}
}
