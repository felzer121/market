import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
import {menu} from "../../config";

export const Menu = () => {
  return (
    <ul className='menu'>
      {menu.map(link=> {
        return (
          <li className='menu__box' key={link.id}>
            <Link to={link.link} className='menu__link'>{link.title}</Link>
          </li>
        )
      })}
    </ul>
  );
};