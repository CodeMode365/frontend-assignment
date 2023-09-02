'use client'
import React from 'react'
import CartCard from './components/CartCard'
import { AppDispatch, RootState } from '@/Providers/Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType } from '@/types/product'
import { dcrQuantity, incQuantity, removeItem } from '@/Providers/Redux/Slices/Cart'

const Cart = () => {

  const cartItems = useSelector((state: RootState) => state.cartItems)
  const dispatch = useDispatch<AppDispatch>()


  const incrementQuantity = (data: ProductType) => {
    dispatch(incQuantity(data))
  }
  const decrementQuantity = (data: ProductType) => {
    dispatch(dcrQuantity(data))
  }

  const deleteProduct = (data: ProductType) => {
    dispatch(removeItem(data))
  }

  return (
    <main className='mt-32 w-full '>
      <h2 className='text-center text-2xl my-6'>Cart Items</h2>
      <div className='grid grid-cols-6 w-11/12 gap-4 mx-auto pb-8'>
        <div className='bg-white/70 col-span-6 md:col-span-4'>
          {cartItems.map((item: ProductType) => {
            return (
              <div className='my-2' key={item.id}>
                <CartCard data={item} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} deleteProduct={deleteProduct} />
              </div>)
          })}
        </div>

        <div className='bg-red-500 md:col-span-2 col-span-6 '>
          <div className='sticky top-32 h-auto bg-purple-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis mollitia adipisci consequuntur at nisi eum nulla. Consequatur, labore optio, eius harum in nulla eligendi hic numquam iste ex voluptatibus deleniti eveniet earum beatae voluptatum eum doloremque at voluptate officia maiores culpa? Eos quisquam voluptatem voluptates explicabo quae ea iusto corrupti eius, eveniet quod itaque necessitatibus error, exercitationem nobis vero.
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart