import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../compnents/Footer/Footer';
import Header from '../compnents/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
          <Outlet></Outlet>  
          <Footer></Footer>
          
        </div>
    );
};

export default Main;