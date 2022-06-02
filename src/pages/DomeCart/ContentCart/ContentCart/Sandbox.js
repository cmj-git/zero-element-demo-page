import React, { useState, useEffect } from 'react';

import TestList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function (props) {

  //  let api ='/api/PatternCart'
   let api ='/api/ContentCart'


  const [data] = useTokenRequest({ api });


  return (
    data && data.length > 0 ? (
      <TestList {...props} data={data} />
    ) : <></>
  )
}