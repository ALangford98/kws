import React from 'react'

function Home() {
  return (
    <div className="parent-container">
      <div className="scrollable-div">
        <div className='Home'>
          <h1>Featured Products</h1>
            <div className='ItemList'>
              <div className='Card' ></div>
              <div className='Card' ></div>
              <div className='Card' ></div>
          </div>
            <h1 className='CategoryHead'>Browse Categories</h1>
          <div className='ItemList'>
            <div className='TableCard'></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
