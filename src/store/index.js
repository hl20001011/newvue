import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //注册内容
    resisterRuleForm: {
      username: "admin",
      password: "12345",
      repassword: "",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
