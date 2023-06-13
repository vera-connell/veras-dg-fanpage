import db from './connection'

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
