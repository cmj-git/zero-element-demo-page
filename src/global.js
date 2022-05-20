// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';

if (process.env.NODE_ENV == 'development') {

  setEndpoint('http://demo.smallsaas.cn:8001');
  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTI5NDc5NTEsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzIwNzE1MX0.HlAtQPZe3pjo5bDsbZB4p5jJPgfG-1RTcxHhE53KtODX3sm5oY40OFstVErsh95fxPbq5QtZYZfd1uxksPm0ZA')
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