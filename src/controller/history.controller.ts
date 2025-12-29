import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllHistory = async (req: Request, res: Response) => {
  try {
    const history = await prisma.history.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history' })
  }
}

export const getHistoryById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const history = await prisma.history.findUnique({
      where: { historyId: Number(id) },
    })
    if (!history) return res.status(404).json({ error: 'History not found' })
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history' })
  }
}

export const createHistory = async (req: Request, res: Response) => {
  try {
    const history = await prisma.history.create({
      data: req.body,
    })
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create history' })
  }
}

export const updateHistory = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const history = await prisma.history.update({
      where: { historyId: Number(id) },
      data: req.body,
    })
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update history' })
  }
}

export const deleteHistory = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.history.delete({
      where: { historyId: Number(id) },
    })
    res.json({ message: 'History deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete history' })
  }
}
