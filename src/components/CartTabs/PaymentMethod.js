import React, {useState} from 'react';
import { useShoppingCart } from '../ShoppingCartContext';
import { Checkbox, Radio } from '@mui/material';
import { Row } from 'react-bootstrap';

function PaymentMethod() {
  const [selectedItem, setSelectedItem] = useState(null)
  const PaymentOptions = ['Swipe', 'Cash'];

  const handleRadioChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const delivery = 20;
  const { cart, removeItemFromCart } = useShoppingCart();

  const handleRemoveItem = (itemId) => {
    // Remove the item from the cart
    removeItemFromCart(itemId);
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
            <p>ITEM TOTAL :  </p>
            <p>DELIVERY FEE :</p>
            <p>TOTAL :       </p>
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
      <button className='confBut'>Confirm</button>
      <button className='cancelBut'>Cancel</button>
      </div>
    </div>
  );
}

export default PaymentMethod;
