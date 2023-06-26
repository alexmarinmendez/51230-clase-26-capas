import { Router } from "express"
import { suma } from '../controllers/operaciones.controller.js'

const router = Router()

router.get('/suma', suma)

export default router