import { inject, injectable } from 'tsyringe'

import { ISpecificationsRepository } from '../../repositories/implementations/ISpecificationsRepository'

interface IRequest {
	name: string
	description: string
}

@injectable()
export class CreateSpecificationService {
	constructor(
		@inject('SpecificationsRepository')
		private createSpecificationsRepository: ISpecificationsRepository
	) {}

	async execute({ name, description }: IRequest): Promise<void> {
		const specificationAlreadyExists =
			await this.createSpecificationsRepository.findByName(name)

		if (specificationAlreadyExists) {
			throw new Error('Specification already exists!')
		}

		await this.createSpecificationsRepository.create({ name, description })
	}
}
