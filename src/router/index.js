import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import VideoCource from '@/pages/VideoCource'
import AudioCource from "@/pages/AudioCource"
import Type from '@/pages/Type'
import BookMark from "../pages/BookMark";
import Personal from "../pages/Personal";
import Trade from "../pages/Trade";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import Order from "../pages/Order";
import OrderDetail from "../pages/OrderDetail";
import Login from "../pages/Login";
import EditorPersonInfo from "../pages/EditorPersonInfo";
import Nickname from "../pages/Nickname";
import Search from "../pages/Search";
import Expert from "../pages/Expert";
import Income from "../pages/Income";
import Withdraw from "../pages/Withdraw";
import Vcode from "../pages/Vcode";
import ExpertInfo from "../pages/ExpertInfo";
import PayFinish from "../pages/PayFinish";
import Register from "../pages/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        barShow: true,
        index: 0,
        title: '星点微课'
      }
    },
    {
      path: '/VideoCource',
      name: 'VideoCource',
      component: VideoCource,
      meta: {
        title: '视频课程'
      }
    },
    {
      path: '/AudioCource',
      name: 'AudioCource',
      component: AudioCource,
      meta:{
        title: '音频课程'
      }
    },
    {
      path: '/Type',
      name: 'Type',
      component: Type,
      meta: {
        barShow: true,
        index: 1,
        title: '分类'
      }
    },
    {
      path: '/BookMark',
      name: 'BookMark',
      component: BookMark,
      meta: {
        barShow: true,
        index: 2,
        title: '学习'
      }
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
      meta: {
        barShow: true,
        index: 3,
        title: '我的'
      }
    },
    {
      path: '/Trade',
      name: 'Trade',
      component: Trade,
      meta:{
        title: '交易明细'
      }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta:{
        title: '关于我们'
      }
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback,
      meta:{
        title: '意见反馈'
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta:{
        title: '订单'
      }
    },
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail,
      meta:{
        title: '订单详情'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        title: '登录'
      }
    },
    {
      path: '/EditorPersonInfo',
      name: 'EditorPersonInfo',
      component: EditorPersonInfo,
      meta:{
        title: '编辑用户资料'
      }
    },
    {
      path: '/Nickname',
      name: 'Nickname',
      component: Nickname,
      meta:{
        title: '修改昵称'
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta:{
        title: '搜索'
      }
    },
    {
      path: '/Expert',
      name: 'Expert',
      component: Expert,
      meta:{
        title: '达人'
      }
    },
    {
      path: '/Income',
      name: 'Income',
      component: Income,
      meta:{
        title: '我的收入'
      }
    },
    {
      path: '/Withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta:{
        title: '提现'
      }
    },
    {
      path: '/Vcode',
      name: 'Vcode',
      component: Vcode,
      meta:{
        title: '输入验证码'
      }
    },
    {
      path: '/ExpertInfo',
      name: 'ExpertInfo',
      component: ExpertInfo,
      meta:{
        title: '达人资料'
      }
    },
    {
      path: '/PayFinish',
      name: 'PayFinish',
      component: PayFinish,
      meta:{
        title: '购买完成'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        title: '登录注册'
      }
    }
  ]
})
