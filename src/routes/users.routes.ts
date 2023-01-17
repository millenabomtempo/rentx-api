import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../config/upload'
import { ensureAuth } from '../middleware/ensureAuth'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvataeController = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch(
	'/avatar',
	ensureAuth,
	uploadAvatar.single('avatar'),
	updateUserAvataeController.handle
)

export { usersRoutes }
