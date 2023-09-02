'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"
import { AiFillShopping, AiFillHome, AiFillGift, AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { RootState } from '@/Providers/Redux/store'

const Links = [
    { title: "Home", path: "/", icon: AiFillHome, showCartCount: false },
    { title: "Products", path: "/products", icon: AiFillGift, showCartCount: false },
    { title: "Cart", path: "/cart", icon: AiOutlineShoppingCart, showCartCount: true },
]

const Navbar = () => {

    const cartItems = useSelector((state: RootState) => state.cartItems)

    const pathname = usePathname()
    const isActive = (path: string): boolean => {
        if (pathname == path) return true
        return false
    }
    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200" >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='flex items-center justify-center flex-col text-rose-500'>
                    <AiFillShopping size={32} className="text-rose-500" title="OurStore" />
                    <h1>OurStore</h1>
                </div>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">

                        {Links.map((item, index) => (
                            <li className='flex items-center relative' key={item.title}>{
                                item.showCartCount &&
                                <div className='rounded-full absolute border bg-red-200 h-6 w-6 text-center text-rose-700 -right-2 -top-3' >{cartItems.length}</div>
                            }
                                <Link href={item.path} className={`block py-2 pl-3 pr-4 ${isActive(item.path) ? "text-rose-500" : "text-black/80"}   bg-rose-700 rounded md:bg-transparent md:text-grass-700 md:p-0 flex flex-col justify-center items-center`} aria-current="page">
                                    <span className='mx-2'>
                                        {<item.icon size={24} />}
                                    </span>
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navbar