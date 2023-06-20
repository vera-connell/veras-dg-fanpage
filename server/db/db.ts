import db from './connection'
import { NewSong } from '../../client/models/song'

export function getAllSongs() {
  return db('songs').select()
}

export function getSongById(id: number) {
  return db('songs').select().where({ id })
}

export function getSongsByArtist(artist: string) {
  return db('songs').select().where('artist', 'like', `%${artist}%`)
}

export function getSongsByProducer(producer: string) {
  return db('songs').select().where('producer', 'like', `%${producer}%`)
}

export function addNewSong(data: NewSong) {
  return db('songs').insert(data).returning('*')
}