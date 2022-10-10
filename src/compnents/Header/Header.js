import React from 'react';
import { NavLink } from 'react-router-dom';
let activeStyle = {
    textDecoration: "",
    backgroundColor: "#5F9DF7"
  };
const Header = () => {
    return (
        <div className='navbar bg-base-100 flex-col md:flex-row justify-between'>
          <div>
             <img className='rounded-full w-[50px] h-[50px]' src="https://t4.ftcdn.net/jpg/04/93/12/57/360_F_493125771_FBG0HlcYeQM5VnRwo8r12vOT3Y40XVbh.jpg" alt="logo" />
            <h1 className='text-3xl font-serif font-extrabold ml-5 ' >Madina Academy Quiz</h1>
         </div>
            <nav className='mr-12'>
                <NavLink to={'/home'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-secondary mr-4" >Home</NavLink>
                <NavLink to={'/statistics'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-secondary mr-4" >Statistics</NavLink>
                <NavLink to={'/blog'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-secondary mr-2" >Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;