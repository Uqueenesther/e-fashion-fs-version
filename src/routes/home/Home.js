import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../component/directory/directory';
import './Home.scss';



const Home =() => {
 
      return (
        <div className='home-container'>
          <Outlet />
          <Directory />
        </div>
      );

   
  }

  export default Home;


 

