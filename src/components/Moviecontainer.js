import React from 'react'
import Reviewlist from './Reviewlist';


function Moviecontainer({movie}) {
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <div>
            <h3 className='movie-title'>{movie.Title}</h3>
          </div>
          <img src = {movie.Poster} className='movieposter'/>
        </div>
        <div className='card-body'>
          <h5>Released: {movie.Year}</h5>
          <hr/>
          <Reviewlist />
        </div>
      </div>
    </div>
  )
}

export default Moviecontainer;