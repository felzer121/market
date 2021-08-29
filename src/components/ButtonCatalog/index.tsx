import React from 'react';
import Button from "antd/lib/button/button";
import './style.scss'

export const ButtonCatalog = () => {
  const style = {
    backgroundColor: '#DEF7FE',
    borderRadius: 10,
    border: 'none',
    height: 46,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    color: '#83BEBD',
  }

  return (
    <Button style={style} type="primary" className='ButtonCatalog'>
      <img src="/icon/tile.svg" className='ButtonCatalog__icon' alt="tile" />
      Каталог товаров
    </Button>
  );
};