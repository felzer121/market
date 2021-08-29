import * as React from "react";
import { Select } from "antd";
import './style.scss'

export const Delivery = () => {
  const styleSelectDelivery = {
    color: '#AE9FE9',
    minWidth: 150
  }
  return (
    <div className='delivery'>
      <span className='delivery__txt'>Ваш регион доставки:</span>
      <Select defaultValue="lucy" style={styleSelectDelivery} bordered={false}>
        <option className="delivery__select-option" value="lucy">
          Нижний Новгород
        </option>
        <option className="delivery__select-option" value="1">
          Казань
        </option>
      </Select>
    </div>
  );
};
