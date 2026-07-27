'use client'

import { useProducts } from "@/hooks/useProducts";
export default function Home() {
const { products, isLoading, isError, error } = useProducts();

if (isLoading) return <p>Loading...</p>;

if (isError) {
  return <p>{error.message}</p>;
}

console.log(products);
  
  return (
    <div className="">
<div>
  
</div>
    </div>
  )
}
