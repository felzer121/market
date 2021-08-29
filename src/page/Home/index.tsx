import React from 'react';
import {Header} from "../../components/Header";
import {TopInfo} from "../../components/TopInfo";
import './style.scss'
import {HomeSlider} from "../../components/HomeSlider";
import {HomeBanner} from "../../components/HomeBanner";
import {Footer} from "../../components/Footer";

export const Home = () => {
  return (
    <div className='home'>
      <Header />
      <TopInfo />
      <HomeSlider title={'Категории товаров'} />
      <div className='home__banner'>
        <HomeBanner title='Бесплатная доставка до двери'
                    background={'#F0ECFE'}
                    color={'#8366DC'}
                    icon={'/icon/undraw_logistics.svg'}/>
        <HomeBanner title='Бесплатная доставка до двери'
                    background={'#F0ECFE'}
                    color={'#8366DC'}
                    icon={'/icon/undraw_logistics.svg'}/>
      </div>
      <Footer />
    </div>
  );
};
