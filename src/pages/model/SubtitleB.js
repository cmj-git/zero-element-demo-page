import React from 'react';
import { Code, Tag } from '@chakra-ui/react'
import Cart from 'zero-element-boot/lib/components/cart/Cart'
export default function (props) {

  const { contentTxt } = props;

  return <Tag > <div style={{ fontSize: '18px', color: "#073763", }}>{contentTxt}</div></Tag>
}