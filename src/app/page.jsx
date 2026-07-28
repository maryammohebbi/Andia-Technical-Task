"use client";

import ProductsList from "@/components/ProductsList";
import SearchBox from "@/components/SearchBox";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className="container max-w-sm md:max-w-2xl mx-auto p-5 flex flex-col space-y-7">
      <SearchBox search={search} setSearch={setSearch} />
      <ProductsList search={search} />
    </div>
  );
}
