import React from 'react'
import Moviecontainer from './Moviecontainer'

function Movielist({movies}) {
  return (
    <div className='movie-list'>
        {movies.map(movie => <Moviecontainer key={movie.imdbID} movie={movie}/>)}
    </div>
  )
}

export default Movielist