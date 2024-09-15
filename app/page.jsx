import avatar from '../src/components/images/TH.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <Image src={avatar} alt="avatar" width={300} height={200} className="rounded-full" />
      <h1 className="text-4xl font-bold mt-4">
        <span className="text-blue-600">I'm Husanboy,</span> frontend developer based in Uzbekistan
      </h1>
      <p className="text-gray-700 mt-2">
        I will start studying at Salvation Education from the beginning of 2024.
      </p>
      <div className="hero-action mt-6 flex space-x-4">
        <Link href="https://drive.google.com/file/d/1EMezE2X9GFkDQoPzCum_nd2aMl4CHag1/view" className="hero-connect bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600">
          My Resume
        </Link>
      </div>
    </div>

  );
}