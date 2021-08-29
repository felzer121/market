import React from 'react';
import './style.scss'

interface HomeBannerProps {
  background: string
  color: string
  title: string
  icon: string
}

export const HomeBanner = ({background, color, title, icon}:HomeBannerProps) => {
  return (
    <div className='homeBanner' style={{backgroundColor: background}}>
      <span className='homeBanner__title' style={{color: color}}>{title}</span>
      <img src={icon} className='homeBanner__icon' alt=""/>
    </div>
  );
};