import { useEffect } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { useAppDispatch } from '../hooks/hooks'
import { fetchAllSongs } from '../actions/songs'
import { Link } from 'react-router-dom'

function SongsList() {
  const songsList = useAppSelector((state) => state.songsDisplay)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllSongs())
  }, [])
  return (
    <>
      <h1>Certified Drain Classics</h1>
      <ul>
        {songsList.map((song, i) => {
          return (
            <li key={i}>
              <Link to={`/songs/${song.id}`}>{song.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SongsList
