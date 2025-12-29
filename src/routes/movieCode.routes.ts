import { Router } from 'express'
import {
  createMovieCode,
  deleteMovieCode,
  getAllMovieCodes,
  getMovieCodeById,
  updateMovieCode,
} from '../controller/movieCode.controller.js'

const router = Router()

router.get('/', getAllMovieCodes)
router.get('/:id', getMovieCodeById)
router.post('/', createMovieCode)
router.put('/:id', updateMovieCode)
router.delete('/:id', deleteMovieCode)

export default router

