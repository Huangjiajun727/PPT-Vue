import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const home = r => require.ensure([], () => r(require('../components/home')), 'home');
const text = r => require.ensure([], () => r(require('../components/right-text')), 'text');
const textImg = r => require.ensure([], () => r(require('../components/right-textImg')), 'textImg');
const video = r => require.ensure([], () => r(require('../components/right-video')), 'video');

export default new Router({
  routes: [
    //默认跳转路由
    {
      path: '',
      redirect: '/textImg',
    },
    //首页城市列表页
    {
      path: '/home',
      component: home,
      children: [
        {
        path: '/text',
        component: text,
        },
        {
          path: '/textImg',
          component: textImg,
        },
        {
          path: '/video',
          component: video,
        }
      ]
    }
  ]
})
