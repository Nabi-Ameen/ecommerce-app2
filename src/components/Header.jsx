import React,{useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className='flex justify-between'>
    <div>Header</div>
    <div className='cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}><BsBag className='text-3xl'/></div>
  </header>
  )
};

export default Header;
