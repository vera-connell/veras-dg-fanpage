import { useAppDispatch } from '../hooks/hooks'
import { useState, FormEvent, ChangeEvent } from 'react'
import { fetchSongData } from '../actions/songs'

function SongFinder() {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value)
  }
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(fetchSongData(Number(searchTerm)))
    setSearchTerm('')
  }

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="songId"
          onChange={handleType}
          value={searchTerm}
        />
        <button>Find</button>
      </form>
    </div>
  )
}

export default SongFinder
