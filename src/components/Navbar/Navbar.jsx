import { Link } from "react-router-dom";
import user_image from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOutUser()
  }

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Career</a>
      </li>
    </>
  );

  return (
    <div className="mx-5 mb-7">
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user_image}
                className="w-10 h-10 mr-3 rounded-full"
                alt="user"
              />
              <IoIosLogOut onClick={handleLogOut} className="w-10 h-10 text-gray-500 cursor-pointer" />
            </>
          ) : (
            <Link
              to="/login"
              className="px-10 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
