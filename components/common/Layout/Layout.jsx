import NavBar from "components/common/NavBar/NavBar";

const Layout = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default Layout;