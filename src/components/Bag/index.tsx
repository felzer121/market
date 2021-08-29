import React from 'react';
import './style.scss'
interface BagProps {
  item: number
}

export const Bag = ({item}:BagProps) => {
  return (
    <div className='bag'>
      <div className='bag__icon'>
        {Boolean(item) && <div className='menuButton__new' />}
        <img src='/icon/bag.svg' alt=""/>
      </div>
    </div>
  );
};