import { Router } from 'express'

import { ensureAuth } from '../middleware/ensureAuth'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuth)
specificationsRoutes.post('/', createSpecificationController.handle)

export { specificationsRoutes }
