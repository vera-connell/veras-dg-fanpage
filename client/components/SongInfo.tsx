import { useAppSelector } from '../hooks/hooks'
import { useParams } from 'react-router-dom'

//Fix this ts Error?

function SongInfo () {
  const { search } = useParams()
  const songsArr = useAppSelector((state) => state.songsDisplay)
  const { title, artist, producer, album } = songsArr.find((song) => song.id === Number(search) ) || {id: 0, title: 'for you', artist: 'bladee & ekko2k', producer: 'whitearmor', album: 'red light (this is the sample data object!!!)'}
  return (
    <div className="songData">
      <h1>{title}</h1>
      <p>{artist}</p>
      <p>prod. {producer}</p>
      <p>{album}</p>
    </div>
  )
}

export default SongInfo