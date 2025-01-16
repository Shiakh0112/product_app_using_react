const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex justify-between items-center shadow-lg rounded-b-xl dark:from-blue-800 dark:to-indigo-900 dark:bg-gradient-to-r">
      <h1 className="text-2xl font-bold tracking-tight">User App</h1>
      <button
        onClick={toggleTheme}
        className="bg-indigo-600 px-6 py-2 rounded-lg shadow-md hover:bg-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition ease-in-out duration-300"
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
