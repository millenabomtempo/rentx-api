import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'

@injectable()
export class CreateUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository
	) {}

	async execute({
		name,
		email,
		driver_license,
		password
	}: ICreateUserDTO): Promise<void> {
		const userAlreadyExistis = await this.usersRepository.findByEmail(email)

		if (userAlreadyExistis) {
			throw new Error('User already exists!')
		}

		const passwordHash = await hash(password, 8)

		await this.usersRepository.create({
			name,
			email,
			driver_license,
			password: passwordHash
		})
	}
}
