import React from 'react'

function Cart() {
  return (
    <div>
      <div className="parent-container">
            <div className="scrollable-div">
              <div className='HeadGap'></div>
                <div className='ItemList'>
                  <div className='Row'>
                  <div className='HeadCard'>
                    <h3>1. Shopping Cart</h3>
                  </div>
                  <div className='HeadCard'>
                    <h3>2. Delivery Location</h3>
                  </div>
                  <div className='HeadCard'>
                    <h3>3. Payment Methods</h3>
                  </div>
                  
                </div>
                <div className='HeadGap'></div>
                <div className='CartCard'>

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cart