import React, { useState, useEffect } from 'react';

import AutoCartSetSeletor from './index';


export default function (props) {

 const onHandleItemClick = (item) => {
      console.log(item, ' === item')
 }
  return (
      <AutoCartSetSeletor onItemClick={onHandleItemClick} endpoint='http://app1.console.smallsaas.cn:8001/openapi'/>
  )
}