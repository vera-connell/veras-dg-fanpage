import { SongAction } from '../actions/songs'

function errorMessage(state = '', action: SongAction): string {
  const { type } = action

  switch (type) {
    case 'SHOW_ERROR':
      return action.payload
    default:
      return state
  }
}

export default errorMessage
