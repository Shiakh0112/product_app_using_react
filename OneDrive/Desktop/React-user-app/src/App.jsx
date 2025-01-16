import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import { UserProvider } from "./context/UserContext";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen transition-all bg-white dark:bg-gray-900 dark:text-gray-100`}
    >
      <UserProvider>
        <Router>
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
