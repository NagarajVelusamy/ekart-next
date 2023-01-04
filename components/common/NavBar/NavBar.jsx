import Link from "next/link";
import { ShoppingCart, Login } from "@mui/icons-material";

export const navLinks = [
  {
    title: <ShoppingCart fontSize="small" />,
    path: "/cart"
  },
  {
    title: <Login fontSize="small" />,
    path: "/signin"
  },
];

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container nav-wrapper">
        <div>
          <Link
            href="/"
            className="nav-logo"
          >
            EKart
          </Link>
        </div>
        <ul className="nav-links">
          {
            navLinks.map((navItem, idx) => (
              <li
                key={idx}
                className="nav-link"
              >
                <Link
                  href={navItem.path}
                  className="nav-item"
                >{navItem.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;