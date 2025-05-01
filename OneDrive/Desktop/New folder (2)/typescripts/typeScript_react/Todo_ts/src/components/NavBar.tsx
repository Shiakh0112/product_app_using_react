import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-center gap-4 mb-6">
        <Link
          to="/"
          className="px-4 py-2 bg-gray-200 hover:bg-purple-200 rounded-lg transition text-gray-800 font-semibold"
        >
          All
        </Link>
        <Link
          to="/?todos=active"
          className="px-4 py-2 bg-gray-200 hover:bg-purple-200 rounded-lg transition text-gray-800 font-semibold"
        >
          Active
        </Link>
        <Link
          to="/?todos=completed"
          className="px-4 py-2 bg-gray-200 hover:bg-purple-200 rounded-lg transition text-gray-800 font-semibold"
        >
          Completed
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
