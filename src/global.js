// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { set as NamedCartConfig } from 'zero-element-boot/lib/components/config/NamedCartConfig';
import { set as NamedListConfig } from 'zero-element-boot/lib/components/config/NamedListConfig';

import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';


if (process.env.NODE_ENV == 'development') {

  // setEndpoint('http://demo.smallsaas.cn:8001');
   setEndpoint('http://app1.console.smallsaas.cn:8001');



  
  //  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTMzODM1ODcsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzY0Mjc4N30.ANPz7GhGbsopZEIfSEpfOANBYrTRxkeltty-fKo18c96hex7zyFdQFeLvLo49_caWkhn5gPeH_o9FmwVrDjIAQ')
}

// ---Presenter
// import Holders from '@/pages/ItemPlaceholder';
// import Holder from '@/pages/CartItemPlaceholder';
import CartIPH from '@/pages/CartItemPlaceholder';
import NamedCartIPH from '@/pages/NamedCartItemPlaceholder';
import DomeCartList from '@/pages/DomeCart/DomeCartList/DomeCartList';
import PatternCart from '@/pages/DomeCart/PatternCart/PatternCart';
import ContentCart from '@/pages/DomeCart/ContentCart/ContentCart/ContentCart';
import ContentTest from '@/pages/DomeCart/ContentCart/ContentTest/ContentTest';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import TestAutoLayout from '@/pages/Test/TestAutoLayout/Presenter'
import AutoCartSet from '@/auto/AutoCartSet/Presenter'
import AutoSelectSetPresenter from '@/auto/AutoSelectSet/Presenter'




// ---Indicator
import CircularCheckboxIndicatorDefault  from '@/components/indicator/CircularCheckboxIndicator'
import CircularCheckboxIndicatorSelected  from '@/components/indicator/CircularCheckboxIndicator/Selected'

import BingUnderBarSelectedDefault  from '@/components/indicator/BingUnderBarSelected/index'
import BingUnderBarSelected  from '@/components/indicator/BingUnderBarSelected/Selected'
import ShadowIndicator from 'zero-element-boot/lib/components/indicator/ShadowIndicator'

import BorderStyleSelectedDefault  from '@/components/indicator/BorderStyleSelected'
import BorderStyleSelected  from '@/components/indicator/BorderStyleSelected/Selected'
import AutoWxListPresenter from '@/auto/AutoWxAppList/Presenter'
// import AutoPageListPresenter from '@/auto/AutoPageList/Presenter'
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'

import RightIconIndicatorDefault from '@/pages/DomeCart/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/pages/DomeCart/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/pages/DomeCart/RightIconIndicatorSelected';

import ResponseDefault from '@/components/indicator/Response/Default';
import ResponseSelected from '@/components/indicator/Response/Selected';

import OnDeleteIndicator from '@/components/indicator/OnDeleteIndicator'


//  --CartConfig
import { Cart, Circle,HightlightCart,HoverShadowCart,Rectangle,Round,SelectCart} from 'zero-element-boot/lib/components/cart/';


//selector
import DefaultSelector from '@/components/selector/DefaultSelector';



//list
import GroupedList from '@/components/list/GroupedList';


// NamedCartSet({
//   Cart
// })
// NamedLayoutSet({
//   Flexbox,
//   Wrap
// })
NamedIndicatorSet({

  RightIconIndicatorDefault,
  RightIconIndicatorHover,
  RightIconIndicatorSelected,
  Cart,
  Circle,
  HightlightCart,
  HoverShadowCart,
  Rectangle,
  Round,
  SelectCart,
  CircularCheckboxIndicatorDefault,
  ShadowIndicator,
  CircularCheckboxIndicatorSelected,
  BingUnderBarSelectedDefault,
  BingUnderBarSelected,
  BorderStyleSelectedDefault,
  BorderStyleSelected,
  ResponseDefault,
  ResponseSelected,
  OnDeleteIndicator
})

NamedPresenterSet({
  NamedCartIPH,
  CartIPH,
  DomeCartList,
  PatternCart,
  ContentCart,
  ContentTest,
  AutoWxListPresenter,
  ItemPlaceholder,
  TestAutoLayout,
  AutoCartSet,
  AutoSelectSetPresenter,
  Rectangle,
  Round,
  HightlightCart,
  HoverShadowCart,
  Circle,
  OnDeleteIndicator

})

NamedCartConfig({
  Cart,
  Circle,
  HightlightCart,
  HoverShadowCart,
  Rectangle,
  Round,
  SelectCart,
  ItemPlaceholder,
  DefaultSelector,
  OnDeleteIndicator
 
})


NamedListConfig({
  GroupedList
})
// FormItemTypeSet({
//   "input": InputCompx,
//   "select-fetch": SelectFetch

// })