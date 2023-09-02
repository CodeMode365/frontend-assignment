'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from "next/navigation"
import { AiFillShopping, AiFillHome, AiFillGift, AiOutlineShoppingCart, AiOutlineMenuFold } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import { useSelector } from 'react-redux'
import { RootState } from '@/Providers/Redux/store'

const Links = [
    { title: "Home", path: "/", icon: AiFillHome, showCartCount: false },
    { title: "Products", path: "/products", icon: AiFillGift, showCartCount: false },
    { title: "Cart", path: "/cart", icon: AiOutlineShoppingCart, showCartCount: true },
]

const Navbar = () => {

    const cartItems = useSelector((state: RootState) => state.cartItems)
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    const pathname = usePathname()
    const isActive = (path: string): boolean => {
        if (pathname == path) return true
        return false
    }
    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='flex items-center justify-center flex-col text-rose-500'>
                        <AiFillShopping size={32} className="text-rose-500" title="OurStore" />
                        <h1>OurStore</h1>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hidden md:block">Get started</button>
                        <button className='md:hidden' onClick={() => setShowSidebar((prev) => !prev)}>
                            <AiOutlineMenuFold size={32} />
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


            {/* sidebar drawer */}
            <div className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform md:hidden bg-white/95 ${!showSidebar && "translate-x-full"}`} >
                <h5 className="text-base text-rose-500 font-bold uppercase ">Navigation</h5>
                <button onClick={() => setShowSidebar(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center " >
                    <span className="sr-only">Close menu</span>
                    <RxCross1 className={'w-5 h-5'} />
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {
                            Links.map((link, _ind) => {
                                return (
                                    <li id={link.path + _ind} className={`${isActive(link.path) ? "text-rose-500" : ""} `}>
                                        <Link href={link.path} className="flex items-center p-2  rounded-lg  hover:bg-gray-100 ">
                                            <link.icon className="w-5 h-5 transition duration-7" />

                                            <span className="ml-3 text-inherit">{link.title}</span>

                                            {link.showCartCount && (
                                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium bg-rose-100 rounded-full">{cartItems.length}</span>
                                            )}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div >

        </>

    )
}

export default Navbar