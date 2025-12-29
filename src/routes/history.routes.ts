import { Router } from 'express'
import {
  getAllHistory,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory,
} from '../controller/history.controller.js'

const router = Router()

router.get('/', getAllHistory)
router.get('/:id', getHistoryById)
router.post('/', createHistory)
router.put('/:id', updateHistory)
router.delete('/:id', deleteHistory)

export default router

