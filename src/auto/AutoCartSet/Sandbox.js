import React, { useState, useEffect } from 'react';

import AutoCartSet from './index';
import Cart from 'zero-element-boot/lib/components/cart/Cart';


export default function (props) {

  return (
    <Cart  fill='#F0F4F7' padding='0px'margin='30px 250px' shadow = '0 0px 10px rgba(0, 0, 0, 0.14)' linewidth='0'>
      <AutoCartSet/>
      </Cart>
  )
}