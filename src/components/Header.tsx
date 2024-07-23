import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBeaker } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";

const Header: FC = () => {
  let isAuth = true;
  return (
    <header className="flex items-center bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
      {/* Logo */}
      <Link to="/">
        <HiBeaker size={40}></HiBeaker>
      </Link>

      {/* Menu */}
      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5">
            <li className=" p-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" p-3">
              <NavLink
                to="/recipe"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Recipe
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/* Log in and Log out */}
      {isAuth ? (
        <button className="btn btn-red">
          <span>Log out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        // <button className="btn btn-green ml-auto">
        //   <span>Log in</span>
        // </button>
        <NavLink className="btn btn-green ml-auto" to="/auth">
          <span>Log in</span>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
