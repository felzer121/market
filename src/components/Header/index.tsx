import React from 'react';
import { Menu } from "../Menu";
import { Delivery } from "../Delivery";
import './style.scss'
import { Logo } from "../Logo";
import { ButtonCatalog } from "../ButtonCatalog";
import { Search } from "../Seacrch";
import { MenuButton } from "../MenuButton";
import { Bag } from "../Bag";

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__top'>
        <Delivery />
        <Menu />
      </div>
      <div className='header__bottom'>
        <Logo />
        <div className='header__content'>
          <ButtonCatalog />
          <Search />
          <MenuButton txt={'Сравнение'} backgroundColor={'#DDFDFE'} isNews={true} link={'/auth'} icon={'/icon/shuffle-outline.svg'} />
          <MenuButton txt={'Избранное'} backgroundColor={'#E5DEFD'} isNews={false} link={'/auth'} icon={'/icon/heart-outlined.svg'} />
          <MenuButton txt={'Войти'} backgroundColor={'#D4DBFC'} isNews={false} link={'/auth'} icon={'/icon/login.svg'} />
        </div>
        <Bag item={4} />
      </div>
    </div>
  );
};
