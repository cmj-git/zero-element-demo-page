// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';
import { setEndpoint, setToken } from 'zero-element-boot/lib/components/config/common';

if (process.env.NODE_ENV == 'development') {
  setEndpoint('http://demo.smallsaas.cn:8001');
  // setToken('')
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