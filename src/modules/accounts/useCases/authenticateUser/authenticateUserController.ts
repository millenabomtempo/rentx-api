import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUserService } from './authenticateUserService'

export class AuthenticateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { password, email } = request.body

		const authUserService = container.resolve(AuthenticateUserService)

		const token = await authUserService.execute({ password, email })

		return response.json(token)
	}
}
