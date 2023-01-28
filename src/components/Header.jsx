import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? "bg-blue-700" : "bg-blue-800"} py-4 fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex justify-between '>
        <Link to='/'>
          <div className='text-white'>Header</div>
        </Link>
        <div className='cursor-pointer relative' onClick={() => { setIsOpen(!isOpen) }}>
          <BsBag className='text-3xl text-white' />
          <div className='absolute -top-1 -right-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-sm'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
};

export default Header;
