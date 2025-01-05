const Header = () => {
  return (
    <div className="w-11/12 mx-auto mt-2">
      {/* navbar start */}
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a href="#" className="text-2xl md:text-4xl font-medium">RJ-Cafe</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-3">
            <label className=" border-2 p-2 flex items-center gap-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <div className="bg-green-400 py-2 px-3 rounded-full hidden md:block">
            <i class="fa-solid fa-user"></i>
            </div>
            </div>
          </div>
        </div>
      </nav>
    {/* navbar end */}

    {/* banner start */}
    <div className="bg-none md:bg-[url('./public/assets/images/banner.jpg')] bg-cover p-10 lg:p-36 bg-no-repeat rounded-2xl mt-6">
    <div className="text-black md:text-white text-center">
    <h1 className="text-3xl md:text-5xl lg:text-6xl w-full md:w-10/12 mx-auto">Discover an exceptional cooking class tailored for you!</h1>
    <p className="w-full md:w-9/12 mx-auto text-xl text-gray-800 md:text-gray-200 mt-6 mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
    <div className="space-x-2 space-y-3 md:space-x-8">
      <button className="btn bg-green-400 border-none text-xl rounded-full py-2 px-6">Explore Now</button>
      <button className="border border-black md:border-white py-2 px-6 rounded-full text-xl">Our Feedback</button>
    </div>
    </div>
    </div>
    {/* banner end */}
    </div>
  );
};

export default Header;
