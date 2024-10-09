import Rasm from '../../src/components/images/Снимок экрана 2024-09-14 в 15.57.10.png';
import Rasm2 from '../../src/components/images/Снимок экрана 2024-09-14 в 16.01.15.png';
import Rasm3 from '../../src/components/images/Снимок экрана 2024-09-14 в 16.03.43.png';
import Rasm4 from '../../src/components/images/Снимок экрана 2024-09-14 в 16.05.46.png';
import Rasm5 from '../../src/components/images/Снимок экрана 2024-09-14 в 16.08.30.png';
import Rasm6 from '../../src/components/images/Снимок экрана 2024-09-14 в 16.11.09.png';
import Image from 'next/image';
import Link from 'next/link';

const MyWork = () => {
  return (
    <div id="mywork" className="flex flex-col items-center justify-center gap-20 my-20 mx-4 md:mx-40">
      <div className="text-2xl font-semibold px-8">
        <h1 className="text-5xl font-extrabold text-gray-900">My latest work</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <Link
          href="https://imtoxon7oy.vercel.app/"
          className="transform transition duration-300 hover:scale-110 border border-transparent hover:border-pink-500 rounded-lg"
        >
          <Image
            src={Rasm}
            alt=""
            className="w-full h-[200px] sm:w-[400px] sm:h-[280px] cursor-pointer"
          />
        </Link>
        <Link
          href="https://18-ddaarrss.vercel.app/"
          className="transform transition duration-300 hover:scale-110 border border-transparent hover:border-pink-500 rounded-lg"
        >
          <Image
            src={Rasm2}
            alt=""
            className="w-full h-[200px] sm:w-[400px] sm:h-[280px] cursor-pointer"
          />
        </Link>
        <Link
          href="https://rent-cars-kappa.vercel.app/"
          className="transform transition duration-300 hover:scale-110 border border-transparent hover:border-pink-500 rounded-lg"
        >
          <Image
            src={Rasm3}
            alt=""
            className="w-full h-[200px] sm:w-[400px] sm:h-[280px] cursor-pointer"
          />
        </Link>
        <Link
          href="https://food-eight-phi.vercel.app/"
          className="transform transition duration-300 hover:scale-110 border border-transparent hover:border-pink-500 rounded-lg"
        >
          <Image
            src={Rasm4}
            alt=""
            className="w-full h-[200px] sm:w-[400px] sm:h-[280px] cursor-pointer"
          />
        </Link>
        <Link
          href="https://edded.vercel.app/"
          className="transform transition duration-300 hover:scale-110 border border-transparent hover:border-pink-500 rounded-lg"
        >
          <Image
            src={Rasm5}
            alt=""
            className="w-full h-[200px] sm:w-[400px] sm:h-[280px] cursor-pointer"
          />
        </Link>
        <Link
          href="https://1-dars-brown.vercel.app/"
          className="transform transition duration-300 hover:scale-110 border border-transparent hover:border-pink-500 rounded-lg"
        >
          <Image
            src={Rasm6}
            alt=""
            className="w-full h-[200px] sm:w-[400px] sm:h-[280px] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
