import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'

import {CartContext} from '../contexts/CartContext'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, category, image, price, } = product
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>

          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} alt="" className='max-h-[160px] group-hover:scale-110 transition-all' />
          </div>

        </div>
        <div className='absolute top-0 -right-11 group-hover:right-0 bg-blue-700/40 p-1 flex flex-col items-center justify-center gap-y-1 opacity-0 group-hover:opacity-100 transition-all'>
          <button onClick={()=> addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-10 h-10 bg-blue-700'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${id}`} className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl">
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className='text-sm capitalize text-gray-500'>{category}</div>
        <Link to={`/product/${id}`}>
          <div className='font-semibold mb-1 hover:text-gray-600'>{title}</div>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  )
};

export default Product;
