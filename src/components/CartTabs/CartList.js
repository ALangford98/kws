import React from 'react';
import { useShoppingCart } from '../ShoppingCartContext';

function CartList() {
  const { cart, removeItemFromCart } = useShoppingCart();

  const handleRemoveItem = (itemId) => {
    // Remove the item from the cart
    removeItemFromCart(itemId);
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className='CartList'>
      {/* Content for CartList tab */}
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
      <h1>Total: ${totalPrice.toFixed(2)}</h1>
    </div>
  );
}

export default CartList;