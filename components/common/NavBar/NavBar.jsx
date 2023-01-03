import Link from "next/link";

export const navLinks = [
  {
    title:"products",
    path:"/products"
  },
];

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container nav-wrapper">
        <ul className="nav-links">
          {
            navLinks.map((navItem,idx)=>(
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
        <div>
          <Link
            href="/"
            className="nav-logo"
          >
          EKart
          </Link>
        </div>

        <div className="nav-actions">
          <div className="nav-actions__profile nav-item">Profile</div>
          <div className="nav-actions__cart">
            <Link
              href="/cart"
              className="nav-item"
            >
              cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;