import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/SideMenuSlice';
function WatchPage() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    const [searchParams] = useSearchParams();
    return (
        <div className='flex flex-col w-full'>
            <div className="px-5 flex w-full mt-2">
        <div className="">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <h1>Livechat</h1>
        </div>
      </div>
        </div>
    )
}

export default WatchPage