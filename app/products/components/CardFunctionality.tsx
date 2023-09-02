import React from 'react'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { useToast, } from '@/components/ui/use-toast'
import { ToastAction } from "@/components/ui/toast"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/Providers/Redux/store'
import { ProductType } from '@/types/product'
import { addToCart } from '@/Providers/Redux/Slices/Cart'


const CardFunctionality = ({ data }: { data: any }) => {
    const { toast } = useToast()
    const dispatch = useDispatch<AppDispatch>()

    const addItemToCart = (data: ProductType) => {
        dispatch(addToCart(data))
    }

    return (
        <CardFooter>
            <Button className='bg-rose-500 shadow-md  hover:bg-rose-600' onClick={() => {
                toast({
                    title: "Item added to Cart",
                    description: "Check your cart",
                    action: <ToastAction altText="Try again">Ok</ToastAction>,
                    duration: 1000
                })
                addItemToCart(data)
            }}>Add To cart</Button>
        </CardFooter>
    )
}

export default CardFunctionality