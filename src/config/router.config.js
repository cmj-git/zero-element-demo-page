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
<<<<<<< HEAD
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

=======
// import index from "@/pages"


// routes: [
//   { path: '/index', component: 'index' },
//   {
//     path: '/',
//     component: '@/layouts/index',
//     routes: [
//       { path: '/list', component: 'list' },
//       { path: '/admin', component: 'admin' },
//     ],
//   },
// ]
export default {
  routes: [
    { exact: true, path: '/', component: 'index' },
    { exact: true, path: '/user', component: 'user' },
  ],
}
>>>>>>> 9613a87 (logs)
