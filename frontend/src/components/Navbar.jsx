import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const Navbar = () => {
  return (
    <div id='navbar'>
      <Container>
        <div className='d-flex'>
          <div className='logo'>Book Share</div>
          <div className='d-flex gap-3 ms-auto'>
            <Link to='/'>Home</Link>
            <Link to='/book'>Book</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar