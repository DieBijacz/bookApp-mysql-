import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='d-flex flex-center'>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Container