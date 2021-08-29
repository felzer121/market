import React from 'react';
import './style.scss'
import { MainCarousel } from "../MainCarusel";

export const TopInfo = () => {
  const category = [
    {
      id: 1,
      title: 'Наушники',
      url: 'category1.png',
      subTitle: 'Слушай музыку тряси тушой'
    },
    {
      id: 2,
      title: 'Рюкзаки',
      url: 'category2.png',
      subTitle: 'Возьми самое необходимое'
    }
  ]
  return (
    <div className='topCategory'>
      <MainCarousel />
      {category.map(item=> {
        return(
          <div className='topCategory__item' key={item.id}>
            <img src={item.url} alt=""/>
            <div className='topCategory__item-description'>
              <h4 className='topCategory__item-title'>{item.title}</h4>
              <p className='topCategory__item-subtitle'>{item.subTitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};