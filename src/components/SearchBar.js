import React from 'react'

export default function SearchBar(props) {
  return (
    <>
    <form>
      <input type="text" placeholder='Enter city or town name' onSubmit={event => {event.preventDefault();console.log(event.target.value)}}/>
      <button type='submit'>search</button>
    </form>
    </>
  )
}
