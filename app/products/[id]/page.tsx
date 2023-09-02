'use client'

import useFetch from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useToast, } from '@/components/ui/use-toast'
import { ToastAction } from "@/components/ui/toast"
import { Badge } from '@/components/ui/badge'
import { useSelector } from 'react-redux'
import { RootState } from '@/Providers/Redux/store'
import LoadingBuffer from './LoadingBuffer'

const SingleCard = () => {
    const { id } = useParams()
    const router = useRouter()
    const { data, isLoading, isError } = useFetch(Number(id))
    const { toast } = useToast()
    return data ?
        (
                <div className='mt-32 mx-6' >
                    <Button variant={"secondary"} onClick={() => router.back()}>Go Back</Button>
                    <div className='grid grid-cols-12 gap-6 mt-8'>
                        <div className='col-span-12 md:col-span-6 h-full py-10'>
                            <div className=' relative pb-72 
                            '>
                                {
                                    data &&
                                    (
                                        <Image
                                            className="
                                            object-contain transition-all hover:scale-105 cursor-pointer
                                            "
                                            src={data.data.image}
                                            alt={"Product Image"} sizes={"md"} fill />
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 py-4 md:px-4 mx-auto'>
                            <div>
                                <h2 className='text-2xl font-semibold my-2'>{data.data.title}</h2>
                                <p className='text-black/60'>{data.data.description}</p>
                                <Badge className='bg-rose-500 hover:bg-rose-600 cursor-pointer my-2'>{data.data.category}</Badge>
                                <h3 className='text-lg font-semibold'>Price: <span className='font-normal'>${data.data.price}</span></h3>
                                <h3 className='text-lg font-semibold'>Rating: <span className='font-normal'>{data.data.rating.rate}</span></h3>
                            </div>
                            <div className='my-2'>
                                <Button variant={"outline"} size={"sm"} className='hover:text-white shadow-rose-500 shadow-sm  hover:bg-rose-600' onClick={() => {
                                    toast({
                                        title: "Item added to Cart",
                                        description: "Check your cart",
                                        action: <ToastAction altText="Try again">Ok</ToastAction>,
                                        duration: 1000
                                    })
                                }}>Add To cart</Button>
                            </div>

                        </div>
                    </div>
                </div >
        )

        : (
            <LoadingBuffer />
        )
}

export default SingleCard