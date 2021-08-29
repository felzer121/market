import React from 'react';
import { Link } from 'react-router-dom';
import { menu } from "../../config";
import './style.scss'
import {Logo} from "../Logo";
import { Input } from 'antd';

export const Footer = () => {
  const today = new Date();
  return (
    <div className='footer'>
      <div className='footer__menu'>
        <div className='footer__menuContainer'>
          {menu.map(link => {
            return (
              <Link to={link.link} key={link.id} className='footer__menuLink'>{link.title}</Link>
            )
          })}
        </div>
      </div>
      <div className='footer__content'>
        <div className='footer__logo'>
          <Logo />
          <p className='footer__logoInfo'>© {today.getFullYear()} название магазина.<br /> Все права защищены.<br /> ООО "Мой интернет магазин".<br /> Powered by StoreLand</p>
        </div>
        <div className='footer__contacts'>
          <span className='footer__title'>Наши контакты:</span>
          <ul className='footer__contactsList'>
            <li className='footer__contactsList-li'>
              <object data="/icon/phone.svg" type="image/svg+xml" aria-label='phone' />
              <div className='footer__contactsBox'>
                <p className='footer__contactsTxt'>+7(953) 678 90 67</p>
                <p className='footer__contactsTxt'>+7(953) 789 67 34</p>
              </div>
            </li>
            <li className='footer__contactsList-li'>
              <object data="/icon/message.svg" type="image/svg+xml" aria-label='message' />
              <div className='footer__contactsBox'>
                <p className='footer__contactsTxt'>frenchshop@ghyur.com</p>
              </div>
            </li>
            <li className='footer__contactsList-li'>
              <object data="/icon/map.svg" type="image/svg+xml" aria-label='map' />
              <div className='footer__contactsBox'>
                <p className='footer__contactsTxt'>Нижний Новгород, ул, Суетинская, дом 56, офис 345</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='footer__subscription'>
          <span className='footer__title'>Будьте всегда в курсе!</span>
          <div className='footer__email'>
            <Input placeholder="Basic usage" />
          </div>
        </div>
        <div className='footer__social'>
          <span className='footer__title'>Будьте с нами на связи!</span>
          <ul className='footer__socialList'>
            <li className='footer__socialItem'><object  data="/icon/facebook.svg" type="image/svg+xml" aria-label='facebook' /></li>
            <li className='footer__socialItem'><object  data="/icon/twitter.svg" type="image/svg+xml" aria-label='twitter' /></li>
            <li className='footer__socialItem'><object  data="/icon/youtube.svg" type="image/svg+xml" aria-label='youtube' /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};