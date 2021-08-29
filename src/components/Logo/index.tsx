import React from 'react';
import './style.scss'

export const Logo = () => {
  return (
    <div className='logo'>
      <picture>
        <source srcSet="/icon/logo.svg" type="image/svg+xml" />
        <img src="/icon/logo.svg" alt="Logo" />
      </picture>
      <div className='logo__info'>
        <span className='logo__title'>Магазин</span>
        <p className='logo__subTitle'>разнообразные товары</p>
      </div>
    </div>
  );
};