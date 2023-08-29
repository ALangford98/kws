import React from 'react'

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    imageUrl: 'https://pngimg.com/uploads/milk/milk_PNG12696.png'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    price: 29.99,
    imageUrl: 'https://pngimg.com/uploads/bread/bread_PNG2224.png'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    price: 39.99,
    imageUrl: 'https://img.freepik.com/premium-psd/cigarette-packet-mockup_47987-2694.jpg?w=740'
  }
];

function Home() {
  return (
    <div className="parent-container">
      <div className="scrollable-div">
        <div className='Home'>
          <h1>Featured Products</h1>
          <div className='ItemList'>
            {mockProducts.map(product => (
              <div className='Card' key={product.id}>
                <div className='Image'>
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className='Title'>{product.title}</div>
                <div className='Description'>{product.description}</div>
                <p className='Price'>Price: ${product.price}</p>
              </div>
            ))}
          </div>
          {/* ... other elements */}
        </div>
      </div>
    </div>
  );
}

export default Home
