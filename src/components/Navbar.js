import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font  w-full ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            class="w-10 h-10 text-white p-2 bg-blue-500 rounded-xl"
            viewBox="0 0 24 24"
          >
            <path d="M 4 16 L 4 2 L 12 12 L 20 2 L 20 22 M 16 18 L 24 18"></path>
          </svg>
          <span class="ml-3 text-xl">MediTrackr</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link class="mr-5 hover:text-gray-900" to="/Home">
            Home
          </Link> */}
          <Link class="mr-5 hover:text-gray-900" to="/About">
            About Us
          </Link>
          <Link class="mr-5 hover:text-gray-900" to="/Contact">
            Contact Us
          </Link>
          {/* <Link class="mr-5 hover:text-gray-900" to="/Home">Homeasasasasaa</Link> */}
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          Sign up
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar