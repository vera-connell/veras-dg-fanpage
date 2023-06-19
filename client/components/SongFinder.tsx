import { useAppDispatch } from '../hooks/hooks'
import { useState, FormEvent, ChangeEvent } from 'react'
import {  searchSongs } from '../actions/songs'

function SongFinder() {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [field, setField] = useState('artist')
  const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value)
  }
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(searchSongs(searchTerm, field))
    setSearchTerm('')
  }
  const changeField = () => {
    //toggles search field
    switch(field) {
    case 'artist':
    setField('producer')
    break
    case 'producer':
      setField('artist')
    break
    }
  }

  return (
    <div className="searchForm">
      <p>Filter Songs By:</p>
      <button onClick={changeField}>{field}</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchTerms"
          onChange={handleType}
          value={searchTerm}
        />
        <button>Find</button>
      </form>
    </div>
  )
}

export default SongFinder
