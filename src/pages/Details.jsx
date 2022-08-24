import { ShoppingLayout } from "../layout/ShoppingLayout";
import { ProductDetails } from "../components/ProductDetails";

function Details() {
  return (
    <ShoppingLayout>
      <h1>Details page</h1>
      <ProductDetails />
    </ShoppingLayout>
  );
}

export { Details };
