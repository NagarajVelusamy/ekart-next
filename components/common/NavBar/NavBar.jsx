import Link from "next/link";

export const navLinks = [
  {
    title: "products",
    path: "/products"
  },
  {
    title: "cart",
    path: "/cart"
  },
  {
    title: "signin",
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