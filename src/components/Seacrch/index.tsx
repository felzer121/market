import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input';
import './style.scss'

export const Search = () => {
  const style = {
    backgroundColor: '#F0ECFE',
    height: 46,
    border: 'none',
    borderRadius: 10,
    width: '100%',
    maxWidth: 370
  }
  const searchIcon = <SearchOutlined style={{
    color: '#7359C2'
  }} />

  return (
    <Input style={style} placeholder="Поиск товаров" className='search' prefix={searchIcon} />
  );
};