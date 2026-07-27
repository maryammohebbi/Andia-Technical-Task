'use client'

import { useProducts } from '@/hooks/useProducts'
import Image from 'next/image'
import { LiaSearchSolid } from 'react-icons/lia'

export default function Home() {
  const { products, isLoading, isError, error } = useProducts()

  if (isLoading) return <p>Loading...</p>

  if (isError) {
    return <p>{error.message}</p>
  }

  console.log(products)

  return (
    <div className="container max-w-sm md:max-w-2xl mx-auto p-5 flex flex-col space-y-7">
      <div className="flex items-center justify-center relative">
        <input className="w-full bg-gray-50 p-3 rounded-2xl outline-none text-xs pr-9" />
        <LiaSearchSolid className="w-5 h-5 absolute top-2.5 right-3" />
      </div>
      <div className="flex gap-5 flex-wrap items-center justify-between">
        {products.map((p) => {
          return (
            <div
              key={p.id}
              className="w-full sm:w-44 h-80 flex flex-col items-center justify-between cursor-pointer p-2
              border border-gray-200 rounded-2xl hover:scale-110 translate-0 duration-500"
            >
              <Image
                src={p.image}
                width={100}
                height={200}
                className="h-[50%]"
              />
              <div className="flex flex-col justify-between h-[40%]">
                <span className="text-xs text-gray-600">{p.title}</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">
                    Price: {p.price} $
                  </span>
                  <span className="text-xs text-gray-600">
                    COUNT: {p.rating.count}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
