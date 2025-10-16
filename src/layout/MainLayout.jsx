import { NavLink, Outlet } from "react-router-dom";
import logo from "/siteLogo.svg";
import { useState } from "react";

function MainLayout() {
  const [inp, setInp] = useState("");
  const inpSubmit = (e) => {
    e.preventDefault();
    setInp("");
  };

  return (
    <div className="container mx-auto px-3">
      <header className="navbar bg-base-100 shadow-sm mb-6 rounded-xl flex flex-wrap justify-between items-center px-2 sm:px-4">
        <div className="navbar-start flex items-center">
          <NavLink
            to={"/"}
            className="btn btn-ghost normal-case text-xl flex items-center gap-2"
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="hidden sm:block">Online Store</span>
          </NavLink>
        </div>

        <div className="navbar-center hidden md:flex justify-center w-full h-[1rem]">
          <ul className="menu menu-horizontal px-1 mt-[-2.5rem]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="min-h-[70vh] px-2 sm:px-4">
        <Outlet />
      </main>

      <footer className="footer bg-base-200 text-base-content p-6 sm:p-10 mt-10 rounded-t-xl flex flex-wrap justify-between gap-8">
        <nav className="min-w-[150px]">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className="min-w-[150px]">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav className="min-w-[150px]">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <form
          onSubmit={inpSubmit}
          className="flex flex-col gap-3 w-full sm:w-auto sm:min-w-[300px]"
        >
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-full sm:w-80">
            <label className="text-sm mb-1 block">
              Enter your email address
            </label>
            <div className="join w-full">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
                required
                value={inp}
                onChange={(e) => setInp(e.target.value)}
              />
              <button className="btn btn-primary join-item w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default MainLayout;
