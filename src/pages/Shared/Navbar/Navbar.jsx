import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
// import logo from "../../../assets/images/Navbar/62d3960a755658580bdded8a_logo.png";
import { HiUserCircle } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className=" z-[1] menu p-2 shadow bg-gray-100 rounded-box w-32">
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link>About </Link>
      </li>
      <li>
        <Link to="contact">Contact </Link>
      </li>
    </>
  );
  // bg-[#fcf5ee]
  return (
    <div className=" bg-white shadow-xl">
      <div className="navbar   max-w-screen-xl mx-auto lg:px-0 px-2 ">
        <div className="navbar-start gap-4 lg:gap-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute  cursor-pointer md:hidden"
              >
                {open ? <IoClose /> : <IoMdMenu />}
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 text-lg rounded-box w-52 ${
                open
                  ? "top-20 opacity-100"
                  : "top-[-490px] md:opacity-100 opacity-0"
              }`}
            >
              {menuItems}
            </ul>
          </div>
          <div>
            <h3 className="lg:text-3xl text-2xl font-semibold">
              Time <span className="text-[#ff2022]">Zone</span>
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end lg:gap-4 gap-2">
          <HiUserCircle size={30} />
          <h1 className="lg:text-xl text-lg flex items-center gap-2">
            <BsCart4 size={30} />
            Cart(1)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
