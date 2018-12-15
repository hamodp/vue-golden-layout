import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
export const letters = 'abcdef';

/**
 * the routes below are apart of the default vue-cli project
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
];

/**
 * routes added below are meant to test out the vue-golden-layout library
 */
for(let l of letters){
  let L = l.toUpperCase();
  routes.push({
    name: `r-${l}`,
    path: `/${l}`,
    component: {template: `<p>test-${L}`},
    meta: {title: `${L}-test`}
  });
}


export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.use(Router);