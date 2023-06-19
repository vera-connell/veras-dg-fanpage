import type { ThunkAction } from '../store'
import { Song } from '../models/song'
import { fetchSong, fetchSongs, searchSongsByArtist, searchSongsByProducer } from '../apis/dgApi'

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

// Thunk from hell, avert your eyes. Couldn't make async flow work with switch cases so this is penance.

export function searchSongs(searchTerm: string, field: string): ThunkAction {
 if (field === "artist") {
  return (dispatch) => {
    console.log(`searching for songs by ${searchTerm}`)
    return searchSongsByArtist(searchTerm)
      .then((songData) => {
        dispatch(displaySongs(songData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
else if (field === "producer") {
  console.log(`searching for songs produce by ${searchTerm}`)
  return (dispatch) => {
    return searchSongsByProducer(searchTerm)
      .then((songData) => {
        dispatch(displaySongs(songData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
} else {
  return (dispatch) => {
    console.log('displaying all')
    return fetchSongs()
      .then((songData) => {
        dispatch(displaySongs(songData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
}



