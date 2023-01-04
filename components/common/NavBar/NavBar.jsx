import Link from "next/link";
import { ShoppingCartOutlined, Login, FavoriteBorder } from "@mui/icons-material";

export const navLinks = [
  {
    title:"wishlist",
    icon: <FavoriteBorder fontSize="small" />,
    path: "/wishlist"
  },
  {
    icon: <ShoppingCartOutlined fontSize="small" />,
    title:"cart",
    path: "/cart"
  },
  {
    title:"sign-in",
    icon: <Login fontSize="small" />,
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
                >
                  {navItem.icon}
                  <span>{navItem.title}</span>
                  
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;