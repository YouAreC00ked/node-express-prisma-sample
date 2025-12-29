import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await prisma.customer.findMany()
    res.json(customers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' })
  }
}

export const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const customer = await prisma.customer.findUnique({
      where: { customerId: Number(id) },
      include: { sales: true },
    })
    if (!customer) return res.status(404).json({ error: 'Customer not found' })
    res.json(customer)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customer' })
  }
}

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await prisma.customer.create({
      data: req.body,
    })
    res.json(customer)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Customer email already exists' })
    }
    res.status(500).json({ error: 'Failed to create customer' })
  }
}

export const updateCustomer = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const customer = await prisma.customer.update({
      where: { customerId: Number(id) },
      data: req.body,
    })
    res.json(customer)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Customer email already exists' })
    }
    res.status(500).json({ error: 'Failed to update customer' })
  }
}

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.customer.delete({
      where: { customerId: Number(id) },
    })
    res.json({ message: 'Customer deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' })
  }
}

