'use client'
import useTimer from "@/hooks/timer";

export function Timer(){
    const {seconds} = useTimer(10);
    return <div className='flex gap-2 items-center'>
        <div className="border-2 rounded-full p-2 text-white">{seconds}s</div></div>
    }