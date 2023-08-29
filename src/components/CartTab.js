import React from 'react';

function CartTab({ activeTab }) {
  // Define different content for each tab
  const tabContents = [
    <div>Content for Shopping Cart tab</div>,
    <div>Content for Delivery Location tab</div>,
    <div>Content for Payment Method tab</div>
  ];

  return <div className='CartCard'>{tabContents[activeTab]}</div>;
}

export default CartTab;