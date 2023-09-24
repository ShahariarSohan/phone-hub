import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-xl bg-base-100">
      <nav className=" container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold">PhoneShop</h1>
        <div className="font-bold">
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-600" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-600" : ""
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-600" : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
