<template>
  <div class="shangou">
    <div class="shan-nav">
      <img src="../assets/img/shangou/logo.png" alt="" />
      <div class="shan-menu">
        <ul>
          <li v-for="(item, index) in navArr" :key="index" class="lis">
            <div
              @mouseover="liOver(index)"
              @mouseout="liOut"
              @click="clickDiv(index)"
              :class="[index == sn || index == sd ? 'active' : '']"
            >
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
      <div class="shan-gou" @click="shanShop">
        <div class="gou" :class="[]" @mouseover="shanOver" @mouseout="shanOut">
          <span>我的购物车</span>
          <img src="../assets/img/gouwuche.png" alt="" v-if="as" />
          <img src="../assets/img/gouwuche 1.png" alt="" v-else />
        </div>
      </div>
    </div>
    <div class="shan-main">
      <shan-one v-show="sd === 0"> </shan-one>
      <two v-show="sd === 1"></two>
      <three v-show="sd === 2"></three>
      <four v-show="sd === 3"></four>
      <five v-show="sd === 4"></five>
      <six v-show="sd === 5"></six>
    </div>

    <!-- -------------------------------------------------- -->
    <div class="shan-nav shan-nav2" v-show="shanShow">
      <img src="../assets/img/shangou/logo.png" alt="" />
      <div class="shan-menu">
        <ul>
          <li v-for="(item, index) in navArr" :key="index" class="lis">
            <div
              @mouseover="liOver(index)"
              @mouseout="liOut"
              @click="clickDiv(index)"
              :class="[index == sn || index == sd ? 'active' : '']"
            >
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
      <div class="shan-gou" @click="shanShop">
        <div class="gou" :class="[]" @mouseover="shanOver" @mouseout="shanOut">
          <span>我的购物车</span>
          <img src="../assets/img/gouwuche.png" alt="" v-if="as" />
          <img src="../assets/img/gouwuche 1.png" alt="" v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShanOne from "../components/shangouChildren/ShanOne";
import Two from "../components/shangouChildren/Two";
import Three from "../components/shangouChildren/Three";
import Four from "../components/shangouChildren/Four";
import Five from "../components/shangouChildren/Five";
import Six from "../components/shangouChildren/Six";

export default {
  name: "Shangou",
  components: {
    ShanOne,
    Two,
    Three,
    Four,
    Five,
    Six,
  },

  data() {
    return {
      navArr: [
        "今日上新",
        "母婴童装",
        "服饰内衣",
        "家具日用",
        "3C数码",
        "更多",
      ],
      sn: false,
      sd: 0,
      as: true,
      shanShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.shanScroll);
  },
  methods: {
    liOver(index) {
      this.sn = index;
    },
    liOut() {
      this.sn = -1;
    },
    clickDiv(index) {
      this.sd = index;
    },
    shanOver() {
      this.as = false;
    },
    shanOut() {
      this.as = true;
    },
    shanScroll() {
      if (window.pageYOffset >= 110) {
        this.shanShow = true;
      } else {
        this.shanShow = false;
      }
    },
    shanShop() {
      this.$router.push("/shopping");
      this.as = true;
    },
  },
};
</script>
<style scoped>
div {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.shan-nav {
  height: 110px;
  background-color: #ffffff;
  padding: 0 32px 10px;
  display: flex;
  align-items: center;
}
.shan-nav img {
  width: 232px;
  height: 60px;
}
.shan-menu {
  margin-left: 50px;
  height: 110px;
  width: 700px;
}
.shan-menu ul {
  display: flex;

  justify-content: space-around;
  font-size: 16px;
  color: #605e65;
}

.lis div {
  margin-top: 40px;
  width: 100%;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
}
.lis div:hover {
  color: #f6193b;
}

.active {
  border-bottom: 3px solid #f6193b;
  color: #f6193b;
}
.shan-gou {
  cursor: pointer;
  margin-left: 30px;
  height: 110px;
  width: 170px;
}
.gou {
  position: relative;
  width: 142px;
  height: 42px;

  margin-top: 34px;
  margin-left: 14px;
  border-radius: 80px;
  border: 1px solid #e7e7e7;
  font-size: 13px;
  line-height: 42px;
}
.gou span {
  display: inline-block;
  margin-left: 27px;
}
.gou img {
  position: absolute;
  right: 26px;
  top: 10px;
  width: 20px;
  height: 20px;
}
.gou:hover {
  border: 1px solid #f61993;
  color: #f61993;
}
.shan-nav2 {
  width: 1208px;
  position: fixed;
  top: 0px;
  left: 30px;
  height: 83px;
  box-shadow: 0 5px 8px #b2b7bf;
}
.shan-nav2 img:first-child {
  width: 144px;
  height: 33px;
}
/* .shan-main {
  width: 1230px;
  margin: 0 auto;
} */
</style>
