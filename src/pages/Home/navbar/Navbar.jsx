import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/adopt">Adopt</NavLink></li>
            <li><NavLink to="/care">Care</NavLink></li>
            <li><NavLink to="/vets">Vets</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          🐾 PetCare
        </Link>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/adopt">Adopt</NavLink></li>
          <li><NavLink to="/care">Care</NavLink></li>
          <li><NavLink to="/vets">Vets</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <Link to="/login" className="btn btn-outline btn-primary btn-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
