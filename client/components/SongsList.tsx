import { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { useAppDispatch } from '../hooks/hooks'
import { fetchAllSongs } from '../actions/songs'
import { Link } from 'react-router-dom'
import SongFinder from './SongFinder'
import HomeButton from './HomeButton'
import AddSong from './AddSong'

function SongsList() {
  const [showForm, setShowForm] = useState(false)
  const songsList = useAppSelector((state) => state.songsDisplay)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllSongs())
  }, [])
  //Useeffect triggers infinitely
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
      {showForm === false && (
        <button className="formButton" onClick={() => setShowForm(!showForm)}>
          Add A Song!
        </button>
      )}
      {showForm === true && (
        <>
          <AddSong />
          <br></br>
          <button className="formButton" onClick={() => setShowForm(!showForm)}>
            Hide Form
          </button>
        </>
      )}
      <br></br>
      <HomeButton />
    </>
  )
}

export default SongsList
