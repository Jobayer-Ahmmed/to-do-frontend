import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>To Do Task</NavLink>
      </li>
      <li>
        <NavLink>On Going Task </NavLink>
      </li>
      <li>
        <NavLink>Complete Task</NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">My To Do List</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-5">{navlinks}</ul>
          </div>
          <div className="mr-5">

              <Link to="/register" className="btn btn-ghost">Register</Link>
   
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 flex gap-10">
          {/* Sidebar content here */}
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
