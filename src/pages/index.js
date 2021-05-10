import * as React from 'react';

import PlainListDemo from './Demo/PlainListDemo';
import AdItemDemo from './Demo/AdItemDemo';

import TestUserSelectionDemo from './TestUserSelectionDemo';
import IsValidElementTest from './Test/IsValidElementTest'
import UserItemDemo from './Demo/UserItemDemo'

import AdListDemo from '@/composition/AdList/Sandbox';
import ComponentListDemo from '@/pages/ComponentListDemo';
import TheTest from '@/pages/TheTest'
import PresenterTestDemo from '@/pages/PresenterTestDemo/Sandbox';
import CheckboxDemo from '@/pages/CheckboxDemo/Sandbox';

export default function index(props) {

  function onItemClickHandle (data) {
    // console.log('data = ', data)
  }

  //<TestUserSelectionDemo />
  // <AdListDemo onItemClickHandle={onItemClickHandle} />
  //<AdItemDemo/>
  
  return <AdListDemo onItemClickHandle={onItemClickHandle}/>;
}
