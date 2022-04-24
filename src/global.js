// import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedIndicatorSet } from 'zero-element-boot/lib/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/components/config/NamedPresenterConfig';


// //cart
// import Cart from 'zero-element-boot/lib/components/cart/Cart';

//indicator
//layout



import helloworld from '@/pages/helloworld'

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
  helloworld,
  JarItem,
})

