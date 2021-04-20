import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/login/Login.vue"
import index from "../components/index/index.vue"
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/login'
    },//路由重定向
    {
      path:'/login',
      component: Login
    },
    {
      path:'/index',
      component: index
    }
  ]
})
// //挂再导航守卫
// router.beforeEach((to,from,next)=>{
// //to将要访问的路径
// //from代表从哪个路径跳转而来
// //next是一个函数，表示放行
// //  next():放行   next('/login')：强制跳转到那个页面
// if(to.path==='login') return next();//如果用户访问的不是登录页，是一个有权限的页面则需要获取token
// //再判断是否有token，再决定是否强制跳转
// const tokenStr=window.sessionStorage.getItem('token')
// //如果没有token，强制跳转到登录页
// if(!tokenStr) return next('/login');
// //存在就放行
// next()

// })
//暴露路由 router
export default router
