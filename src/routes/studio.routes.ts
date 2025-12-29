import { Router } from 'express'
import {
  createStudio,
  deleteStudio,
  getAllStudios,
  getStudioById,
  updateStudio,
} from '../controller/studio.controller.js'

const router = Router()

router.get('/', getAllStudios)
router.get('/:id', getStudioById)
router.post('/', createStudio)
router.put('/:id', updateStudio)
router.delete('/:id', deleteStudio)

export default router

