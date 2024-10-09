import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <nav>
        <ul className="flex justify-center gap-8 flex-wrap sm:flex-nowrap sm:flex-row sm:justify-center sm:gap-8">
          <li className="w-full sm:w-auto">
            <Link href="/" className="text-white hover:text-sky-500 transition duration-300 block text-center">
              Home
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link href="/about" className="text-white hover:text-sky-500 transition duration-300 block text-center">
              About
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link href="/mywork" className="text-white hover:text-sky-500 transition duration-300 block text-center">
              MyWork
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link href="/contact" className="text-white hover:text-sky-500 transition duration-300 block text-center">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
