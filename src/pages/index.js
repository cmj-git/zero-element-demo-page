import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

import ConnectionPage from '@/pages/Connection'
import Nagation from '@/pages/nagation'


//---sandbox
import TestList from '@/pages/TestCart/TestList/Sandbox'
import PatternCart from '@/pages/DomeCart/PatternCart/Pattern/Sandbox'
import ContentCart from '@/pages/DomeCart/ContentCart/ContentCart/Sandbox'
import ContentTest from '@/pages/DomeCart/ContentCart/ContentTest/Sandbox'
import DomeCartList from '@/pages/DomeCart/DomeCartList/Sandbox'
import AutoCartSet from '@/auto/AutoCartSet/Sandbox';
import AutoSelectSet from '@/auto/AutoSelectSet/Sandbox';
import AutoWxAppList from '@/auto/AutoWxAppList/Sandbox';
import AutoPageList from '@/auto/AutoPageList/Sandbox';
import TestAutoLayout from '@/pages/Test/TestAutoLayout/Sandbox';
import AutoComponentSet from '@/auto/AutoComponentSet/Sandbox';
import AutoDome from '@/auto/AutoDome/Sandbox'
// import AutoDome from '@/components/'




//---Presenter
// import Presenter from '@/auto/AutoSelectSet/Presenter';
// import Presenter from '@/auto/AutoWxAppList/Presenter';
// import Presenter from '@/auto/AutoPageList/Presenter';
import AutoPageListPresenter from '@/auto/AutoPageList/Presenter'
import AutoCartSetpresenter from '@/auto/AutoCartSet/Presenter'



//-- selector
import DefaultSelector from '@/components/selector/DefaultSelector'
import AgreeSelector from '@/components/selector/AgreeSelector'





// import CheckBoxIndicatorCart from '@/pages/DomeCart/indicator/CheckBoxIndicatorCart';
import OutlineShaowSelector from '@/composition/SelectorCollection/OutlineShaowSelector'
import Select from '@/composition/SelectorCollection/Select'
import CartCollection from '@/components/collection/CartCollection'


//  --Cart

import CssCart from 'zero-element-boot/lib/components/cart/CssCart'
import CssImage from '@/components/css/CssImage'
import SimpleCart from '@/pages/DomeCart/SimpleCart'
import Circle from 'zero-element-boot/lib/components/shape/Circle'
import Round from 'zero-element-boot/lib/components/shape/Round'
import Rectangle from 'zero-element-boot/lib/components/shape/Rectangle'
import TabsCart from '@/pages/DomeCart/TabsCart';
// import PageCart from 'zero-element-boot/lib/components/cart/PageCart';
import { Page } from 'zero-element-boot/lib/components/cart'



import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import { history } from 'umi';
import { AutoLayout, NamedCart } from 'zero-element-boot';
import { Center,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Hooks from '@/components/StydlyHooks'





//---Test

// import TestAPI from './TestAPI';
// import TestPageCart from './TestCart/TestPageCart';
import TestCrudList from '@/pages/testCrudList/layout'
import TestOverlaySelector  from '@/pages/TestOverlaySelector'
import TestBingUnderBarSelected  from '@/pages/Test/TestIndicator/TestBingUnderBarSelected'
import TestBorderStyleSelected  from '@/pages/Test/TestIndicator/TestBorderStyleSelected'
import TestTitledBarContaner  from '@/components/TitledBarContainer'
import TestTagIndicator from '@/pages/Test/TestIndicator/TestTagIndicator'
import TestWXpage from '@/pages/Test/TestWXpage'
import TestShadowIndicator from '@/pages/Test/TestIndicator/TestShadowlndicator'
import TestRight from '@/pages/DomeCart/TestRight'
import TestVStack from '@/pages/Test/TestVStack'
import TestPreviewAutoLayoutSelected from '@/pages/Test/TestIndicator/TestPreviewAutoLayoutSelected'
import TestSelector from '@/auto/TestSelector'
import TestHCenter from '@/pages/Test/TestHCenter'
import TestOnDeleteIndicator from '@/pages/Test/TestIndicator/TestOnDeleteIndicator'
import TestOnDefaultNewItemIndicator from '@/pages/Test/TestButton'
// import TestOnDefaultNewItemIndicator from '@/pages/Test/TestIndicator/TestOnDefaultNewItemIndicator'
import TestDotDashButton from '@/pages/Test/TestPresenter/TestDotDashButton'
import TestCounter from '@/pages/Test/TestCounter'
import TestCounterPage from '@/pages/Test/TestCounterPage'
import TestShowHideIndicator from '@/pages/Test/TestIndicator/TestShowHideIndicator'




// import TestHCart from '@/components/hooks/useSize'


import Logo from '@/components/Logo'
// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder';
import ManyCart from '@/pages/ManyCart';
import Layout from '@/pages/layout';
import CartItemPlaceholder from '@/pages/CartItemPlaceholder';
import NamedCartItemPlaceholder from '@/pages/NamedCartItemPlaceholder';
import CartList from '@/pages/TestCart/CartList';


const promiseAjax = require('zero-element-boot/lib/components/utils/request');


export default function index (props) {


  return (
      // <ItemPlaceholder /> 
      //  <TestSelector />    
      //  <TestCircularCheckboxIndicator />
      //  <TestOverlaySelector />    
          // <TestBingUnderBarSelected />
          // <TestBorderStyleSelected />
      // <TestTitledBarContaner>
      //   <ItemPlaceholder />  
      // <TestVStack />
      // <AutoDome />
      // <AutoWxAppList />
    //   <TestShowHideIndicator />
      // <AutoCartSet />
      // <AgreeSelector />
      <TestCounterPage />
      // <AutoCartSet />
    )




}