import type { ThunkAction } from '../store'
import { Song } from '../models/song'
import { fetchSong, fetchSongs } from '../apis/dgApi'

//Action declarations

export type SongAction =
  | { type: 'FETCH_SONG'; payload: number }
  | { type: 'DISPLAY_SONG'; payload: Song }
  | { type: 'SHOW_ERROR'; payload: string }
  | { type: 'FETCH_ALL'; payload: null }
  | { type: 'DISPLAY_ALL'; payload: Song[] }

// Action constructors

export function requestAllSongs(): SongAction {
  return {
    type: 'FETCH_ALL',
    payload: null,
  }
}

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

export function displaySongs(songData: Song[]): SongAction {
  return {
    type: 'DISPLAY_ALL',
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

export function fetchAllSongs(): ThunkAction {
  return (dispatch) => {
    dispatch(requestAllSongs())
    return fetchSongs()
      .then((songData) => {
        dispatch(displaySongs(songData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

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
