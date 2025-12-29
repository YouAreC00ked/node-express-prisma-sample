import { Router } from 'express'
import {
  createSale,
  deleteSale,
  getAllSales,
  getSaleById,
  updateSale,
} from '../controller/sale.controller.js'

const router = Router()

router.get('/', getAllSales)
router.get('/:id', getSaleById)
router.post('/', createSale)
router.put('/:id', updateSale)
router.delete('/:id', deleteSale)

export default router

