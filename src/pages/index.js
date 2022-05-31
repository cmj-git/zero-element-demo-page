import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

// import { AutoLayout } from '@/components';
// import Logs from '@/pages/dev/logs'
import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'
import Field from '@/pages/model/Model_field'
import Entity from '@/pages/model/Model_entity'
import Service from '@/pages/model/Model_service'
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout } from 'zero-element-boot';
// const promiseAjax = require('@/components/utils/request');
// import layout from './nagation/layout'
// import layout from './Standalone/layout';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Page } from 'zero-element-boot/lib/components/cart'
import ModelTab from '@/pages/model/Model_tab'


const promiseAjax = require('zero-element-boot/lib/components/utils/request');


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

  ////1111111


  //modelTab
  return (

    <ModelTab {...props} />

  )




}