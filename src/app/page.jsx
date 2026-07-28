import ProductsList from "@/components/ProductsList";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div className="container max-w-sm md:max-w-2xl mx-auto p-5 flex flex-col space-y-7">
      <SearchBox />
      <ProductsList />
    </div>
  );
}
