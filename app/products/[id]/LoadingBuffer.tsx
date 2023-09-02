import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LoadingBuffer = () => {
    return (
        <div className='mt-32 mx-6' >
            <Skeleton className='w-20 h-10 mx-4' />
            <div className='grid grid-cols-12 gap-6 mt-8'>
                <div className='col-span-12 md:col-span-6 h-full py-10'>
                    <div className=' relative pb-72 
                '>
                        <Skeleton className='w-full h-full mx-4 absolute' />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 py-4 mx-8 '>
                    <div className='mt-4'>
                        <Skeleton className='w-8/12 h-5 rounded-lg'/>
                        <Skeleton className='w-full h-4 rounded-lg mt-4'/>
                        <Skeleton className='w-full h-4 rounded-lg my-2'/>
                        <Skeleton className='w-full h-4 rounded-lg my-2'/>
                        <Skeleton className='w-7/12 h-4 rounded-lg my-2'/>
                        <Skeleton className='rounded-full w-20 h-4 bg-red-300 my-4'/>
                        <Skeleton className='w-24 h-4 rounded-lg my-2'/>
                        <Skeleton className='w-24 h-4 rounded-lg my-2'/>
                        <Skeleton className='w-28 h-8 my-2 rounded-sm border-red-300/50 border shadow-md'/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoadingBuffer