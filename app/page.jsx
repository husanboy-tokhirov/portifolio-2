import avatar from '../src/components/images/TH.png'
import Image from 'next/image'
import html from "../src/components/images/html (1).png"
import js from "../src/components/images/unnamed.jpg"
import css from "../src/components/images/cc.jpg"
import figma from "../src/components/images/figma.png"
import github from "../src/components/images/github.png"
import scss from "../src/components/images/sass.png"
import tailwind from "../src/components/images/tailwind.webp"
import bootstrap from "../src/components/images/bootstrap.jpg"
import react from "../src/components/images/react-1.svg"
import ts from "../src/components/images/ts.png"
import next from "../src/components/images/nextjs.png"
import flo from "../src/components/images/flo.jpg"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <Image src={avatar} alt="avatar" width={250} height={200} className="rounded-full" />
      <h1 className="text-4xl font-bold mt-3">
        <span className="text-blue-600">I'm Husanboy,</span> frontend developer based in Uzbekistan
      </h1>
      <p className="text-gray-700 mt-2">
        I will start studying at Najot Ta'lim from the beginning of 2024.
      </p>
      <div className="hero-action mt-6 flex space-x-4">
        <Link href="https://drive.google.com/file/d/1EMezE2X9GFkDQoPzCum_nd2aMl4CHag1/view" className="hero-connect bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600">
          My Resume
        </Link>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 justify-center items-center mt-8'>
        {[
          { src: html, alt: 'HTML' },
          { src: js, alt: 'JavaScript' },
          { src: css, alt: 'CSS' },
          { src: scss, alt: 'SCSS' },
          { src: figma, alt: 'Figma' },
          { src: github, alt: 'GitHub' },
          { src: tailwind, alt: 'Tailwind' },
          { src: bootstrap, alt: 'Bootstrap' },
          { src: ts, alt: 'TypeScript' },
          { src: react, alt: 'React' },
          { src: next, alt: 'Next.js' },
          { src: flo, alt: 'Flo' }
        ].map((item, index) => (
          <div key={index} className='p-4 bg-gray-50 rounded-[16px] hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            <Image
              className='rounded-[16px]'
              src={item.src}
              alt={item.alt}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

    </div>
  );
}