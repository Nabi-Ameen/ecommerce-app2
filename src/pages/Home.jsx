import React, { useContext } from 'react';
import Product from '../components/Product';

import { ProductContext } from '../contexts/ProductContext';
const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    )
  })
  console.log(filteredProducts);
  return (
    <section className='py-16'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-sm md:max-w-none md:mx-0'>
          {
            filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />
            })
          }
        </div>
      </div>
    </section>
  )
};

export default Home;
