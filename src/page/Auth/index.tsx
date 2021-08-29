import React from 'react';
import './style.scss'
import {Logo} from "../../components/Logo";
import { Space } from 'antd';
import Input from 'antd/lib/input';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Index = () => {
  const buttonStyle = {
    backgroundColor: '#638CC0',
    height: 48,
    color: '#FFFFFF',
    textTransform: "uppercase" as const,
    fontSize: '14px',
    marginTop: 26,
    width: 164,
    border: 'none',
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2))'
  }
  return (
    <div className='Auth'>
      <div className='Auth__content'>
        <div className='Auth__logo'>
          <Logo />
        </div>
        <div className='Auth__form'>
          <div className='Auth__header'>
            <span className='Auth__title'>Авторизация</span>
            <div className='Auth__toggle'>
              <span className='Auth__toggle-span'>Email</span>
              <span className='Auth__toggle-span' style={{color: '#C4C4C4', margin: '0 10px'}}>|</span>
              <span className='Auth__toggle-span'>Login</span>
            </div>
          </div>
          <div className='Auth__subAuth'>
            <img src="./icon/auth-form.svg" alt=""/>
            <span className='Auth__subAuth-span'>Введите email и получите код авторизации</span>
          </div>
          <div className='Auth__inputBox'>
            <Input style={{height: '54px', marginBottom: '20px'}} placeholder="login" />
            <Space direction="vertical" style={{width: '100%'}}>
              <Input.Password
                style={{width: '100%', height: '54px'}}
                placeholder="password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Space>
            <Button style={buttonStyle}>Войти</Button>
          </div>
        </div>
        <div className='Auth__register'>
          <div className='Auth__registerTitle'>
            <div className='Auth__registerTitle-firstLine' />
            <span className='Auth__registerTitle-span'>ИЛИ</span>
            <div className='Auth__registerTitle-line' />
          </div>
          <span className='Auth__register-span'>Не имеете учетной записи? <Link to='/auth'>Регистрация</Link></span>
        </div>
      </div>
      <div className='Auth__picture'>
        <picture>
          <img src="./fon-auth.jpg" alt="fon"/>
        </picture>
      </div>
    </div>
  );
};

export default Index;