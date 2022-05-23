import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";
// import { AutoLayout } from '@/components';
// import Logs from '@/pages/dev/logs'
import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'
import ModelPage from '@/pages/Model'

import Helloword from '@/pages/helloworld' 

import TestCrudList from '@/pages/testCrudList/layout'

import TestPageCart from './TestCart/TestPageCart';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout, NamedCart } from 'zero-element-boot';
// const promiseAjax = require('@/components/utils/request');
// import layout from './nagation/layout'
// import layout from './Standalone/layout';
import { Page } from 'zero-element-boot/lib/components/cart'
const promiseAjax = require('zero-element-boot/lib/components/utils/request');

// import Rad from '@/pages/TestCart/Red/Index';

export default function index (props) {

  // connection
  // if (process.env.NODE_ENV == 'development') {
  //   setEndpoint('http://demo.smallsaas.cn:8001');
  // }

  // return (

  //   <ConnectionPage {...props} />

  // )


  //--------------------------------------------------------------------------------------------------------///------------------------------------------------


  // //// Nagation
  // if (process.env.NODE_ENV == 'development') {
  //   setEndpoint('http://app1.console.smallsaas.cn:8001');
  //   // setToken('')
  // }
  // return (

  //   <Nagation {...props} />

  // )

  //ModelPage

  return (

    <TestPageCart {...props} />

    // <NamedCart xname="Cart"props={{padding:"100px"}} >
   
    // <h1>1</h1>
    // </NamedCart>

  )



}