import http from "./httpService";

export async function getProductsApi() {
     const { data } = await http.get("/products");
  return data;
}