import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Vivus from 'vivus';
import './style.scss'

interface MenuButtonProps {
  txt: string
  isNews: boolean
  link: string
  icon: string
  backgroundColor: string
}

export const MenuButton = ({txt, isNews, icon, link, backgroundColor}:MenuButtonProps) => {
  const [hover, isHover] = useState(false)
  const svg = useRef<any>();

  useEffect(() => {
    if(hover)
      new Vivus(svg.current, { duration: 50 });
  }, [hover]);

  const hoverStyle = '0px 0px 4px 5px rgba(112, 78, 208, 0.05)'
  return (
    <div className='menuButton' onMouseEnter={()=> {isHover(true)}}
         onMouseLeave={()=> {isHover(false)}}>
      <Link to={ link } className='menuButton__link'>
        <div className='menuButton__icon' style={{backgroundColor: backgroundColor, boxShadow: hover ? hoverStyle : ''}}>
          { Boolean(isNews) && <div className='menuButton__new' /> }
          <object ref={ svg } className='menuButton__object'
                  type="image/svg+xml" data={ icon }
                  aria-label={ txt } />
        </div>
        <div className='menuButton__txt'>
          <span>{ txt }</span>
        </div>
      </Link>
    </div>
  );
};