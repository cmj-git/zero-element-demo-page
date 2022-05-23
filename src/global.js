// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
// import {set as Cart} from 'zero-element-boot/lib/components/cart/Cart';

if (process.env.NODE_ENV == 'development') {

  setEndpoint('http://demo.smallsaas.cn:8001');
  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTI2ODc4NTEsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1Mjk0NzA1MX0.FlSIphIUscRyoQtZT9bDSj_OQJmxHcWDg4gY9tctVpQs9gBtAziUhDui8rez4ZECCWHf1MOVdEKB_foNyQLv4Q')
}

//presenter
import JarItem from '@/pages/Standalone/JarItem';


// NamedCartSet({
//   Cart
// })

// NamedLayoutSet({
//   Flexbox,
//   Wrap
// })
NamedIndicatorSet({

})

NamedPresenterSet({
  JarItem,
})

// FormItemTypeSet({
//   "input": InputCompx,
//   "select-fetch": SelectFetch
// })