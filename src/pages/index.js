import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";
// import { AutoLayout } from '@/components';
// import Logs from '@/pages/dev/logs'
import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'
<<<<<<< HEAD
import ModelPage from '@/pages/Model'

import Helloword from '@/pages/helloworld' 

import TestCrudList from '@/pages/testCrudList/layout'

import TestPageCart from './TestCart/TestPageCart';

=======
import Field from '@/pages/Model_field'
import Entity from '@/pages/Model_entity'
import Service from '@/pages/Model_service'
>>>>>>> 61ed4f4fbddcd45847aa5ca782cb2dfa384a0b69
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout, NamedCart } from 'zero-element-boot';
// const promiseAjax = require('@/components/utils/request');
// import layout from './nagation/layout'
// import layout from './Standalone/layout';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Page } from 'zero-element-boot/lib/components/cart'
import ModelTab from '@/pages/Model_tab'


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

  // return (

  //   <Nagation {...props} />

  // )





  //ModelPage

  // return (

  //   <ModelPage {...props} />

  // )
  // //ModelPage2
  // return (

  //  <ModelPage {...props} />

  // )




  //modelTab
  return (

<<<<<<< HEAD
    <TestPageCart {...props} />

    // <NamedCart xname="Cart"props={{padding:"100px"}} >
   
    // <h1>1</h1>
    // </NamedCart>
=======
    <ModelTab {...props} />
>>>>>>> 61ed4f4fbddcd45847aa5ca782cb2dfa384a0b69

  )




}