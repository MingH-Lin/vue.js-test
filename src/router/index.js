import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     },
//     {
//       path: '/test',
//       name: 'Test',
//       component: () => import('../views/Test.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                breadcrumb: [{
                    name: 'index'
                }]
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue'),
            meta: {
                breadcrumb: [{
                    name: 'index',
                    link: 'home'
                },
                    {
                        name: 'About'
                }]
            }
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/Test.vue'),
            meta: {
                breadcrumb: [{
                    name: 'index',
                    link: 'home'
                },
                {
                    name: 'Test'
                }]
            }
        },
        {
            path: '/star',
            name: 'star',
            component: () => import('../views/Star.vue'),
            meta: {
                breadcrumb: [{
                    name: 'index',
                    link: 'home'
                },
                {
                    name: 'Star'
                }]
            }
        },
    ]
})
