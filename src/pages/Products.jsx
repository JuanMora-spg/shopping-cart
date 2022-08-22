import { ShoppingLayout } from "../layout/ShoppingLayout";
import { ProductList } from "../components";

function Products() {
  return (
    <ShoppingLayout>
      <h1>Products Page</h1>
      <ProductList />
    </ShoppingLayout>
  );
}

export { Products };
