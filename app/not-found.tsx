'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <div className='w-screen h-screen flex items-center justify-center mt-16 max-w-screen-xl max-h-screen-lg'>
      <div className='h-20 -translate-y-full w-[350px] md:w-[450px]'>
        <div className='text-center'>
          <h2 className='text-xl font-bold'>Something went wrong!</h2>
          <p className=''>The page you are trying to navigate doesn&apos;t exist or somehing went wrong while trying to navigate. Trying reloading the page or go to Home page.</p>
        </div>
        <div className='mx-auto flex justify-center my-2'>
          <Button variant={'destructive'} className='mx-2' onClick={() => router.push("/")}>Go Home</Button>
          <Button variant={'outline'} className='mx-2' onClick={() => router.refresh()}>Reload</Button>
        </div>
      </div>
    </div>

  )
}

export default NotFound