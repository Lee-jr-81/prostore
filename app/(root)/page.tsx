// This code is helpful in the future if i want to test my loading spinner.
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import ProductList from "@/components/shared/header/product/product-list";
import getLatestProducts from "@/lib/actions/product.actions";

export default async function page() {
  // await delay(2000);

  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}
