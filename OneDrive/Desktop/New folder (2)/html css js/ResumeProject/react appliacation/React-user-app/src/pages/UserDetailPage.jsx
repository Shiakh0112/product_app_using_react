import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <p className="text-center text-red-500">User not found.</p>;
  }

  return (
    <div className="p-6 md:p-10 lg:p-16 max-w-3xl mt-8 mx-auto space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
      >
        Go Back
      </button>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
          {user.name}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">{user.email}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300">{user.phone}</p>
      </div>

      <div className="space-y-3 border-t-2 border-gray-300 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Company Info
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Company: {user.company.name}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Website:
          <span className="ml-2">
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {user.website}
            </a>
          </span>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
          Address
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {user.address.street}, {user.address.city}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserDetailPage;
