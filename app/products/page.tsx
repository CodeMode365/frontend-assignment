'use client'

import React, { useCallback, useState, useEffect } from 'react'
import useFetch from '@/hooks/useFetch'
import SingleCard from './components/SingleCard'
import { ProductType } from '@/types/product'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LoadingBuffer from './LoadingBuffer'
import ErrorPage from '@/components/ErrorPage'


const Products = () => {
  const { data, isLoading, isError }: { data: any, isLoading: boolean, isError: boolean } = useFetch()


  const [finalData, setFinalData] = useState<any>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(() => {

    if (data) {
      const filteredData = finalData.data.filter((item: ProductType) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchQuery.length <= 0) {
        setFinalData(data)
      } else {
        setFinalData({ data: filteredData });
      }
    }
  }, [searchQuery, data]);


  useEffect(() => {
    setFinalData(data || { data: [] })
  }, [data]);

  return (
    !isError ? (
      <div className='mt-32 px-14'>
        <h2 className='text-2xl font-bold text-rose-500 text-center my-4'>Products</h2>
        <div className="flex w-full items-center space-x-2 justify-end " >
          <Input
            type="text"
            placeholder="Search" className='max-w-sm'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" className='bg-rose-600 hover:bg-rose-600' onClick={handleSearch}>Search</Button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 m-4'>
          {
            finalData &&
            finalData.data.map((item: ProductType) => {
              return <SingleCard {...item} key={item.id} />
            })
          }
          {finalData && finalData.data.length <=0 && (
            <h2 className='text-red-400 text-2xl font-medium min-w-[270px]'>No Items Matched</h2>
          )}
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