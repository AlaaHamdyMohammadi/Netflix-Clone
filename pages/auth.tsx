/* eslint-disable jsx-a11y/alt-text */
import Input from '@/components/Input'
import Image from 'next/image'
import React from 'react'

export default function auth() {
  return (
    <div className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/hero.jpg')]">
        <div className='bg-black w-full h-full lg:bg-opacity-70'>
            <nav className='px-12 py-5'>
                <Image src="/images/logo.png" width={100} height={48} alt="Logo"/>
            </nav>
            <div className='flex justify-center'>
                <div className='bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>Sign in</h2>
                    <div className='flex flex-col gap-4'>
                        <Input/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
