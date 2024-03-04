import React from 'react'

function Button({name,index}) {
  return (
    <div>
        <button className='bg-gray-200 m-2 p-2 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button;