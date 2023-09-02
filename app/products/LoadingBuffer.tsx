import React from 'react'
import { Card, CardContent, CardFooter, } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingBuffer = () => {
  return (
    <Card className='bg-black/10'>
      <CardContent className='w-full p-0 m-0'>
        <Skeleton className='h-64 w-full' />
      </CardContent>
      <CardContent className='p-0 mx-2 mt-4'>
        <Skeleton className='w-8/12 h-3 my-2 ' />
        <div className='flex justify-between'>
          <Skeleton className='w-14 h-3 my-2 ' />
          <Skeleton className='w-14 h-3 my-2 ' />
        </div>
      </CardContent>
      <CardFooter className='mx-2 p-0 my-2 mb-4'>
        <Skeleton className='ml-2 h-8 w-28 mb' />
      </CardFooter>
    </Card>
  )
}

export default LoadingBuffer