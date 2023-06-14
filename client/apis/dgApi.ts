import request from 'superagent'

export function fetchSong(id: number) {
  return request.get(`/api/v1/dg/songs/song/${id}`).then((res) => {
    return res.body
  })
}
