
module.exports = {
  xname: 'Gridbox',
  props: {
    columns: 2
  },
  
  // cart: {
  //   xname: 'Cart',
  //   props: {
  //     // padding: '16px',
  //     margin: '0',
  //     corner: 0,
  //     linewidth: '0',
  //     padding: '0px 0px',
  //     margin:'0px',
  //     isOnHover: false
  //   }
  // },
  // defaultIndicator: "RightIconCheckboxDefauct", //默认样式
    // indicator: "RightIconCheckboxSelect",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
  	// selector: 'RightIconCheckboxSelected',  // select时用，第一次向子组件转递时，更名为 selectedIndicator

  container: 'PlainList',
  
  presenter: 'DomeCartList'
  
}