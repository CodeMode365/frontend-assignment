'use client'

import React, { useState, useEffect } from 'react'
import CartCard from './components/CartCard'
import { Card, CardContent, CardHeader, } from '@/components/ui/card'
import { AppDispatch, RootState } from '@/Providers/Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { cartItem, dcrQuantity, incQuantity, removeItem } from '@/Providers/Redux/Slices/Cart'

const Cart = () => {

  const cartItems = useSelector((state: RootState) => state.cartItems)
  const dispatch = useDispatch<AppDispatch>()


  const incrementQuantity = (data: cartItem) => {
    dispatch(incQuantity(data))
  }
  const decrementQuantity = (data: cartItem) => {
    dispatch(dcrQuantity(data))
  }

  const deleteProduct = (data: cartItem) => {
    dispatch(removeItem(data))
  }


  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect(() => {
    function calcTotal() {
      let finalAmount = 0
      cartItems.forEach((item) => {
        finalAmount += (item.quantity * item.price)
      })
      setTotalAmount(Number(finalAmount.toFixed(2)))

    }
    calcTotal()
    return calcTotal()
  }, [cartItems])

  {
    return (
      <main className='mt-32 w-full '>
        <h2 className='text-2xl font-semibold text-rose-500 text-center my-4'>Cart Items</h2>
        <div className='grid grid-cols-6 w-11/12 gap-4 mx-auto pb-8'>
          <div className='bg-white/70 col-span-6 md:col-span-4'>
            {cartItems.map((item: cartItem) => {
              return (
                <div className='my-2' key={item.id}>
                  <CartCard data={item} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} deleteProduct={deleteProduct} />
                </div>)
            })}
          </div>

          <div className=' md:col-span-2 col-span-6 '>
            <div className='sticky top-32 h-auto'>
              <Card>
                <CardHeader>
                  <h2 className='text-2xl font-bold border-b'>SubTotal</h2>
                </CardHeader>
                <CardContent className='my-4 b-t-1 text-lg'>
                  <h2 className='text-semibold text-xl'>Total Items: <span className='text-black/80'>{cartItems.length}</span></h2>
                  <h2 className='text-semibold text-xl'>Total Price: <span className='text-black/80 text-yellow-500'> ${totalAmount}</span></h2>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default Cart