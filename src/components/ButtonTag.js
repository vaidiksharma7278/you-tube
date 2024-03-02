import React from 'react'
import Button from './Button'
const buttonNames = [
    "All",
    "Gadget",
    "Gaming",
    "Live",
    "News",
    "Cricket",
    "Podcasts",
    "Soccer",
    "Travel",
    "Recently uploaded",
    "Watched"
  ];


function ButtonTag() {
  return (
    <div className='flex m-2'>
        {buttonNames.map((name,index)=>(
             <Button key={index} name={name} />
        ))}
         
    </div>
  )
}

export default ButtonTag