// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { Checkbox } from '@chakra-ui/react'
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
<<<<<<< HEAD
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
// import {set as Cart} from 'zero-element-boot/lib/components/cart/Cart';
=======
// import { set as FormItemTypeSet } from 'zero-element-boot/lib/components/config/formItemTypeConfig';
>>>>>>> 61ed4f4fbddcd45847aa5ca782cb2dfa384a0b69

import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';
if (process.env.NODE_ENV == 'development') {

  setEndpoint('http://demo.smallsaas.cn:80');
  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTMyNjk5NjUsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzUyOTE2NX0.ZPMarJAXXzdbiVrbwKdCPO096BOyHgAzHlS-L29NdMxaCgt7YMuxvUZfSO3PYHRqRl8-q82duvn5n3XnQ4jDiA')
}

//presenter
import JarItem from '@/pages/Standalone/JarItem';

// import SelectFetch from '@/pages/SelectFetch';

<<<<<<< HEAD
// NamedCartSet({
//   Cart
// })

// NamedLayoutSet({
//   Flexbox,
//   Wrap
// })
=======
>>>>>>> 61ed4f4fbddcd45847aa5ca782cb2dfa384a0b69
NamedIndicatorSet({

})

NamedPresenterSet({
  JarItem,
  Checkbox
})

// FormItemTypeSet({
//   "Select-fetch1": SelectFetch
// })