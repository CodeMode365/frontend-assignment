import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProductType } from '@/types/product'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Button } from '@/components/ui/button'

interface iProps {
    incrementQuantity: (data: ProductType) => void
    decrementQuantity: (data: ProductType) => void
    deleteProduct: (data: ProductType) => void
    data: ProductType
}
const CartCard: React.FC<iProps> = ({ data, incrementQuantity, decrementQuantity, deleteProduct }) => {
    return (
        <Card className='grid grid-cols-12'>
            <CardContent className='col-span-7 my-auto'>
                <div className=' relative pb-52 overflow-hidden cursor-pointer '>
                    <Image
                        className="absolute inset-0 h-full w-full object-contain hover:scale-105 transition-all"
                        src={data.image}
                        alt="" fill />
                </div>
            </CardContent>
            <CardContent className='col-span-5 my-5'>
                <h2 className='text-xl font-semibold'>
                    {data.title.slice(0, 40)}
                </h2>
                <h4 className='text-lg mt-2'>Price: <span className='text-yellow-600'>${data.price} * {data.quantity} = <span className='text-yellow-500'>$ {Math.floor(data.price * data.quantity)}</span></span>
                </h4>
                <div className='flex items-center justify-between my-2 flex-wrap'>
                    <div className='flex items-center'>
                        <Button size={"icon"} className='bg-rose-300 text-rose-500 hover:bg-rose-500 hover:text-rose-200' onClick={() => { incrementQuantity(data) }}>
                            <AiOutlinePlusCircle size={26} />
                        </Button>
                        <span className='mx-2 text-xl'>{data.quantity}</span>
                        <Button size={"icon"} className='bg-green-300 text-green-700 hover:bg-green-500 hover:text-green-200' onClick={() => { decrementQuantity(data) }}>
                            <AiOutlineMinusCircle size={26} />
                        </Button>
                    </div>
                    <Button size={"sm"} variant={'destructive'} className='mt-2 lg:mt-0' onClick={() => { deleteProduct(data) }}>
                        Delete Item
                    </Button>
                </div>
                <div className='w-full flex mt-8'>
                    <Button size={"sm"} className='flex-1 bg-sky-500 hover:bg-sky-600 p-0 text-center flex items-center'>
                        <Link href={`/products/${data.id}`} className='h-full w-full text-center flex items-center justify-center'>
                            View Details
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>

    )
}

export default CartCard