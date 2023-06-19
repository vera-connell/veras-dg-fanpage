import request from 'superagent'

export function fetchSong(id: number) {
  return request.get(`/api/v1/dg/songs/song/${id}`).then((res) => {
    return res.body
  })
}

export function fetchSongs() {
  return request.get('/api/v1/dg/songs').then((res) => {
    console.log(res.body)
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