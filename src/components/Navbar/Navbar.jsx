import React from 'react';
import navImg from '../../assets/logo.png'
import dollarIcon from '../../assets/coin.png'

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1200px] m-auto bg-base-100 bg-white text-black shadow-sm">
      <div className="flex-1">
        <a className="text-xl">
          <img className='w-[60px] h-[60px]' src={navImg} alt="" />
        </a>
      </div>
      <div className="flex item-center gap-1">
        <span>{availableBalance}</span>
        <span>coin</span>
        <img className='w-5 h-5 mt-1' src={dollarIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;