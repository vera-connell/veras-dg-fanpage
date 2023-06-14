import { Song } from '../models/song'
import { SongAction } from '../actions/songs'

const initialState: Song = {
  id: 0,
  title: 'for you',
  artist: 'bladee & ekko2k',
  producer: 'whitearmor',
  album: 'red light',
}

function songDisplay(state = initialState, action: SongAction): Song {
  const { type, payload } = action

  switch (type) {
    case 'DISPLAY_SONG':
      return payload
    default:
      return state
  }
}

export default songDisplay
