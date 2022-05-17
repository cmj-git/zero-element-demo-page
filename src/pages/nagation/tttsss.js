function _extends () { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

import { AutoLayout } from 'zero-element-boot';
import layout from '../nagation/layout'
import { Page } from 'zero-element-boot/lib/components/cart'
const promiseAjax = require('zero-element-boot/lib/components/utils/request');
import TabsCompox from 'zero-element-boot/lib/composition/testCrudList/compx/tabsComps';

export default function index (props) {

  const { } = props;

  const [listData, setListData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [switchStatus, setSwitchStatus] = useState(false)
  const [navCateListData, setNavCateListData] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);



  let api = '/api/pub/data/services/navigation';
  let navListApi = '/api/pub/data/services/navigation';
  let navApi = '/api/pub/data/services/navCategory';
  useEffect(() => {
    console.log('首次加载')
    const queryData = {}
    fetchData(api, queryData)
    fetchNavCategoryData(navApi, {});
  }, []);

  useEffect(() => {

  }, []);

  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  if (layoutJsonPath) {
    layoutData = { path: layoutJsonPath };
  } else {
    layoutData = localLayoutJson;
  }
  const config = {
    items: listData,
    layout: layoutData
  };


  //获取分类列表信息

  const fetchNavCategoryData = (api, queryData) => {
    setLoading(true);
    let newNavCateList = [];
    return promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        newNavCateList = resp.data.records; //-1:新增  -2删除

        newNavCateList.push({
          id: '-1'
        });
        newNavCateList.push({
          id: '-2'
        });
        setNavCateListData(newNavCateList);
        setLoading(false);
      } else {
        console.error('获取列表数据失败 ==', resp);
      }
    }).finally(_ => {
      setLoading(false);
      setTabIndex(newNavCateList[0].id);
      fetchData(navListApi, {
        typeId: newNavCateList[0].id
      });
    });
  };
  // </Page>
  //获取列表信息
  const fetchData = (api, queryData) => {
    setLoading(true)
    return promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        const list = resp.data.records;
        setListData(list);
        setLoading(false)
      } else {
        console.error('获取列表数据失败 ==', resp)
      }
    });
  }

  //
  const onUserItemClick = (item) => {
    const id = item.id;
    console.log('id = ', id)
    // alert(`选择的用户id为: ${id}`)
    //点击跳转页面
    if (item.path.indexOf('http') != -1) {
      // window.location.replace(item.path)

      // history.push(url);
      const w = window.open('about:blank');
      w.location.href = item.path
      console.log(item.path);

    } else {
      const w = window.open('about:blank');
      w.location.href = location.host + item.path

      console.log(location.host);

    }

  }
  const onNavItemClick = item => {
    const id = item.id;
    console.log('id = ', id);
    alert(`选择的用户id为: ${id}`);
  }; //列表item回调函数

  //回调函数
  const callback = value => {
    if (value) {
      const queryData = {
        typeId: tabIndex
      };
      fetchData(navListApi, queryData);
    }
  }; //列表item回调函数

  const tabscallback = value => {
    if (value) {
      setNavCateListData([]);
      setListData([]);
      fetchNavCategoryData(navApi, {});
    }
  }; //开启/关闭 编辑按钮




  const handleChange = () => {
    const status = !switchStatus;
    setSwitchStatus(status)
    if (!status) {
      setNavCateListData([]);
      setListData([]);
      fetchNavCategoryData(navApi, {});
    }
  }

  const switchTab = (item, index) => {
    if (index != tabIndex) {
      setTabIndex(index);
      const queryData = {
        typeId: item.id
      };
      fetchData(navListApi, queryData);
    }
  };

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '600px'
    }
  }, /*#__PURE__*/React.createElement(VStack, {
    align: "stretch",
    spacing: "-2"
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      margin: '10px 10px 30px 10px',
      paddingLeft: '8px'
    }
  }, /*#__PURE__*/React.createElement(FormControl, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "email-alerts",
    mb: "0"
  }, "\u7F16\u8F91\u5F00\u5173\uFF1A"), /*#__PURE__*/React.createElement(Switch, {
    isFocusable: true,
    size: "lg",
    onChange: () => handleChange(),
    isChecked: switchStatus
  }))),


  /*#__PURE__*/React.createElement(Box, null, navCateListData && navCateListData.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/
    
        React.createElement(TabsCompox, {
    items: navCateListData,
    onSwitchTab: switchTab,
    isSwtich: switchStatus,
    cb: tabscallback


  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onNavItemClick,
    cb: callback,
    isSwtich: switchStatus
  }))))) : null)
  
  
  
  )));

}