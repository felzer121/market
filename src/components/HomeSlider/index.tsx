import React, {useRef} from 'react';
import {Carousel} from "antd";
import './style.scss'
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {CarouselRef} from "antd/lib/carousel";

interface HomeSliderProps {
  title: string
}

const splitArray = (category: any[], size: number) =>
{
  if (size === 0) {
    return [];
  }

  return category.reduce((split, element, index) => {
    index % size === 0 ? split.push([element]) : split[Math.floor(index / size)].push(element);
    return split;
  }, []);
};

export const HomeSlider = ({title}:HomeSliderProps) => {
  const carousel = useRef<CarouselRef>(null);
  const back = () => {
    if(carousel.current) {
      carousel.current.prev()
    }
  }
  const next = () => {
    if(carousel.current) {
      carousel.current.next()
    }
  }
  const category = [
    {
      id: '1',
      url: '/category3.png',
      title: 'Одежда'
    },
    {
      id: '2',
      url: '/category2.png',
      title: 'Сумки и аксессуары'
    },
    {
      id: '3',
      url: '/category1.png',
      title: 'Смартфоны'
    },
    {
      id: '4',
      url: '/category2.png',
      title: 'Бытовая техника'
    },
    {
      id: '5',
      url: '/category1.png',
      title: 'Детям'
    },
    {
      id: '6',
      url: '/category2.png',
      title: 'Зоотовары'
    },
    {
      id: '7',
      url: '/category3.png',
      title: 'Обувь'
    },
    {
      id: '8',
      url: '/category1.png',
      title: 'Медикаменты'
    },
    {
      id: '9',
      url: '/category1.png',
      title: 'Еще'
    }
  ]

  const groupCategory = splitArray(category, 8)

  return (
    <div className='homeSlider'>
      <div className='homeSlider__title-box'>
        <h3 className='homeSlider__title'>{title}</h3>
        <div className='homeSlider__controller'>
          <div onClick={back} className='homeSlider__button'>
            <LeftOutlined  className='homeSlider__buttonIcon' />
          </div>
          <div onClick={next} className='homeSlider__button'>
            <RightOutlined className='homeSlider__buttonIcon' />
          </div>
        </div>
      </div>
      <Carousel ref={carousel} dots={false} className='homeSlider__carousel' effect="fade" >
        {groupCategory.map((categories: any[]) => {
          return (
            <div className='homeSlider__carousel-box'>
              {
                categories.map(category => {
                  return (
                    <div className='homeSlider__carousel-item' key={category.id}>
                      <img className='homeSlider__carousel-picture' src={category.url} alt=""/>
                      <span  className='homeSlider__carousel-description'>{ category.title }</span>
                    </div>
                  )})
              }
            </div>
          )
        })}
      </Carousel>
    </div>
  );
};