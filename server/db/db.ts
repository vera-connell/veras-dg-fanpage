import db from './connection'

export function getAllSongs() {
  return db('songs').select()
}
