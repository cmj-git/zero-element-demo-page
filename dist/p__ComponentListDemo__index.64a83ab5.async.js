(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10,7,8,9],{BSwg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("0Owb"),o=n("q1tI"),r=n.n(o),i=n("Kvkj"),c=n("y4pB"),l=n("mR5c");n("a/qM");function s(e){e.onItemClickHandle;var t="/api/componentList",n={API:t,layout:c},o=e=>{};return r.a.createElement("div",{style:{width:"1250px"}},r.a.createElement(i["AutoLayout"],Object(a["a"])({},n,{onItemClick:o}),r.a.createElement(l["default"],null)))}},CJda:function(e,t,n){},"a/qM":function(e,t){e.exports=function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o.method,i=void 0===r?"GET":r,c=o.async,l=void 0===c||c,s=o.token;return"GET"===i?t="?".concat(Object.keys(a).map((e=>"".concat(e,"=").concat(a[e]))).join("&")):n=a,new Promise(((a,o)=>{var r=new XMLHttpRequest;r.open(i,"".concat(e).concat(t),l),s&&r.setRequestHeader("Authorization","Bearer ".concat(s)),r.responseType="JSON",r.onreadystatechange=()=>{var e;if(4===r.readyState)if(4===r.readyState&&200===r.status)try{e=JSON.parse(r.responseText),a(e)}catch(t){o("\u8fd4\u56de\u7684\u6570\u636e\u975e json \u683c\u5f0f")}else o(r.statusText)},r.onerror=e=>{o(e)},r.send(n)}))}},jN2C:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("0Owb"),o=n("q1tI"),r=n.n(o),i=n("Kvkj"),c=n("+FTS"),l=n("tiX6");function s(e){var t=e.componentName,n=e.records,o=(e.onItemClicklist,{items:n.length>0?n:[],layout:c}),s=e=>{},m=e=>{console.log(" III onChildItemClick name = ",e.name),console.log(" III onChildItemClick pathUrl = ",e.pathUrl),console.log(" III onChildItemClick imageUrl = ",e.imageUrl)};function u(e){console.log("componentName = ",e)}return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},t),r.a.createElement(i["AutoLayout"],Object(a["a"])({},o,{onItemClick:s}),r.a.createElement(l["default"],{onListItemClick:m})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"bt",onClick:()=>u(t)},"\u5207\u6362")))}n("CJda")},mR5c:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("0Owb"),o=n("k1fw"),r=n("q1tI"),i=n.n(r),c=n("jN2C"),l=n("M0V9");function s(e){var t={LayoutList:c["default"]},n=Object(o["a"])({layout:{xname:"Flexbox",props:{align:"start",direction:"row",justify:"center"},children:[{presenter:"LayoutList",gateway:{xname:"Binding",props:{binding:{componentName:"componentName",records:"records"}}}}]}},e);return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,Object(a["a"])({},n,{allComponents:t})))}},tiX6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("0Owb"),o=n("k1fw"),r=n("q1tI"),i=n.n(r),c=n("M0V9"),l=n("KwFt"),s=l.ImageAnimation,m=l.Title;function u(e){var t=e.onListItemClick,n={ImageAnimation:s,Title:m},r=Object(o["a"])({layout:{xname:"Itembox",props:{align:"start",direction:"column",justify:"center"},children:[{presenter:"ImageAnimation",gateway:{xname:"Binding",props:{binding:{imageUrl:"imgUrl"}}}},{presenter:"Title",gateway:{xname:"Binding",props:{binding:{name:"TitleText"}}}}]}},e);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,Object(a["a"])({},r,{allComponents:n,onItemClick:t})))}}}]);