'use client'

import React from 'react'
import useFetch from '@/hooks/useFetch'
import SingleCard from './components/SingleCard'
import { ProductType } from '@/types/product'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LoadingBuffer from './LoadingBuffer'
import ErrorPage from '@/components/ErrorPage'


const Products = () => {
  const { data, isLoading, isError }: { data: any, isLoading: boolean, isError: boolean } = useFetch()


  return (
    !isError ? (
      <div className='mt-32 px-14'>
        <h2 className='text-2xl font-bold text-rose-500 text-center my-4'>Products</h2>
        <div className="flex w-full items-center space-x-2 justify-end " >
          <Input type="text" placeholder="Search" className='max-w-sm' />
          <Button type="submit" className='bg-rose-600 hover:bg-rose-600'>Search</Button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 m-4'>
          {
            data &&
            data.data.map((item: ProductType) => {
              return <SingleCard {...item} key={item.id} />
            })
          }
          {isLoading && !data && (
            Array.from({ length: 10 }, (_, index) => { return index + 1; }).map((_, ind) => (
              <LoadingBuffer key={ind + _} />
            ))
          )}

        </div>
      </div>) : (<ErrorPage />)
  )
}

export default Products