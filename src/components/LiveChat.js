import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch,useSelector } from 'react-redux';
import { LIVE_COUNT } from '../utils/config'
import { addMessage } from '../utils/chatSlice';
import { generateMessage,generateName } from '../utils/helper';
function LiveChar() {
  const dispatch = useDispatch();
  const chatMessage=useSelector(store=>store.chat.message);
  const [livemessage,setLiveMessage]=useState();
  useEffect(()=>{
      const i=setInterval(()=>{
          dispatch(
            addMessage({
              name:generateName(),
              message:generateMessage(20)
            })
          )
      },2000)
      return()=>clearInterval(i);
  },[])
  return (
    <>
    <div className='  overflow-y-scroll flex flex-col-reverse w-full border border-black ml-2 p-2 h-[500px] rounded-lg'>
      <div>
    {chatMessage.map((c,i)=>(
      <ChatMessage key={i} name={c.name} message={c.message} />
    ))}
      </div>
    </div>
    <div>
      <form
          className='w-full p-2 border border-black'
          onSubmit={(e)=>{
            e.preventDefault();
            dispatch(
              addMessage({
                name:"Vaidik Sharma",
                message:livemessage,
              })
            )
            setLiveMessage("")
          }}
      >
        <input className='px-2 w-96' type='text' value={livemessage} onChange={(e)=>{
          setLiveMessage(e.target.value);
        }}/>
         <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
    </>
  )
}

export default LiveChar