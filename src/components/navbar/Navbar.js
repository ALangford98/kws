import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  * as BsIcons from 'react-icons/bs'
import Search from '../../pages/Search';

import { AppContextProvider } from '../../components/appContext';


const Navbar = () => {
  const [val, setVal] = useState('Search')
  return (
    <div className='Navbar'>
      <li className='HomeBar'>
        <Link to="/" className='lnk'>Home</Link>
      </li>
      <li className='HelpBar'>
        <Link to="/Help" className='lnk'>Help</Link>
      </li>
      <li className='CartBar'>
        <Link to="/Cart" className='CartIcon'><BsIcons.BsCart2/></Link>
      </li>
      <AppContextProvider>
        <Search />
      </AppContextProvider>
    </div>
  );
}

export default Navbar;