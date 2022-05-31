import React from 'react';
import { Code, Tag } from '@chakra-ui/react'
export default function (props) {

  const { contentTxt } = props;

  return <Tag > <div style={{ fontSize: '16px', color: "#073763", }}>{contentTxt}</div></Tag>


}