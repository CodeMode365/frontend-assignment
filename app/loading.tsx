import React from 'react'
import { VscLoading } from "react-icons/vsc"

const loading = () => {
  return (
    <div className='mt-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full'>
      <VscLoading size={56} className="text-red-500 animate-spin -tranlsate-y-[50px]"/>
    </div>
  )
}

export default loading