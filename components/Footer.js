import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center items-center gap-5 py-3'>
      <p className='text-gray-400'>© 2024 Todo App</p>
      <h3><a href='https://www.github.com/pragathish07/' style={{textDecoration:"underline"}}>
          check out my github profile here!</a></h3>
    </div>
  )
}
