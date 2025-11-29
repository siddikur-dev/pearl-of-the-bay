import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Root;