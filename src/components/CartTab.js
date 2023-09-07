import React from 'react';
import { useShoppingCart } from '../components/ShoppingCartContext';
import CartList from './CartTabs/CartList';
import DeliveryLocation from './CartTabs/DeliveryLocation';
import PaymentMethod from './CartTabs/PaymentMethod';

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
    <CartList />,
    <DeliveryLocation />,
    <PaymentMethod />
  ];

  return <div className='CartCard'>{tabContents[activeTab]}</div>;
}

export default CartTab;