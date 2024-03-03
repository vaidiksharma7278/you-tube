import React from 'react'

function ChatMessage({name,message}) {
  return (
    <div className=' flex item-center'>
        <img  alt='user' className='h-9 p-2' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' />
        <span className='font-bold p-2 '>{name}</span>
        <span className='p-2'> {message}</span>
    </div>
  )
}

export default ChatMessage