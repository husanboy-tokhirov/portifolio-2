"use client"
import Image from 'next/image'
import avatar from '../../src/components/images/th.jpg'
import men from '../../src/components/images/men.png' 

const Page = () => { 
  return (
    <div id='about' className='flex flex-col items-center justify-center gap-20 my-20 mx-40'>
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-900">About Me</h1>
            <Image src={avatar} alt="avatar" width={300} height={300} className="rounded-[20px] mx-auto shadow-lg" />
        </div>
        <div className="flex flex-col md:flex-row gap-20">
            <div className="flex items-center justify-center">
                <Image src={men} alt="avatar" width={450} height={600} className="rounded-lg shadow-lg" />
            </div>
            <div className='flex flex-col gap-8'>
                <div className="flex flex-col gap-5 text-gray-700 text-lg font-medium">
                    <p>I learned the things you see below and more during my studies.I can do perfect practical work.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-12 transition-transform duration-300 hover:scale-105">
                        <p className="min-w-[150px] text-lg font-medium text-blue-200 hover:text-red-500">HTML & CSS</p>
                        <hr className="flex-grow h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500" />
                    </div>
                    <div className="flex items-center gap-12 transition-transform duration-300 hover:scale-105">
                        <p className="min-w-[150px] text-lg font-medium text-blue-300 hover:text-red-500">React JS</p>
                        <hr className="flex-grow h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500" />
                    </div>
                    <div className="flex items-center gap-12 transition-transform duration-300 hover:scale-105">
                        <p className="min-w-[150px] text-lg font-medium text-blue-400 hover:text-red-500">JavaScript</p>
                        <hr className="flex-grow h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500" />
                    </div>
                    <div className="flex items-center gap-12 transition-transform duration-300 hover:scale-105">
                        <p className="min-w-[150px] text-lg font-medium text-blue-500 hover:text-red-500">Tailwind</p>
                        <hr className="flex-grow h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500" />
                    </div>
                    <div className="flex items-center gap-12 transition-transform duration-300 hover:scale-105">
                        <p className="min-w-[150px] text-lg font-medium text-blue-600 hover:text-red-500">Bootstrap</p>
                        <hr className="flex-grow h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500" />
                    </div>
                    <div className="flex items-center gap-12 transition-transform duration-300 hover:scale-105">
                        <p className="min-w-[150px] text-lg font-medium text-blue-700 hover:text-red-500">SASS</p>
                        <hr className="flex-grow h-2 rounded-full bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page
