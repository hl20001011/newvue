<template>
  <div class="resister">
    <div class="nav">
      <div class="navres">
        <div>
          <img src="../assets/img/6tu.png" alt="" />
          <i>欢迎注册 LXM</i>
        </div>
        <div>
          <span>已有账号?</span>
          <a href="/login">请登录 ></a>
        </div>
      </div>
    </div>
    <div class="shaw"></div>
    <div class="containter">
      <div class="stepProcess">
        <!-- :active="active" -->
        <el-steps
          :space="250"
          finish-status="success"
          align-center
          :active="active"
        >
          <el-step title="账号"></el-step>
          <el-step title="密码"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
      </div>
      <div class="resisFrom">
        <el-form
          :model="resisterRuleForm"
          :rules="resisterRules"
          ref="FormResisterRef"
        >
          <el-form-item prop="username">
            <el-input
              v-model="resisterRuleForm.username"
              prefix-icon="iconfont icon-users"
              placeholder="邮箱/用户名/手机号"
              ref="usernameRef"
              @blur.native.capture="blurUsername"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :type="type1"
              v-model="resisterRuleForm.password"
              prefix-icon="iconfont icon-lock_fill"
              placeholder="密码"
              @blur.native.capture="blurPassword"
              ref="passwordRef"
            >
            </el-input>
            <div @click="showTuBiao1">
              <img
                src="../assets/img/imgs1/yanjin1.png"
                alt=""
                v-if="!showPsaaword1"
              />
              <img src="../assets/img/imgs1/yanjin2.png" alt="" v-else />
            </div>
          </el-form-item>
          <el-form-item prop="repassword">
            <el-input
              :type="type2"
              v-model="resisterRuleForm.repassword"
              prefix-icon="iconfont icon-3702mima"
              placeholder="请重新输入密码"
              @blur.native.capture="blurRepassword"
              ref="repasswordRef"
            >
            </el-input>
            <div @click="showTuBiao2">
              <img
                src="../assets/img/imgs1/yanjin1.png"
                alt=""
                v-if="!showPsaaword2"
              />
              <img src="../assets/img/imgs1/yanjin2.png" alt="" v-else />
            </div>
          </el-form-item>
        </el-form>
        <el-button type="danger" class="btn" @click="resisterBtn">
          下一步</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Zhuce",
  data() {
    //确认密码校验
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.resisterRuleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //注册内容
      resisterRuleForm: {
        username: "",
        password: "",
        repassword: "",
      },
      //注册验证
      resisterRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
        repassword: [{ validator: validatePass2, trigger: "blur" }],
      },

      //步骤条 索引
      active: 0,
      //是否显示密码
      showPsaaword1: false,
      showPsaaword2: false,
      //输入框类型
      type1: "password",
      type2: "password",
    };
  },
  computed: {
    //注册修改vuex中的数据
    vuexText() {
      this.$store.state.resisterRuleForm = this.resisterRuleForm;
    },
  },
  methods: {
    //鼠标失去焦点时 验证用户名输入框
    blurUsername() {
      this.userVaild();
    },
    userVaild() {
      this.$refs.FormResisterRef.validateField("username", (valid) => {
        if (valid == "") {
          this.active = 1;
        } else {
          this.active = 0;
        }
        // console.log(valid);
      });
    },

    //鼠标失去焦点时  验证密码输入框
    blurPassword() {
      this.passValid();
    },
    passValid() {
      this.$refs.FormResisterRef.validateField("password", (valid) => {
        if (valid == "" && this.active == 1) {
          this.active = 2;
        } else if (this.active == 2) {
          this.active--;
        } else {
          this.active == this.active;
        }
        // console.log(valid);
      });
    },

    //鼠标失去焦点时 验证确认密码输入框
    blurRepassword() {
      this.rePassword();
    },
    rePassword() {
      this.$refs.FormResisterRef.validateField("repassword", (valid) => {
        if (valid == "" && this.active == 2) {
          this.active = 3;
        } else if (this.active == 3) {
          this.active--;
        } else {
          this.active = this.active;
        }
      });
    },
    //点击完成注册
    resisterBtn() {
      this.$refs.FormResisterRef.validate((valid) => {
        if (valid) {
          // this.$bus.$emit("resisterData", this.msg);
          this.vuexText;
          this.$message.success("注册成功!");
          setTimeout(() => {
            this.$router.push("/login");
            // console.log(this.resisterRuleForm);
          }, 1000);
        }
      });
    },
    //显示密码 与隐藏密码
    showTuBiao1() {
      this.showPsaaword1 = !this.showPsaaword1;
      if (this.showPsaaword1) {
        this.type1 = "text";
      } else {
        this.type1 = "password";
      }
    },
    showTuBiao2() {
      this.showPsaaword2 = !this.showPsaaword2;
      if (this.showPsaaword2) {
        this.type2 = "text";
      } else {
        this.type2 = "password";
      }
    },
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  padding: 0 50px;
  height: 110px;
}
.navres {
  width: 100%;
  height: 100%;
  position: relative;
}
.nav div:nth-of-type(1) {
  margin-top: 10px;
  font-size: 25px;
  font-weight: 400;
}
.nav img {
  width: 90px;
  height: 60px;
}
.nav div:nth-of-type(2) {
  right: 5px;
  bottom: 30px;
  position: absolute;
  font-size: 16px;
}
.nav div:nth-of-type(2) span {
  color: #666;
  margin-right: 15px;
}
.nav div:nth-of-type(2) a {
  text-decoration: none;
  color: red;
}
.shaw {
  width: 100%;
  height: 5px;
  background-color: #f2f2f2;
  margin-bottom: 100px;
}

.stepProcess {
  width: 500px;
  height: 55px;
  margin: 10px 0;

  margin-left: 50%;
  transform: translate(-50%);
}

.resisFrom {
  padding-top: 20px;
  width: 360px;
  height: 260px;

  margin: 0 auto;
}
.btn {
  width: 360px;
}
.el-form-item {
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
/*样式穿透  /deep/  >>>   这两个符号两边都要加空格  如代码所示*/
.el-input >>> .el-input__inner {
  border-radius: 1px;
}
</style>
