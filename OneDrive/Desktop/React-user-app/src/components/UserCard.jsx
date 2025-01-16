import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {user.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-300">{user.address.city}</p>
      <Link
        to={`/user/${user.id}`}
        className="text-indigo-600 mt-3 inline-block dark:text-indigo-400 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
