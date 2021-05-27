<template>
  <div class="login">
    <div class="login-box">
      <div class="login-select">
        <div @click="saoma" :class="[isShow == false ? 'sao' : '']">
          扫码登录
        </div>
        <div @click="zhanhao" :class="[isShow == true ? 'sao' : '']">
          账号登录
        </div>
      </div>
      <div class="xian"></div>
      <!-- 账号表单区 -->
      <div class="login-from" v-if="isShow">
        <el-form :model="loginRuleForm" ref="FormLoginRef">
          <el-form-item prop="username">
            <el-input
              v-model="loginRuleForm.username"
              prefix-icon="iconfont icon-user"
              placeholder="邮箱/用户名/手机号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :type="type"
              v-model="loginRuleForm.password"
              prefix-icon="iconfont icon-lock_fill"
              placeholder="密码"
            ></el-input>
            <div @click="showTuBiaoLogin">
              <img
                src="../assets/img/imgs1/yanjin1.png"
                alt=""
                v-if="!showPsaaword"
              />
              <img src="../assets/img/imgs1/yanjin2.png" alt="" v-else />
            </div>
          </el-form-item>
        </el-form>
        <div class="remind">
          <a href="#" @click="recall">忘记密码</a>
        </div>
        <!-- 点击登录 -->
        <el-button type="danger" class="btn" @click="clickLogin">
          登录</el-button
        >
      </div>
      <!-- 扫码区 -->
      <div v-else class="saoma">
        <img src="../assets/img/erweima.jpg" alt="" />
        <p>扫描二维码</p>
      </div>
      <!-- 底部栏区 -->
      <div class="tbbar">
        <div>
          <a href="https://im.qq.com/index">
            <b></b>
            <span>QQ</span>
          </a>
          <span class="line">|</span>

          <a href="https://wx.qq.com/">
            <b></b>
            <span>微信</span>
          </a>
        </div>
        <div class="resister">
          <a href="/resister">立即注册</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      //账号 扫码 切换
      isShow: true,
      //存放注册传过来的数据
      resisterFrom: {
        username: "",
        password: "",
        repassword: "",
      },

      //表单内容
      loginRuleForm: {
        username: "",
        password: "",
      },
      //密码显示与隐藏
      showPsaaword: false,
      type: "password",
      //表单校验
      // LoginRules: {
      //   username: [
      //     { required: true, message: "请输入用户名", trigger: "blur" },
      //     { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
      //   ],
      //   password: [
      //     { required: true, message: "请输入密码", trigger: "blur" },
      //     { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
      //   ],
      // },
    };
  },
  computed: {
    //获取vuex中的数据
    vuexLogin() {
      this.resisterFrom = this.$store.state.resisterRuleForm;
    },
  },
  methods: {
    //账号 扫码切换
    saoma() {
      this.isShow = false;
      // console.log(this.loginRuleForm);

      // console.log(this.resisterFrom);
    },

    zhanhao() {
      this.isShow = true;
    },
    //点击登录
    clickLogin() {
      this.vuexLogin;
      if (
        this.loginRuleForm.username == this.resisterFrom.username &&
        this.loginRuleForm.password == this.resisterFrom.password
      ) {
        this.$message.success("登录成功");
        this.$router.push("/home");
      } else {
        this.$message.error("请正确输入用户名或密码");
      }
    },

    //忘记密码
    recall() {
      this.$message.warning("功能待完善中！");
    },
    //点击密码显示 隐藏
    showTuBiaoLogin() {
      this.showPsaaword = !this.showPsaaword;
      if (this.showPsaaword) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>
<style scoped>
.login {
  min-width: 1000px;
  width: 100%;
  height: 610px;
  background: url("../assets/img/login/l1.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.login-box {
  position: relative;
  width: 346px;
  height: 360px;
  background-color: white;
  margin-top: 120px;
  margin-left: 120px;
  overflow: hidden;
}
.login-select {
  margin-top: 20px;
  width: 100%;
  height: 55px;
  font-size: 18px;
  display: flex;
  line-height: 55px;
  justify-content: space-around;
}
.login-select div {
  cursor: pointer;
}
.login-select div:hover {
  color: red;
}
.xian {
  width: 100%;
  height: 30px;
}
.login-from {
  width: 100%;
  height: 192px;
  /* background-color: red; */
}
.el-form {
  width: 100%;
}
.el-form-item {
  width: 90%;
  margin-left: 5%;
  position: relative;
}
.el-form-item img {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 14px;
  width: 13px;
  height: 13px;
}
.remind a:first-child {
  color: #666;
  font-size: 10px;
  margin-left: 280px;
  text-decoration: none;
}
.remind a:first-child:hover {
  color: blue;
}
.btn {
  margin-top: 15px;
  width: 80%;
  margin-left: 10%;
}
.tbbar {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 51px;
  background-color: #fcfcfc;
  padding-left: 16px;
}
.tbbar div:first-child {
  display: flex;
  margin-top: 20px;
}
.tbbar a {
  color: #666;
  text-decoration: none;
  font-size: 10px;
  display: flex;
}
.tbbar a:first-child b {
  width: 19px;
  height: 18px;
  display: block;
  background: url("../assets/img/QQ-weixin.png") no-repeat;
  background-position: 0 0;
  background-size: 37px;
}
.line {
  color: #ccc;
  padding: 0 10px;
  font-size: 5px;
}
.tbbar a:nth-of-type(2) b {
  width: 19px;
  height: 18px;
  display: block;
  background: url("../assets/img/QQ-weixin.png") no-repeat;
  background-position: -19px 0;
  background-size: 37px;
}
.tbbar div:nth-of-type(2) a {
  font-size: 14px;
  color: #b61d1d;
  margin-top: 18px;
  margin-left: 145px;
}
.sao {
  color: red;
}
.saoma {
  margin: -35px 67px 0;
}
.saoma img {
  width: 200px;
  height: 200px;
  animation: move 1s;
}
.saoma p {
  margin: 0 60px;
}
@keyframes move {
  0% {
    transform: rotate(0deg) scale(0);
  }

  10% {
    transform: rotate(36deg) scale(0.1);
  }
  20% {
    transform: rotate(72deg) scale(0.2);
  }
  30% {
    transform: rotate(108deg) scale(0.3);
  }
  40% {
    transform: rotate(144deg) scale(0.4);
  }
  50% {
    transform: rotate(180deg) scale(0.5);
  }
  60% {
    transform: rotate(216deg) scale(0.6);
  }
  70% {
    transform: rotate(252deg) scale(0.7);
  }
  80% {
    transform: rotate(288deg) scale(0.8);
  }
  90% {
    transform: rotate(326deg) scale(0.9);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
