import instagram from "../../src/components/images/Instagram.png";
import telegram from "../../src/components/images/tg.png";
import google from "../../src/components/images/google.png";
import hh from "../../src/components/images/hh.png";
import git from "../../src/components/images/github.png"; 
import linkedin from "../../src/components/image/linked-in.png"; 
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
        Contact Me
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center items-center max-w-[600px]">
        <Link href="https://www.instagram.com/xusanchik_tokhirov/">
          <Image src={instagram} alt="Instagram" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link href="https://t.me/Xusanchik04">
          <Image src={telegram} alt="Telegram" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link href="mailto:husanboytoxirov20042703@gmail.com">
          <Image src={google} alt="Google" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link href="">
          <Image src={hh} alt="HeadHunter" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link href="https://github.com/husanboy-tokhirov">
          <Image src={git} alt="GitHub" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link href="">
          <Image src={linkedin} alt="LinkedIn" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
