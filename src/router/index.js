import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import ChooseTime from '../components/ChooseTime.vue'
import Faqs from '../views/Faqs.vue'
import PasswordReminder from '../views/PasswordReminder.vue'



Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
// 重写了原型上的push方法，统一的处理了错误信息
// 解决了路由跳转到相同页面时抛出的错误
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/* const routes = new Router
  routes: [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/chooseTime', component: ChooseTime},
  { path: '/faqs', component: Faqs},
  { path: '/passwordReminder', component: PasswordReminder}
] */

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/chooseTime', component: ChooseTime},
    { path: '/faqs', component: Faqs},
    { path: '/passwordReminder', component: PasswordReminder}
  ]
})

//挂载路由导航守卫
/* router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  // 两种 1.next() 放行 2.next('/login) 强制跳转

  if(to.path ==='/login'){
    return next();//如果要访问登录页，直接放行
  }
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token 强制跳转到登录页
  if(!tokenStr) return next('/login')
  next()
}) */


export default router
