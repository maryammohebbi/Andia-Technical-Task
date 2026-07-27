'use client'

import { getProductsApi } from "@/services/storeService";
import { useQuery } from "@tanstack/react-query";

export function useProducts(){
    const {data: products, isLoading, isError, error} = useQuery({
        queryFn: getProductsApi,
        queryKey: ['products'],
    })

    return {products, isLoading, isError, error}
}