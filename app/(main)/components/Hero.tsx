import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (

        <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"style={{
            backgroundImage:"url('/back.jpg')"
        }}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Shop The Future</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Explore the cutting-edge of online shopping with us. Discover the latest trends&#44; innovations&#44; and convenience like never before as you &apos;Shop the Future&apos; of retail</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link href="/products" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 ">
                        Explore
                    </Link>
                    <a href="https://github.com/CodeMode365" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Thank Creator
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Hero