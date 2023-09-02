import React from 'react'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { useToast, } from '@/components/ui/use-toast'
import { ToastAction } from "@/components/ui/toast"

const CardFunctionality = ({ title }: { title: string }) => {
    const { toast } = useToast()

    return (
        <CardFooter>
            <Button className='bg-rose-500 shadow-md  hover:bg-rose-600' onClick={() => {
                toast({
                    title: "Item added to Cart",
                    description: "Check your cart",
                    action: <ToastAction altText="Try again">Ok</ToastAction>,
                    duration:1000
                })
            }}>Add To cart</Button>
        </CardFooter>
    )
}

export default CardFunctionality