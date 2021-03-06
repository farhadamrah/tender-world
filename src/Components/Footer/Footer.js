import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <nav className='footer__nav'>
          <h1 className='footer__title'>Tender World</h1>
          <ul className='footer__list'>
            <li className='list__item'>
              <Link to='/rules'>İstifadəçi qaydaları</Link>
            </li>
            <li className='list__item'>
              <Link to='/contact'>Bizimlə əlaqə</Link>
            </li>
            <li className='list__item'>
              <Link to='/'>Saytda reklam</Link>
            </li>
          </ul>
          <span>info@tenderworld.az</span>
          <span>+994 ** *** ** **</span>
          <span>+994 12 *** ** **</span>
          <p className='footer__copyrigth'>Copyright © 2021 TenderWorld </p>
        </nav>
      </div>
    </>
  );
};

export default Footer;
