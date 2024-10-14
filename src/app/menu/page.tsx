

import Link from 'next/link'
import React from 'react'
import { menu } from '@/data'


const MenuPage = () => {
    return (
        <div className=' p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
            {menu.map(category => (
                <Link
                    key={category.id}
                    href={`/menu/${category.slug}`}
                    className='w-full h-1/3 bg-cover p-8 pt-4 md:p-4 md:h-1/2'
                    style={{ backgroundImage: `url(${category.img})` }}
                >
                    <div className={`text-${category.color} w-2/3`}>
                        <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
                        <p className='text-sm my-2' >{category.desc}</p>
                        <button className={`hidden 2xl:block bg-${category.color}  text-${category.color === "black" ? "white" : "red-500 bg-white"} py-2 px-4 rounded-md`}>Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage
