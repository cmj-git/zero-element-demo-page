import React, { useState, useEffect } from 'react';

import TestList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function (props) {

  // let api = '/api/crud/fieldModel/fieldModels'
  // let api =' /api/CartLestData'
  // let api ='/api/userData'
   let api ='/api/DomeCartListData'
  //  let api ='/api/ItemplaceholderData'



 

  const [data] = useTokenRequest({ api });

console.log(data,'== data');

  return (
    data && data.length > 0 ? (
      <TestList {...props} data={data} />
    ) : <></>
  )
}