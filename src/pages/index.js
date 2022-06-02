import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

// import { AutoLayout } from '@/components';
// import Logs from '@/pages/dev/logs'
import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'
<<<<<<< HEAD
import ItemPlaceholder from '@/pages/ItemPlaceholder/ItemPlaceholder'
// import Sandbox from '@/pages/TestCart/TestList/Sandbox'
import Sandbox from '@/pages/DomeCart/PatternCart/Pattern/Sandbox'

// import Sandbox from '@/pages/DomeCart/ContentCart/ContentCart/Sandbox'
// import Sandbox from '@/pages/DomeCart/ContentCart/ContentTest/Sandbox'



// import Sandbox from '@/pages/DomeCart/DomeCartList/Sandbox'


import SimpleCart from '@/pages/DomeCart/SimpleCart/index'
import Container from '@/pages/AppletsContainer/index'
import ContentCart from '@/pages/DomeCart/ContentCart/Content/index'
import TestRight from '@/pages/DomeCart/TestRight'
import IndicatorCollection from '@/composition/IndicatorCollection'
import SelectorCollection from '@/composition/SelectorCollection'




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

import TestTitleContainer from '@/pages/DomeCart/TitleContainer/TestTitleContainer'

import OutlineShaowSelector from '@/composition/SelectorCollection/OutlineShaowSelector'
import Select from '@/composition/SelectorCollection/Select'





import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout, NamedCart } from 'zero-element-boot';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Page } from 'zero-element-boot/lib/components/cart'
import PageCart from '@/pages/PageCart'


=======
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
>>>>>>> 35cfe551a390d4e920e680c42ee147a559996164


const promiseAjax = require('zero-element-boot/lib/components/utils/request');


export default function index (props) {

  // connection
  // if (process.env.NODE_ENV == 'development') {
  //   setEndpoint('http://demo.smallsaas.cn:8001');
  // }

  // return (

  //   <ConnectionPage {...props} />

  // )


  // import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder';

  // import TestAPI from './TestAPI';


  // import TestCrudList from '@/pages/testCrudList/layout'

  // // import TestPageCart from './TestCart/TestPageCart';
  // import ManyCart from '@/pages/ManyCart';


  // import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
  // import { history } from 'umi';
  // import { AutoLayout, NamedCart } from 'zero-element-boot';
  // // const promiseAjax = require('@/components/utils/request');
  // // import layout from './nagation/layout'
  // // import layout from './Standalone/layout';
  // import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
  // import { Page } from 'zero-element-boot/lib/components/cart'



  // const promiseAjax = require('zero-element-boot/lib/components/utils/request');

  ////1111111


  return (

<<<<<<< HEAD
    // <ItemPlaceholder  {...props} />
  // <Sandbox  />
  // <NamedCartItemPlaceholder  />
  // <TestAPI  />
//  <CartList />
/* <SimpleCart>
  11
</SimpleCart> */
//  <TabsCart /> 
/* <CheckBoxIndicatorCart>
<ItemPlaceholder  {...props} />
<ItemPlaceholder  {...props} />
  
</CheckBoxIndicatorCart> */
/* <Container /> */
/* <ContentCart>11</ContentCart>  */
 <PageCart >
         <SelectorCollection /> 
</PageCart>
//  <IndicatorCollection />  
/* <TestTitleContainer /> */

//  <Select />
=======
    <ModelTab  {...props} />
    // <ManyCart />
>>>>>>> 35cfe551a390d4e920e680c42ee147a559996164
  )




}