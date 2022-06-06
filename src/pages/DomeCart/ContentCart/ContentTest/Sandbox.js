import React, { useState, useEffect } from 'react';

import TestList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';



export default function (props) {

  //  let api ='/api/PatternCart'
   let api ='http://app1.console.smallsaas.cn:8001/api/ContentTest'


  const [data] = useTokenRequest({ api });
      console.log('11111',data);
      

 
  return (
    data && data.length > 0 ? (
      <TestList {...props} data={data} />
    ) : <></>
  )
}