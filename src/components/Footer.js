import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='bg-black py-8 text-center text-white'>
    <div className='container mx-auto'>
      Copyright &copy; {year}. All rights reserved.
    </div>
    </footer>
  )
};

export default Footer;
