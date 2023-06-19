import { useEffect } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { useAppDispatch } from '../hooks/hooks'
import { fetchAllSongs } from '../actions/songs'
import { Link } from 'react-router-dom'
import SongFinder from './SongFinder'
import HomeButton from './HomeButton'

function SongsList() {
  const songsList = useAppSelector((state) => state.songsDisplay)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllSongs())
  }, [])
  return (
    <>
    <SongFinder />
      <h1>Certified Drain Classics</h1>
      
        {songsList.map((song, i) => {
          return (
            <p key={i}>
              <Link to={`/songs/${song.id}`}>{song.title}</Link>
            </p>
          )
        })}
        <HomeButton />
    </>
  )
}

export default SongsList
