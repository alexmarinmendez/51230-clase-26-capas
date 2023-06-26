import { Router } from "express"
import { suma, resta } from '../controllers/operaciones.controller.js'

const router = Router()

router.get('/suma', suma)
router.get('/resta', resta)

export default router