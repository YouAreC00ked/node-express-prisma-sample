import { Router } from 'express'
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from '../controller/movie.controller.js'

const router = Router()

router.get('/', getAllMovies)
router.get('/:id', getMovieById)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)

export default router

