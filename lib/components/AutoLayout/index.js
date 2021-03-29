function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useSize } from 'ahooks';

const React = require('react');

import { useState, useEffect } from 'react';

const {
  NamedContainer,
  NamedLayout,
  NamedGateway,
  NamedCart
} = require("./..");

const DefaultContainer = require("../container/Container");

const AutoComponent = require("../AutoComponent");

import fetchLayout from "../../utils/fetchLayout"; // change history
//CR.2020-12-26 init
//CR.2020-12-29 add Container
//CR.2021-01-13 merge AutoComponent and AutoLayout
// 2021-3-25 新增通过 fetch 获取 layoutJson 配置信息

export default function (props) {
  const {
    localLayoutJsonPath = ''
  } = props;
  const [layoutJson, setLayoutJson] = useState('');
  const [firstRequest, setFirstRequest] = useState(0);
  useEffect(() => {
    if (firstRequest == 0 && localLayoutJsonPath != '') {
      fetchLayout(localLayoutJsonPath, setJsonObject);
      setFirstRequest(1);
    }
  }, [layoutJson]);

  function setJsonObject(jsonValue) {
    setLayoutJson(jsonValue);
  }

  if (props.layout.children) {
    return AutoComponent(props);
  }

  return AutoLayout(props);
} // AutoLayout update history
// CR.增加处理选中的 (Cart=> indicator)
// when: 2021-03-24

function AutoLayout({
  children,
  layout,
  allComponents = {},
  onItemClick = () => {
    console.log('未设置onItemClick点击事件');
  },
  ...data
}) {
  // handle layout, for children in {layout
  const {
    xname,
    props,
    container,
    gateway,
    cart,
    indicator,
    presenter
  } = layout || {};

  const _cart = cart && typeof cart === 'string' ? {
    xname: cart
  } : cart;

  const _gateway = gateway && typeof gateway === 'string' ? {
    xname: gateway
  } : gateway; //  when: 2021-03-24


  const _indicator = indicator && typeof indicator === 'string' ? {
    xname: indicator
  } : indicator; // handle container


  const Container = container ? NamedContainer : DefaultContainer;

  const _container = (typeof container === 'string' ? {
    xname: container
  } : container) || {}; // if layout contains childrenData, means this is for auto component


  const Presenter = presenter ? allComponents[presenter] || tips(presenter) : null; // restLayout means layout props
  // child iterator from children contains: [name, span, width, gateway, cart, [,seperator]]
  // <NamedList name='PlainList' {...config} onItemClick={onClick}>
  //     <NamedLayout>
  //         <NamedGateway name='Gateway'>
  //             <NamedCart name='ItemCart' props={{padding: '12px'}}> 
  //                 <UserItem />
  //             </NamedCart>
  //         </NamedGateway>
  //     </NamedLayout>
  // </NamedList>

  return /*#__PURE__*/React.createElement(Container, _extends({}, _container, data, {
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props
  }, /*#__PURE__*/React.createElement(NamedGateway, _gateway, indicator ? /*#__PURE__*/React.createElement(NamedCart, _indicator, cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) // end indicator
  : cart ? /*#__PURE__*/React.createElement(NamedCart, _cart, presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children) //cart?
  )));
}
/**
 * 自动布局复合组件，自定义抽象参数如下说明
 * @param {*} props 
 * @param {布局} layout
 * @param {修饰} cart [shape, decorator, behavior, ...]
 * @param {分隔} seperator
 * @param {数据传递与绑定} gateway
 */


function _AutoLayout(config) {
  const {
    children,
    layout,
    allComponents = {},
    onItemClick = () => {
      console.log('未设置onItemClick点击事件');
    },
    items,
    ...data
  } = config; // handle layout, childrenData for children in {layout

  const {
    name,
    props,
    container,
    cart,
    gateway,
    presenter,
    ...childrenData
  } = layout || {};

  const _Container = container ? NamedContainer : Container;

  const containerProps = container && (typeof container === 'string' ? {
    name: container
  } : container) || {};
  const _cart = cart;
  const _gateway = gateway; /// check childrenData for layout or item data for each child
  //  layout children first

  const hasChildrenData = childrenData && childrenData.children && Array.isArray(childrenData.children) && childrenData.children.length > 0;

  const _children = hasChildrenData ? childrenData.children : items; // console.log('AutoLayout items=',items)
  // if layout contains childrenData, means this is for auto component


  const Presenter = hasChildrenData && presenter && (allComponents[presenter] || tips(presenter)) || React.Children.only(children); // console.log('allComponents=',allComponents,'Presenter=',Presenter )
  // restLayout means layout props
  // child iterator from children contains: [name, span, width, gateway, cart, [,seperator]]

  return /*#__PURE__*/React.createElement(_Container, _extends({}, containerProps, {
    items: items,
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(NamedLayout, {
    name: name,
    props: props
  }, _children.map((child, i) => {
    const {
      name,
      span,
      gateway,
      cart
    } = child;
    const C = allComponents[name] || Presenter || tips(name); //get gateway name, use default gateway if child has no gateway defined

    const __gateway = gateway ? gateway : _gateway;

    const gatewayName = __gateway ? typeof __gateway === 'string' ? __gateway : __gateway.name : 'Gateway';
    const gatewayProps = __gateway && __gateway.props || {}; //get cart name

    const __cart = cart ? cart : _cart;

    const cartName = __cart ? typeof __cart === 'string' ? __cart : __cart.name : '';
    const cartProps = __cart && __cart.props || {}; // each item has its Named Gateway
    // {*} data will send down to NamedCart and then NamedCart to Child Component

    return /*#__PURE__*/React.createElement(NamedGateway, _extends({
      key: i,
      name: gatewayName
    }, gatewayProps, data, {
      span: span
    }), cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i,
      name: cartName
    }, cartProps), /*#__PURE__*/React.createElement(C, null)) : /*#__PURE__*/React.createElement(C, null));
  })));
}

function tips(name) {
  return _ => `${name} 未定义`;
}