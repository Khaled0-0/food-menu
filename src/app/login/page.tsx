import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const LoginPage = () => {
    return (
        // CONTAINER
        <div className='p-4 h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] flex items-center justify-center'>
            {/* BOX */}
            <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] xl:w-[50%]'>
                {/* IMAGE CONTAINER */}
                <div className='relative h-1/3 w-full md:h-full md:w-full'>
                    <Image src="/loginBg.png" alt="" fill
                        className='object-cover'
                    />
                </div>
                {/* FORM CONTAINER */}
                <div className='p-10 flex flex-col gap-4 md:w-full md:h-full'>
                    <h1 className='font-bold text-2xl xl:text-4xl'>Welcome</h1>
                    <p className='text-sm text-gray-500'>login into your account or create a new one using social buttons </p>
                    <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
                        <Image src="/google.png" alt="" width={20} height={20}
                            className='object-contain' />
                        <span>Sign in with Google</span>
                    </button>
                    <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
                        <Image src="/facebook.png" alt="" width={20} height={20}
                            className='object-contain' />
                        <span>Sign in with facebook</span>
                    </button>
                    <p className='text-sm'>Have a problem?<Link className='underline' href="/">Contact us</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
