import { Router } from 'express'
import {
  createVendor,
  deleteVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
} from '../controller/vendor.controller.js'

const router = Router()

router.get('/', getAllVendors)
router.get('/:id', getVendorById)
router.post('/', createVendor)
router.put('/:id', updateVendor)
router.delete('/:id', deleteVendor)

export default router

