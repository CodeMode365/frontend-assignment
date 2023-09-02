import React from 'react'
import { AiFillShopping } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow absolute bottom-0 w-[95%] mx-6">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <AiFillShopping size={32} className="text-rose-500" title="OurStore" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://github.com/CodeMode365" className="hover:underline">Creator</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline">OurStore</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer