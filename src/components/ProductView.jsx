"use client";
import Image from "next/image"; 
import { useDispatch } from "react-redux";
import { addEventListener } from "../lib/counterSlice";
const ProductView = ({ product }) => {

    const dispatch = useDispatch(); 
  const handleClick = (product) => {
    dispatch(addEventListener(product))
  }
  

  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-100">
      {product && (
        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg max-w-[550px]">
          <Image priority src={product.thumbnail} alt={product.title} width={280} height={280} className="rounded-lg mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-gray-600">${product.price}</p>
          <strong className="text-gray-600 mb-[20px]">{product.category}</strong>
          <p className="text-gray-600">{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full  mt-4" onClick={() => handleClick(product)}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductView;
