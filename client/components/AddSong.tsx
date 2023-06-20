import { useAppDispatch } from "../hooks/hooks";
import { useState, FormEvent, ChangeEvent } from "react";
import { postSong } from "../actions/songs";

function AddSong() {
  const dispatch = useAppDispatch()
  const [ songData, setSongData ] = useState({ title: '', artist: '', producer:'', album:''})
  const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
    const key = evt.target.id
    const newData = {
      ...songData, 
      [key]: evt.target.value
    }
    setSongData(newData)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(postSong(songData))
    setSongData({ title: '', artist: '', producer:'', album:''})
  }

  return (
    <div className="searchForm">
     <form onSubmit={handleSubmit}>
       <label htmlFor='title'>Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleType}
          value={songData.title}
        />
        <label htmlFor='artist'>Artist:</label>
            <input
          type="text"
          id="artist"
          onChange={handleType}
          value={songData.artist}
        />
        <label htmlFor='producer'>Producer:</label>
            <input
          type="text"
          id="producer"
          onChange={handleType}
          value={songData.producer}
        />
        <label htmlFor='album'>Album:</label>
            <input
          type="text"
          id="album"
          onChange={handleType}
          value={songData.album}
        />
        <button className="formButton">Submit</button>
      </form>
    </div>
  )
}

export default AddSong