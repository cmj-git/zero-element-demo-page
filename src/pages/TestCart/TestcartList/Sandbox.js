import React, { useState, useEffect } from 'react';

import TestCartList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function (props) {

  // let api = '/api/crud/fieldModel/fieldModels'
  let api ='/api/ItemplaceholderData'
  // let api =' /api/NamedItemplaceholderData'
  //  let api ='/api/userData'


 

  const [data] = useTokenRequest({ api });


  return (
    data && data.length > 0 ? (
      <TestCartList {...props} data={data} />
    ) : <></>
  )
}