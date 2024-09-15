import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <nav>
        <ul className="flex justify-center gap-8">
          <li>
            <Link href="/" className="text-white hover:text-sky-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-sky-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/mywork" className="text-white hover:text-sky-500 transition duration-300">
              MyWork
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-sky-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
