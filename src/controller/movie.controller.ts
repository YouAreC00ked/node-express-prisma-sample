import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany({
      include: { studio: true },
    })
    res.json(movies)
  } catch (error) {
    console.error('Fetch all movies error:', error)
    res.status(500).json({ error: 'Failed to fetch movies' })
  }
}

export const getMovieById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const movie = await prisma.movie.findUnique({
      where: { movieId: Number(id) },
      include: { studio: true, movieCodes: true },
    })
    if (!movie) return res.status(404).json({ error: 'Movie not found' })
    res.json(movie)
  } catch (error) {
    console.error(`Fetch movie ${id} error:`, error)
    res.status(500).json({ error: 'Failed to fetch movie' })
  }
}

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { quality, ...data } = req.body
    const movie = await prisma.movie.create({
      data: {
        ...data,
        quality: quality as any
      },
    })
    res.json(movie)
  } catch (error: any) {
    console.error('Create movie error:', error)
    
    // Handle unique constraint violation (P2002)
    if (error.code === 'P2002') {
      return res.status(409).json({ 
        error: 'A movie with this title and release year already exists' 
      })
    }
    
    res.status(500).json({ error: 'Failed to create movie' })
  }
}

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const { quality, ...data } = req.body
    const movie = await prisma.movie.update({
      where: { movieId: Number(id) },
      data: {
        ...data,
        quality: quality as any
      },
    })
    res.json(movie)
  } catch (error: any) {
    console.error(`Update movie ${id} error:`, error)
    res.status(500).json({ error: 'Failed to update movie' })
  }
}

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    // 1. Get associated movie codes before deleting the movie
    const movie = await prisma.movie.findUnique({
      where: { movieId: Number(id) },
      include: { movieCodes: { select: { codeId: true } } }
    })

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    const codeIds = movie.movieCodes.map(c => c.codeId)

    // 2. Delete the movie
    await prisma.movie.delete({
      where: { movieId: Number(id) },
    })

    // 3. Delete movie codes that no longer have any associated movies
    if (codeIds.length > 0) {
      for (const codeId of codeIds) {
        const movieCount = await prisma.movie.count({
          where: { movieCodes: { some: { codeId } } }
        })
        
        if (movieCount === 0) {
          try {
            await prisma.movieCode.delete({ where: { codeId } })
          } catch (e) {
            console.error(`Failed to delete orphaned movie code ${codeId}:`, e)
          }
        }
      }
    }

    res.json({ message: 'Movie and its orphaned movie codes deleted' })
  } catch (error) {
    console.error(`Delete movie ${id} error:`, error)
    res.status(500).json({ error: 'Failed to delete movie' })
  }
}

