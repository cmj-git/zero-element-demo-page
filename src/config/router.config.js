// module.exports =
//   [
//     {
//         name: 'index',
//         path: '',
//         children: [{
//             name: '子页面',
//             path: 'child'
//         }]
//     }
//   ]
import index from "@/pages/index"


routes: [
  { path: '/index', component: 'index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/list', component: 'list' },
      { path: '/admin', component: 'admin' },
    ],
  },
]

