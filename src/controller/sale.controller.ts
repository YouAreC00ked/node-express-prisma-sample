import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllSales = async (req: Request, res: Response) => {
  try {
    const sales = await prisma.sale.findMany({
      include: {
        code: true,
        customer: true,
      },
    })
    res.json(sales)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sales' })
  }
}

export const getSaleById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const sale = await prisma.sale.findUnique({
      where: { saleId: Number(id) },
      include: {
        code: true,
        customer: true,
      },
    })
    if (!sale) return res.status(404).json({ error: 'Sale not found' })
    res.json(sale)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sale' })
  }
}

export const createSale = async (req: Request, res: Response) => {
  try {
    const sale = await prisma.sale.create({
      data: req.body,
    })
    res.json(sale)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create sale' })
  }
}

export const updateSale = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const sale = await prisma.sale.update({
      where: { saleId: Number(id) },
      data: req.body,
    })
    res.json(sale)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update sale' })
  }
}

export const deleteSale = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.sale.delete({
      where: { saleId: Number(id) },
    })
    res.json({ message: 'Sale deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete sale' })
  }
}

