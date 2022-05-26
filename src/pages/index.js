import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

// import { AutoLayout } from '@/components';
// import Logs from '@/pages/dev/logs'
import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import Sandbox from '@/pages/TestCart/TestList/Sandbox'




// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder';

// import TestAPI from './TestAPI';


import TestCrudList from '@/pages/testCrudList/layout'

// import TestPageCart from './TestCart/TestPageCart';
import ManyCart from '@/pages/ManyCart';
import Layout from '@/pages/layout';
import CartItemPlaceholder from '@/pages/CartItemPlaceholder';
import NamedCartItemPlaceholder from '@/pages/NamedCartItemPlaceholder';
import CartList from '@/pages/TestCart/CartList';










import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout, NamedCart } from 'zero-element-boot';
// const promiseAjax = require('@/components/utils/request');
// import layout from './nagation/layout'
// import layout from './Standalone/layout';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Page } from 'zero-element-boot/lib/components/cart'



const promiseAjax = require('zero-element-boot/lib/components/utils/request');


export default function index (props) {


  return (

    // <ItemPlaceholder  {...props} />
  // <Sandbox  />
  // <NamedCartItemPlaceholder  />
  // <TestAPI  />
 // <ManyCart />
 <CartList />



  )




}