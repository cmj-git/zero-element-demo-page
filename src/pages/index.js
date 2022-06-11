import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
// import Sandbox from '@/pages/TestCart/TestList/Sandbox'
// import Sandbox from '@/pages/DomeCart/PatternCart/Pattern/Sandbox'

// import Sandbox from '@/pages/DomeCart/ContentCart/ContentCart/Sandbox'
// import Sandbox from '@/pages/DomeCart/ContentCart/ContentTest/Sandbox'
// import Sandbox from '@/pages/DomeCart/DomeCartList/Sandbox'

import AutoCartSetpresenter from '@/auto/AutoCartSet/Presenter'
import TestWXpage from '@/pages/Test/TestWXpage'


// import Sandbox from '@/auto/AutoCartSetDome/Sandbox';
// import Sandbox from '@/auto/AutoCartSet/Sandbox';
import Sandbox from '@/auto/AutoSelectSet/Sandbox';



// import AutoCartSetSelector from '@/auto/AutoCartSetSelector/index';



import Container from '@/pages/AppletsContainer/index'
import ContentCart from '@/pages/DomeCart/ContentCart/Content/index'
import TestRight from '@/pages/DomeCart/TestRight'
import IndicatorCollection from '@/composition/IndicatorCollection'
import SelectorCollection from '@/composition/SelectorCollection'
import TestShadowIndicator from '@/pages/Test/TestShadowlndicator'



// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder';

// import TestAPI from './TestAPI';


import TestCrudList from '@/pages/testCrudList/layout'

// import TestPageCart from './TestCart/TestPageCart';
import ManyCart from '@/pages/ManyCart';
import Layout from '@/pages/layout';
import CartItemPlaceholder from '@/pages/CartItemPlaceholder';
import NamedCartItemPlaceholder from '@/pages/NamedCartItemPlaceholder';
import CartList from '@/pages/TestCart/CartList';
import TabsCart from '@/pages/DomeCart/TabsCart';
// import PageCart from 'zero-element-boot/lib/components/cart/PageCart';

// import CheckBoxIndicatorCart from '@/pages/DomeCart/indicator/CheckBoxIndicatorCart';

import OutlineShaowSelector from '@/composition/SelectorCollection/OutlineShaowSelector'
import Select from '@/composition/SelectorCollection/Select'

import CartCollection from '@/components/collection/CartCollection'

import CssCart from 'zero-element-boot/lib/components/css/CssCart'
import CssImage from '@/components/css/CssImage'






import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout, NamedCart } from 'zero-element-boot';
import { Center,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Page } from 'zero-element-boot/lib/components/cart'
import PageCart from '@/pages/PageCart'

import Circle from 'zero-element-boot/lib/components/shape/Circle'
import Round from 'zero-element-boot/lib/components/shape/Round'
import Rectangle from 'zero-element-boot/lib/components/shape/Rectangle'



import SimpleCart from '@/pages/DomeCart/SimpleCart'

import checkOff from '@/assets/check_off.svg';

import TestOverlaySelector  from '@/pages/TestOverlaySelector'
import TestNamedCart  from '@/pages/TestOverlaySelector'

import TestBingUnderBarSelected  from '@/pages/Test/TestBingUnderBarSelected'
import TestBorderStyleSelected  from '@/pages/Test/TestBorderStyleSelected'



const promiseAjax = require('zero-element-boot/lib/components/utils/request');


export default function index (props) {


  return (

  
//  <Select />
//  <SimpleCart width='400px'  height='400px' fill='#f4f4f7'padding='20px'>
  /* <Circle /> */
 /* <Round /> */
/* <Rectangle /> */
//  </SimpleCart> 


//  <PageCart >
//    <CartCollection />
//          {/* <SelectorCollection />  */}
// </PageCart>

// <CssCart  width='200px' height='200px'background='#f4f4f2' margin='100px auto' color='#ff0000'>
//   <h1>111</h1>
//   222
// </CssCart>

/* <CssImage  src={checkOff} width='800px' height='800px'/> */
//  <Sandbox /> 

//  <AutoCartSetpresenter />   

  //  <SimpleCart  width='1200px'  height='540px' fill='#f4f4f7'padding='30px'>
  //       <ItemPlaceholder />
  //   </SimpleCart> 
//  <SimpleCart  width='500px'  height='800px' fill='#f4f4f7'padding='10px'>
//       <TestOverlaySelector />
// </SimpleCart> 

// /* <TestShadowIndicator /> */

// <ItemPlaceholder /> 
<TestWXpage /> 

    // <TestBingUnderBarSelected />
    // <TestBorderStyleSelected />
  )




}