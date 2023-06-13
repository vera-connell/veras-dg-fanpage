import express from 'express'
import { getAllSongs } from '../db/db'

const router = express.Router()

//unsure what this middleware does
router.use(express.json())

router.get('/songs', async (req, res) => {
  try {
    const songs = await getAllSongs()
    res.json(songs)
  } catch {
    res.sendStatus(404)
  }
})

export default router
