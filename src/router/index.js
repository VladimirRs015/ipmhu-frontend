
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//Modules 
import authRoutes from './public_routes/sessionsRoutes'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  ...authRoutes,
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
// router.beforeEach((to,from,next)=>{
//   console.log($store.state.auth.logged)
//   if(to.meta.justNoLogged){
//     if(!$store.state.auth.logged){
//       return next()
//     }
//     return next({name : 'Home'})
//   }
//   next();
// })
// scrollBehavior(to,from,savedPosition){
//   const position = {}
//   console.log(to,from,savedPosition)
//   if(to.hash){
//     position.selector = to.hash
//   }
//   else if(to.position){
//     position.x = to.position.x
//     position.y = to.position.y
//   }
//   return position ; 
// }
export default router
