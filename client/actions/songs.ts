import type { ThunkAction } from '../store'
import { Song } from '../models/song'
import { fetchSong } from '../apis/dgApi'

//Action declarations

export type SongAction =
  | { type: 'FETCH_SONG'; payload: number }
  | { type: 'DISPLAY_SONG'; payload: Song }
  | { type: 'SHOW_ERROR'; payload: string }

// Action constructors

export function requestSongById(id: number): SongAction {
  return {
    type: 'FETCH_SONG',
    payload: id,
  }
}

export function displaySong(songData: Song): SongAction {
  return {
    type: 'DISPLAY_SONG',
    payload: songData,
  }
}

export function showError(errorMessage: string): SongAction {
  return {
    type: 'SHOW_ERROR',
    payload: errorMessage,
  }
}

//Api Calls

export function fetchSongData(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(requestSongById(id))
    return fetchSong(id)
      .then((songData) => {
        const song = songData[0]
        dispatch(displaySong(song))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
