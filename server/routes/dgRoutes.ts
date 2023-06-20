import express from 'express'
import {
  addNewSong,
  getAllSongs,
  getSongById,
  getSongsByArtist,
  getSongsByProducer,
} from '../db/db'

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

router.get('/songs/song/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const song = await getSongById(id)
    res.json(song)
  } catch {
    res.sendStatus(404)
  }
})

router.get('/songs/by/:artist', async (req, res) => {
  const artist = req.params.artist
  try {
    const song = await getSongsByArtist(artist)
    res.json(song)
  } catch {
    res.sendStatus(404)
  }
})

router.get('/songs/prod/:producer', async (req, res) => {
  const producer = req.params.producer
  try {
    const song = await getSongsByProducer(producer)
    res.json(song)
  } catch {
    res.sendStatus(404)
  }
})

router.post('/songs/add', async (req, res) => {
  try {
    const data = req.body
    const returnObj = await addNewSong(data)
    res.json(returnObj)
  } catch {
    res.sendStatus(404)
  }
})

export default router
