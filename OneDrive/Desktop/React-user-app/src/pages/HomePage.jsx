import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

const HomePage = () => {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by name"
        className="border p-4 w-full mb-6 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-600 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg mb-6 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-indigo-500 transition-all duration-300"
      >
        Sort {sortOrder === "asc" ? "Z-A" : "A-Z"}
      </button>

      {loading && <p className="text-center text-indigo-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-indigo-500"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2 text-lg text-gray-600 dark:text-gray-300">
          Page {currentPage}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-indigo-500"
          disabled={currentPage * usersPerPage >= filteredUsers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
