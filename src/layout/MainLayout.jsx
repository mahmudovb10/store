import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="container">
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} My Website</p>
      </footer>
    </div>
  );
}

export default MainLayout;
