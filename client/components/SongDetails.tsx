//React component to render all songs.
//Use seperation of concerns to call thunks in a parent and pass data in. then the same code can be used to render search results.

import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { useParams } from 'react-router-dom'
import { fetchSongData } from '../actions/songs'
import { useEffect } from 'react'

function SongDetails() {
  const { search } = useParams()
  const { id, title, artist, producer, album } = useAppSelector(
    (state) => state.songDisplay
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongData(Number(search)))
  }, [])
  return (
    <div className="songData">
      <h1>{title}</h1>
      <p>{artist}</p>
      <p>prod. {producer}</p>
      <p>{album}</p>
    </div>
  )
}

export default SongDetails
