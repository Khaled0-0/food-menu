import { pizzas } from '@/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CategoryPage = () => {
    return (
        <div className='flex text-red-500 flex-wrap'>
            {pizzas.map(item => (
                <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50'
                >
                    {/* IMAGE CONTAINER */}
                    {item.img && (
                        <div className='relative h-[80%]'>
                            <Image src={item.img} alt="" fill className='object-contain' />
                        </div>
                    )}
                    {/* TEXT CONTAINER */}
                    <div className='flex  justify-between items-center font-bold'>
                        <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
                        <h2 className='text-xl group-hover:hidden'>${item.price}</h2>
                        <button className='hidden uppercase bg-red-500 text-white p-2 rounded-md group-hover:block w-fit'>Add to Cart</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryPage
