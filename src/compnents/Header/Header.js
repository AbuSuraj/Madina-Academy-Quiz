import React from 'react';
import { NavLink } from 'react-router-dom';
let activeStyle = {
    textDecoration: "",
    backgroundColor: "#5F9DF7"
  };
const Header = () => {
    return (
        <div className='navbar bg-base-100 flex-col md:flex-row justify-between  '>
            <h1 className='text-3xl font-serif font-extrabold ml-5 ' >Madina Academy Quiz</h1>
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