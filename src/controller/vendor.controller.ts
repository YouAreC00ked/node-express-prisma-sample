import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllVendors = async (req: Request, res: Response) => {
  try {
    const vendors = await prisma.vendor.findMany()
    res.json(vendors)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vendors' })
  }
}

export const getVendorById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const vendor = await prisma.vendor.findUnique({
      where: { vendorId: Number(id) },
    })
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' })
    res.json(vendor)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vendor' })
  }
}

export const createVendor = async (req: Request, res: Response) => {
  try {
    const vendor = await prisma.vendor.create({
      data: req.body,
    })
    res.json(vendor)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Vendor name already exists' })
    }
    res.status(500).json({ error: 'Failed to create vendor' })
  }
}

export const updateVendor = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const vendor = await prisma.vendor.update({
      where: { vendorId: Number(id) },
      data: req.body,
    })
    res.json(vendor)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Vendor name already exists' })
    }
    res.status(500).json({ error: 'Failed to update vendor' })
  }
}

export const deleteVendor = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.vendor.delete({
      where: { vendorId: Number(id) },
    })
    res.json({ message: 'Vendor deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete vendor' })
  }
}

