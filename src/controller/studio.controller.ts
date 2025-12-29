import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllStudios = async (req: Request, res: Response) => {
  try {
    const studios = await prisma.studio.findMany()
    res.json(studios)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch studios' })
  }
}

export const getStudioById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const studio = await prisma.studio.findUnique({
      where: { studioId: Number(id) },
    })
    if (!studio) return res.status(404).json({ error: 'Studio not found' })
    res.json(studio)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch studio' })
  }
}

export const createStudio = async (req: Request, res: Response) => {
  try {
    const studio = await prisma.studio.create({
      data: req.body,
    })
    res.json(studio)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Studio name already exists' })
    }
    res.status(500).json({ error: 'Failed to create studio' })
  }
}

export const updateStudio = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const studio = await prisma.studio.update({
      where: { studioId: Number(id) },
      data: req.body,
    })
    res.json(studio)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Studio name already exists' })
    }
    res.status(500).json({ error: 'Failed to update studio' })
  }
}

export const deleteStudio = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.studio.delete({
      where: { studioId: Number(id) },
    })
    res.json({ message: 'Studio deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete studio' })
  }
}

