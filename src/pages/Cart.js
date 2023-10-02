import React, { useState } from 'react';
import CartTab from '../components/CartTab';


function Cart() {
  const [activeTab, setActiveTab] = useState(0); // 0 for Shopping Cart, 1 for Delivery Location, 2 for Payment Method


  return (
        <div className='CartPage'>
          <div className='Row'>
            <div className={`HeadCard ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
              <h3>1. Shopping Cart</h3>
            </div>
              
            <div className={`HeadCard ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
              <h3>2. Delivery Location</h3>
            </div>
            <div className={`HeadCard ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
              <h3>3. Payment Method</h3>
            </div>
          </div>

          <div className='Row'>
            <CartTab activeTab={activeTab} />
          </div>
        </div>
  );
}

export default Cart;