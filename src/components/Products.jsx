"use client";
import Image from "next/image"
import Link from "next/link";

const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-[20px] ">
      {
        data.products.map(product => (
          <Link href={`/dashboard/products/${product.id}`} key={product.id}>
            <div className= " bg-white p-6 rounded-lg shadow-lg">
              <Image priority src={product.thumbnail} alt={product.title} width={250} height={250} />
              <h1 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">{product.title}</h1>
              <p className="text-gray-600 min-h-[60px]">${product.price}</p>
              <strong className="text-gray-600 mb-[20px]">{product.category}</strong>
              <p className="text-gray-600 min-h-[200px] line-clamp-2">{product.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => console.log(product)}>Add to cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Products