
import {  NamedCart, APIContainer } from 'zero-element-boot';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter';



export default function TestAPI(props) {

return(


<APIContainer API='http://app1.console.smallsaas.cn:8001/openapi/lc/cart/Cart' extend={true}> 

     <NamedCart cart="Cart" >
       <ItemPlaceholder  />
       
     </NamedCart>
     
     

 </APIContainer> 
  )
}