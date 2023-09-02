'use client'

import React from 'react'
import Image from 'next/image'
import { AiFillStar } from "react-icons/ai"
import { CardContent, CardFooter, CardHeader, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CardFunctionality from './CardFunctionality'

const SingleCard = ({ ...data }) => {


    return (

        <Card>
            <CardContent>
                <div className=' relative pb-72 overflow-hidden cursor-pointer'>
                    <Link href={`products/${data.id}`}>
                        <Image
                            className="absolute inset-0 h-full w-full object-contain hover:scale-105"
                            src={data.image}
                            alt="" fill />
                    </Link>
                </div>
            </CardContent>
            <CardContent>
                <h2>
                    {data.title.slice(0, 18)}...
                </h2>
                <div className='flex flex-wrap justify-between'>
                    <h4 className='text-lg'>Price: <span className='text-yellow-600'>${data.price}</span>
                    </h4>
                    <h4>
                        Rating: <span className='text-yellow-600'>{data.rating.rate}</span>
                    </h4>
                </div>
            </CardContent>
            <CardFunctionality title={data.title}/>
        </Card>
    )
}

export default SingleCard