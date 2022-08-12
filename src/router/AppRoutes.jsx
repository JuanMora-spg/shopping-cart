import { Routes, Route } from "react-router-dom";
import { Details, NotFound, Products } from "../pages";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export { AppRouter };
