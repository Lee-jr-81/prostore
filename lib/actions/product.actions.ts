"use server";

import { createClient } from "@/utils/supabase/server";

// Get latest products
export default async function getLatestProducts() {
  const supabase = await createClient();
  const { data: products, error } = await supabase
    .from("product")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);
  if (error) {
    console.log("Products could not be fetched: ", error);
    return [];
  }
  if (products) {
    // I have had to JSON.parse the return due to serialization issues. These dont happen in client components
    // only server components. So i need this code to make sure im returning a plain javascript object, not a
    // proxy object.

    // 💡 Why is This Necessary?

    // ✅ Supabase returns Proxy objects that may cause serialization issues in Next.js Server Components.
    // ✅ Ensures the data can be safely passed to Client Components without breaking hydration.
    // ✅ Prevents non-serializable values (e.g., Date, BigInt) from causing issues in Next.js.

    //     products ? ... : []

    //     This is a ternary operator that checks if products is truthy (not null or undefined).
    //     If products exists, it applies JSON.parse(JSON.stringify(products)).
    //     If products is null or undefined, it returns an empty array [] to avoid errors.

    // JSON.stringify(products)

    //     Converts the products array (which may contain Proxy objects) into a JSON string.
    //     This removes any Proxy wrapping and ensures only serializable data remains.

    // JSON.parse(...)

    //     Takes the JSON string and parses it back into a plain JavaScript object.
    //     This effectively strips away any Proxy behavior and makes sure Next.js can safely serialize the data.
    return products ? JSON.parse(JSON.stringify(products)) : [];
  }
}

// Get single product by its slug
export async function getProductBySlug(slug: string) {
  const supabase = await createClient();
  const { data: product, error } = await supabase
    .from("product")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.log("Product could not be fetched", error);
    return null;
  }
  return product;
}
