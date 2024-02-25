import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { doSignOut } from "../firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await doSignOut();
    setUser(null);
    alert("User logged out successfully");
  };

  return (
    <header className="sticky top-0 left-0 text-gray-600 bg-white shadow body-font w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-xl hover:bg-blue-600"
            viewBox="0 0 24 24"
          >
            <path d="M 4 16 L 4 2 L 12 12 L 20 2 L 20 22 M 16 18 L 24 18"></path>
          </svg>
          <span className="ml-3 text-xl">MediTrackr</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link class="mr-5 hover:text-gray-900" to="/Home">
            Home
          </Link> */}
          {user ? (
            <Link class="mr-5 hover:text-gray-900" to="/AddRecords">
              Add Record
            </Link>
          ) : (
            ""
          )}

          <Link class="mr-5 hover:text-gray-900" to="/About">
            About Us
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/Contact">
            Contact Us
          </Link>
          {user ? (
            <button
              className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <Link
              className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0"
              to="/signup"
            >
              Sign Up
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
