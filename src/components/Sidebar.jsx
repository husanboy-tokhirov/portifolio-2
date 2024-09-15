import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-[200px] min-h-[100vh] bg-gray-800 p-6 shadow-lg">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard"
              className="block py-2 px-4 text-white rounded hover:bg-sky-500 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className="block py-2 px-4 text-white rounded hover:bg-sky-500 transition duration-300"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className="block py-2 px-4 text-white rounded hover:bg-sky-500 transition duration-300"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
