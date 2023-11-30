import React, { useState } from 'react';
import { useShoppingCart } from '../ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

function PaymentMethod() {
  const [selectedItem, setSelectedItem] = useState(null);
  const PaymentOptions = ['Swipe', 'Cash', 'Zapper'];
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const delivery = 20;
  const { cart, removeItemFromCart } = useShoppingCart();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleConfirmPayment = () => {
    if (selectedItem === 'Zapper') {
      const newAmount = totalPrice + delivery; // Calculate the new amount dynamically

      // Pass the total price to the ZapperPayments page
      navigate('/ZapperPayments', { state: { totalPrice: newAmount } });
    } else {
      // Handle other payment methods
      // For example, you can show a confirmation message or proceed with other logic
      console.log(`Selected Payment Method: ${selectedItem}`);
    }
  };
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className='PaymentTab'>
      <div className='Method'>
        <h2>Payment Method</h2>
        <div className='methodContents'>
          {PaymentOptions.map((item, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`item-${index}`}
                name="items"
                value={item}
                checked={selectedItem === item}
                onChange={handleRadioChange}
              />
              <label htmlFor={`item-${index}`}>{item}</label>
            </div>
          ))}
          <div className='methodConfirm'>
            <p>Selected Payment Method:</p>
            <h2>{selectedItem}</h2>
          </div>
        </div>
      </div>
      <div className='Summary'>
        <h2>Summary</h2>
        <ul>
          <div className='PaymentItemCard'>
            {cart.map((item) => (
              <li key={item.id} className='listItem'>
                <div className='PaymentItem'>
                  <div className='Row'>
                    <div className='ItemText'>
                      <span>{item.name}</span>
                      <br />
                      <span>Price: ${item.price.toFixed(2)}</span>
                    </div>
                    <div className='RemovePayItem'>
                      <button onClick={() => handleRemoveItem(item.id)}>X</button>
                      <span> </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
        <div className='Totals'>
          <div className='Row'>
            <div>
              <p>ITEM TOTAL : </p>
              <p>DELIVERY FEE :</p>
              <p>TOTAL : </p>
            </div>
            <div className='values'>
              <p className='ItemTotal'>N${totalPrice.toFixed(2)}</p>
              <p className='DeliveryFee'>N${delivery.toFixed(2)}</p>
              <p className='Total_w_delivery'>N${(totalPrice + delivery).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Confirm'>
        <button className='confBut' onClick={handleConfirmPayment}>
          Confirm
        </button>
        <button className='cancelBut'>Cancel</button>
      </div>
    </div>
  );
}

export default PaymentMethod;
