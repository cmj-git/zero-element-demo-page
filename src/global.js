// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { set as NamedCartConfig } from 'zero-element-boot/lib/components/config/NamedCartConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
import CheckBoxIndicatorCart from 'zero-element-boot/lib/components/indicator/CheckBoxIndicatorCart';




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
import DomeCartList from '@/pages/DomeCart/index';

import { Cart, Circle,HightlightCart,HoverShadowCart,Shape,Rectangle,Round} from 'zero-element-boot/lib/components/cart/';

// import RightIconCheckboxSelect from '@/pages/RightIconCheckboxIndicator/Select';
// import RightIconCheckboxSelected from '@/pages/RightIconCheckboxIndicator/Selected';
// import RightIconCheckboxDefauct from '@/pages/RightIconCheckboxIndicator/Defauct';



// NamedCartSet({
//   Cart
// })
// NamedLayoutSet({
//   Flexbox,
//   Wrap
// })
NamedIndicatorSet({
  CheckBoxIndicatorCart,
  // RightIconCheckboxSelect,
  // RightIconCheckboxSelected,
  // RightIconCheckboxDefauct

})

NamedPresenterSet({
  NamedCartIPH,
  CartIPH,
  DomeCartList,
  
})

NamedCartConfig({
  Cart,
  Circle,
  HightlightCart,
  HoverShadowCart,
  Shape,
  Rectangle,
  Round,
})

// FormItemTypeSet({
//   "input": InputCompx,
//   "select-fetch": SelectFetch
// })