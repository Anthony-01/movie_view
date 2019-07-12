import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexHeaderPic from '@/components/IndexHeaderPic'
import MovieList from '@/pages/moviesList'
import MovieDetail from '@/pages/movieDetail'
import ArticleDetail from '@/pages/articleDetail'
import LoginPage from '@/pages/loginPage'
import RegisterPage from '@/pages/registerPage'
import UserPage from '@/pages/userDetail'

Vue.use(Router)
Vue.use(VueResource)

//使用守卫以及钩子
//守卫 router.beforeEach

var router =  new Router({ 
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        title: 'home'
      }
    },
    {
      path: '/movieList',
      component: MovieList
    }, 
    {
      path: '/movieDetail',
      component: MovieDetail
    }, 
    {
      path: '/articleDetail',
      component: ArticleDetail
    },
    {
      path: '/loginPage',
      component: LoginPage
    },
    {
      path: '/registerPage',
      component: RegisterPage
    },
    {
      path: '/userPage',
      component: UserPage
    }
  ]
})

//全局守卫
router.beforeEach((to, from, next) => {
  console.log("全局守卫")
  console.log("目标路由", to);
  console.log("前置路由", from);
  next();
})
//全局解析守卫,confirmeded之前
router.beforeResolve((to, from, next) => {
  console.log("解析守卫")
  console.log("目标路由", to);
  console.log("前置路由", from);
  next();
})
//全局后置钩子
router.afterEach((to, from) => {
  console.log("后置钩子")
  console.log("目标路由", to);
  console.log("前置路由", from);
})

export default router;


