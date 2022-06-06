// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { set as NamedCartConfig } from 'zero-element-boot/lib/components/config/NamedCartConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
import RightIconCheckboxIndicatorDefauct from 'zero-element-boot/lib/components/indicator/RightIconCheckboxIndicator/Defauct';
import RightIconCheckboxIndicatorSelect from 'zero-element-boot/lib/components/indicator/RightIconCheckboxIndicator/Select';
import RightIconCheckboxIndicatorSelected from 'zero-element-boot/lib/components/indicator/RightIconCheckboxIndicator/Selected';


// import RightIconCheckboxIndicatorSelected from 'zero-element-boot/lib/components/indicator/RightIconCheckboxIndicator/Selected';
import SelectIndicatorCart from 'zero-element-boot/lib/components/indicator/SelectIndicatorCart';
import SelectedCartRightIcon from 'zero-element-boot/lib/components/indicator/SelectedCartRightIcon';
import SelectedCartUpperRightIcon from 'zero-element-boot/lib/components/indicator/SelectedCartUpperRightIcon';


import RightIconIndicatorDefault from '@/pages/DomeCart/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/pages/DomeCart/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/pages/DomeCart/RightIconIndicatorSelected';




if (process.env.NODE_ENV == 'development') {

  // setEndpoint('http://demo.smallsaas.cn:8001');
  //  setEndpoint('http://app1.console.smallsaas.cn:8001');

  
  //  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTMzODM1ODcsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzY0Mjc4N30.ANPz7GhGbsopZEIfSEpfOANBYrTRxkeltty-fKo18c96hex7zyFdQFeLvLo49_caWkhn5gPeH_o9FmwVrDjIAQ')
}

//presente
// import Holders from '@/pages/ItemPlaceholder';
// import Holder from '@/pages/CartItemPlaceholder';
import CartIPH from '@/pages/CartItemPlaceholder';
import NamedCartIPH from '@/pages/NamedCartItemPlaceholder';
import DomeCartList from '@/pages/DomeCart/DomeCartList/DomeCartList';
import PatternCart from '@/pages/DomeCart/PatternCart/PatternCart';
import ContentCart from '@/pages/DomeCart/ContentCart/ContentCart/ContentCart';
import ContentTest from '@/pages/DomeCart/ContentCart/ContentTest/ContentTest';





 



import { Cart, Circle,HightlightCart,HoverShadowCart,Rectangle,Round,SelectCart} from 'zero-element-boot/lib/components/cart/';



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
  RightIconIndicatorSelected

})

NamedPresenterSet({
  NamedCartIPH,
  CartIPH,
  DomeCartList,
  PatternCart,
  ContentCart,
  ContentTest,

})

NamedCartConfig({
  Cart,
  Circle,
  HightlightCart,
  HoverShadowCart,
  Rectangle,
  Round,
  SelectCart,
 

 
})

// FormItemTypeSet({
//   "input": InputCompx,
//   "select-fetch": SelectFetch

// })