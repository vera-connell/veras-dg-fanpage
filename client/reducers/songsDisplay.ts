import { Song } from '../models/song'
import { SongAction } from '../actions/songs'

const initialState: Song[] = [
  {
    id: 0,
    title: 'for you',
    artist: 'bladee & ekko2k',
    producer: 'whitearmor',
    album: 'red light',
  },
]

function songsDisplay(state = initialState, action: SongAction): Song[] {
  const { type, payload } = action

  switch (type) {
    case 'DISPLAY_ALL':
      return [...payload]
    case 'ADD_SONG':
      return [...state, payload]
    default:
      return state
  }
}

export default songsDisplay
