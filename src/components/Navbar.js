import React from 'react'

function Navbar() {
  return (
    <div className='nav-div'>
      <span>
        🎥 Power Play Movies        
      </span>
      <span>
        <button className='btn btn-dark'>Home</button>
        <button className='btn btn-dark'>Movies</button>
        <button className='btn btn-dark'>Series</button>
        <button className='btn btn-dark'>Account</button>
      </span>
    </div>
  )
}

export default Navbar;