import React, { useState, useEffect } from 'react';
const productList = require('../res/stock_data.json');

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filter out items with empty or missing 'DESCRIPT' field
    const filteredProducts = productList.filter((product) => {
      const descript = product.DESCRIPT || ''; // Use an empty string if 'DESCRIPT' is null or undefined
      return descript.trim() !== ''; // Filter out items with empty 'DESCRIPT'
    });

    setProducts(filteredProducts);
  }, []);

  return (
    <div className="parent-container">
      <div className="scrollable-div">
        <div className='Home'>
          <h1>All Products</h1>
          <div className='ItemList'>
            {products.map((product, index) => (
              <div className='Card' key={index}>
                <div className='Title'>{product.DESCRIPT}</div>
                <p className='Price'>N${product.SELLPINC1}</p>
                {/* Include other properties as needed */}
              </div>
            ))}
          </div>
          {/* ... other elements */}
        </div>
      </div>
    </div>
  );
}

export default Home;
