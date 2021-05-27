import Vue from "vue";
import VueRouter from "vue-router";

//路由懒加载
const Login = () => import("../components/Login.vue");
const Resister = () => import("../components/Zhuce.vue");
const Home = () => import("../components/Home.vue");
const Miaosha = () => import("../components/Miaosha.vue");
const DemoOne = () => import("../components/miaoshaChildren/DemoOne.vue");
const DemoTwo = () => import("../components/miaoshaChildren/DemoTwo.vue");
const DemoThree = () => import("../components/miaoshaChildren/DemoThree.vue");
const HomeDemo1 = () => import("../components/homeChildren/HomeDemo1.vue");
const HomeDemo2 = () => import("../components/homeChildren/HomeDemo2.vue");
const HomeDemo3 = () => import("../components/homeChildren/HomeDemo3.vue");

const HomeDemo4 = () => import("../components/homeChildren/HomeDemo4.vue");
const HomeDemo5 = () => import("../components/homeChildren/HomeDemo5.vue");
const HomeDemo6 = () => import("../components/homeChildren/HomeDemo6.vue");

const Shangou = () => import("../components/Shangou.vue");
const ShanOne = () => import("../components/shangouChildren/ShanOne.vue");
const Two = () => import("../components/shangouChildren/Two.vue");
const Three = () => import("../components/shangouChildren/Three.vue");
const Four = () => import("../components/shangouChildren/Four.vue");
const Five = () => import("../components/shangouChildren/Five.vue");
const Six = () => import("../components/shangouChildren/Six.vue");
const Shop = () => import("../components/Shopping.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/resister",
    component: Resister,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/jinxuan",
        component: HomeDemo1,
      },
      {
        path: "/xianfeng",
        component: HomeDemo2,
      },
      {
        path: "/youping",
        component: HomeDemo3,
      },
      {
        path: "/baihuo",
        component: HomeDemo4,
      },
      {
        path: "/daren",
        component: HomeDemo5,
      },
      {
        path: "/haowu",
        component: HomeDemo6,
      },
    ],
  },
  {
    path: "/miaosha",
    component: Miaosha,
    children: [
      // {
      //   path: "/",
      //   redirect: "/lxm",
      // },
      {
        path: "/lxm",
        component: DemoOne,
      },
      {
        path: "/tejia",
        component: DemoTwo,
      },
      {
        path: "/pinglei",
        component: DemoThree,
      },
    ],
  },
  {
    path: "/shangou",
    component: Shangou,
    children: [
      {
        path: "/shanxin",
        component: ShanOne,
      },
      {
        path: "/two",
        component: Two,
      },
      {
        path: "/three",
        component: Three,
      },
      {
        path: "/four",
        component: Four,
      },
      {
        path: "/five",
        component: Five,
      },
      {
        path: "/six",
        component: Six,
      },
    ],
  },
  {
    path: "/shopping",
    component: Shop,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
