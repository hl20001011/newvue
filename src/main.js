import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/gobal.css";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/fonts/iconfont.css";
//导入轮播图 样式
import "./assets/css/swiper-bundle.min.css";
import "./assets/js/swiper-bundle.min";

Vue.config.productionTip = false;
//事件总线
Vue.prototype.$bus = new Vue();

Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
