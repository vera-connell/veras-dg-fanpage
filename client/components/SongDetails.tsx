//React component to render all songs.
import { useAppSelector } from '../hooks/hooks'

function SongDetails() {
  const { id, title, artist, producer, album } = useAppSelector(
    (state) => state.songDisplay
  )
  return (
    <div className="songData">
      <h1>{title}</h1>
      <ul>
        <li>{artist}</li>
        <li>prod. {producer}</li>
        <li>{album}</li>
      </ul>
    </div>
  )
}

export default SongDetails
