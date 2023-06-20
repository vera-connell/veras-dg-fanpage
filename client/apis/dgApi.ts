import request from 'superagent'
import { NewSong } from '../models/song'

export function fetchSong(id: number) {
  return request.get(`/api/v1/dg/songs/song/${id}`).then((res) => {
    return res.body
  })
}

export function fetchSongs() {
  return request.get('/api/v1/dg/songs').then((res) => {
    return res.body
  })
}

export function searchSongsByArtist(searchTerm: string) {
  return request.get(`/api/v1/dg/songs/by/${searchTerm}`).then((res) => {
    return res.body
  })
}

export function searchSongsByProducer(searchTerm: string) {
  return request.get(`/api/v1/dg/songs/prod/${searchTerm}`).then((res) => {
    return res.body
  })
}

//Clientside post req to add songs to the db!

export function addSong(song: NewSong) {
  return request.post('/api/v1/dg/songs/add')
  .send(song)
  .then((res) => {
    return res.body
  })
}