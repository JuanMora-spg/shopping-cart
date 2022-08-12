import { NavBar } from "../components";

function ShoppingLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export { ShoppingLayout };
