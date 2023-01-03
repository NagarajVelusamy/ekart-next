import NavBar from "components/common/NavBar/NavBar";

const Layout = ({children}) => {
  return (
    <>
      <NavBar/>
      <main className="container">
        {children}
      </main>
    </>
  );
};

export default Layout;