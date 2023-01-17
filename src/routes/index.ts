import { Router } from 'express'

import { authRoutes } from './authenticate.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specification.routes'
import { usersRoutes } from './users.routes'

export const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/users', usersRoutes)
router.use(authRoutes)
