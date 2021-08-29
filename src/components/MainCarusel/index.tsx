import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './style.scss'
import { CarouselRef } from 'antd/lib/carousel';

export const MainCarousel = () => {
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
  const buttons =
    <div>
      <div onClick={back} className='carousel__button carousel__buttonPrev'>
        <LeftOutlined className='carousel__buttonIcon carousel__buttonIcon-prev' />
      </div>
      <div onClick={next} className='carousel__button carousel__buttonNext'>
        <RightOutlined className='carousel__buttonIcon carousel__buttonIcon-next' />
      </div>
    </div>

  return (
    <Carousel ref={carousel} className='carousel' effect="fade" >
      <div>
        <div className='carousel__item'>
          <img src="/test-slider.png" style={{width:'100%'}} alt=""/>
        </div>
        { buttons }
      </div>
      <div>
        <div className='carousel__item'>
          asgf
        </div>
        { buttons }
      </div>
      <div>
        <div className='carousel__item'>
          asgf
        </div>
        { buttons }
      </div>
    </Carousel>
  );
};