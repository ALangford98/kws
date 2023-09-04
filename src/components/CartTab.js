import React from 'react';
import { useShoppingCart } from '../components/ShoppingCartContext';

function CartTab({ activeTab }) {
  const { cart, removeItemFromCart } = useShoppingCart();

  const handleRemoveItem = (itemId) => {
    // Remove the item from the cart
    removeItemFromCart(itemId);
  };

   // Calculate the total price of items in the cart
   const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  // Define different content for each tab
  const tabContents = [
    <div className='CartList'>
      
      <ul>
        <div className='CartItemCard'>
        {cart.map((item) => (
          <li key={item.id}>
            <div className='CartItem'>
              <span>{item.name}</span>
              <br />
              <span>Price: ${item.price}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
        </div>
      </ul>
      <h1>Total: ${totalPrice.toFixed(2)}</h1> {/* Display the total price with two decimal places */}
    </div>,
    <div>Content for Delivery Location tab</div>,
    <div>Content for Payment Method tab</div>
  ];

  return <div className='CartCard'>{tabContents[activeTab]}</div>;
}

export default CartTab;