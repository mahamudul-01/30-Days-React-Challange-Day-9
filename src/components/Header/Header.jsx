import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base"
          >
            <li>
              <NavLink 
                to='/statistics' 
                className={({ isActive }) => 
                  isActive ? "text-green-500" : "hover:text-green-500"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/applied-job' 
                className={({ isActive }) => 
                  isActive ? "text-green-500" : "hover:text-green-500"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/blog' 
                className={({ isActive }) => 
                  isActive ? "text-green-500" : "hover:text-green-500"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to='/'>
            <h1 className="text-4xl text-[#1A1919] font-bold">Work Wave</h1>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink 
              to='/statistics' 
              className={({ isActive }) => 
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/applied-job' 
              className={({ isActive }) => 
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/blog' 
              className={({ isActive }) => 
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="bg-gradient-to-r from-green-500 to-[#399918] text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300"
        >
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;