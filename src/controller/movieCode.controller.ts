import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllMovieCodes = async (req: Request, res: Response) => {
  try {
    const codes = await prisma.movieCode.findMany({
      include: {
        movies: true,
        vendor: true,
        studio: true,
      },
    })
    res.json(codes)
  } catch (error) {
    console.error('Fetch all movie codes error:', error)
    res.status(500).json({ error: 'Failed to fetch movie codes' })
  }
}

export const getMovieCodeById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const code = await prisma.movieCode.findUnique({
      where: { codeId: Number(id) },
      include: {
        movies: true,
        vendor: true,
        studio: true,
        sales: true,
        availabilities: { include: { platform: true } },
      },
    })
    if (!code) return res.status(404).json({ error: 'Movie code not found' })
    res.json(code)
  } catch (error) {
    console.error(`Fetch movie code ${id} error:`, error)
    res.status(500).json({ error: 'Failed to fetch movie code' })
  }
}

export const createMovieCode = async (req: Request, res: Response) => {
  try {
    const { movieIds, ...data } = req.body
    
    const code = await prisma.movieCode.create({
      data: {
        ...data,
        movies: movieIds ? {
          connect: movieIds.map((id: number) => ({ movieId: id }))
        } : undefined
      },
      include: {
        movies: true
      }
    })
    res.json(code)
  } catch (error: any) {
    console.error('Create movie code error:', error)
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Movie code already exists' })
    }
    res.status(500).json({ error: 'Failed to create movie code' })
  }
}

export const updateMovieCode = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const { movieIds, ...data } = req.body

    const code = await prisma.movieCode.update({
      where: { codeId: Number(id) },
      data: {
        ...data,
        movies: movieIds ? {
          set: movieIds.map((id: number) => ({ movieId: id }))
        } : undefined
      },
      include: {
        movies: true
      }
    })
    res.json(code)
  } catch (error: any) {
    console.error(`Update movie code ${id} error:`, error)
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Movie code already exists' })
    }
    res.status(500).json({ error: 'Failed to update movie code' })
  }
}

export const deleteMovieCode = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    // 1. Get associated movie IDs before deleting the code
    const movieCode = await prisma.movieCode.findUnique({
      where: { codeId: Number(id) },
      include: { movies: { select: { movieId: true } } }
    })

    if (!movieCode) {
      return res.status(404).json({ error: 'Movie code not found' })
    }

    const movieIds = movieCode.movies.map(m => m.movieId)

    // 2. Delete the movie code
    await prisma.movieCode.delete({
      where: { codeId: Number(id) },
    })

    // 3. Delete movies that no longer have any associated codes
    if (movieIds.length > 0) {
      for (const movieId of movieIds) {
        const codeCount = await prisma.movieCode.count({
          where: { movies: { some: { movieId } } }
        })
        
        if (codeCount === 0) {
          try {
            await prisma.movie.delete({ where: { movieId } })
          } catch (e) {
            console.error(`Failed to delete orphaned movie ${movieId}:`, e)
          }
        }
      }
    }

    res.json({ message: 'Movie code and its orphaned movies deleted' })
  } catch (error) {
    console.error(`Delete movie code ${id} error:`, error)
    res.status(500).json({ error: 'Failed to delete movie code' })
  }
}

