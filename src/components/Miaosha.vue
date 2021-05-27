<template>
  <div class="miaosha">
    <div class="navBar">
      <div class="nav-left">
        <div class="left-logo">
          <img src="../assets/img/6tu.png" alt="" />
          <i>LXM</i>
        </div>
        <div class="left-text">
          <span>秒杀</span>
          <el-popover
            placement="top-start"
            title=""
            width="200"
            trigger="hover"
            content="家用电器 数码 手机 冰箱 空调 电脑 办公 玩具 时尚衣服 
            男鞋 运动 篮球 食品 酒类 生鲜 房产 汽车 汽车用品 女鞋 个人清洁 宠物
            童装 女鞋 钟表 珠宝 钻戒  玩具 乐器 母婴 "
          >
            <div slot="reference">
              <a href=""> <span>全部分类</span></a>
              <img src="../assets/img/miaosha/xianxia.png" alt="" />
            </div>
          </el-popover>
        </div>
      </div>
      <div class="nav-center">
        <div class="from">
          <input type="text" placeholder="平板电脑" />
        </div>
        <div class="btn">
          <span>搜索</span>
        </div>
        <div class="center-bottom">
          <ul>
            <li><a href="">手机</a></li>
            <li><a href="">电脑</a></li>
            <li><a href="">鼠标</a></li>
            <li><a href="">大家电</a></li>
            <li><a href="">酒水</a></li>
          </ul>
        </div>
      </div>
      <div class="nav-right" @click="rightShop">
        <span>我的购物车</span>
        <img src="../assets/img/cate2 .png" alt="" />
      </div>
      <div class="fanhui">
        <a href="/home">
          <span>LXM首页</span>
          <img src="../assets/img/fanhuishouye.png" alt="" />
        </a>
      </div>
    </div>
    <div class="select">
      <div class="select-left">
        <ul>
          <li
            v-for="(item, index) in selectMenu"
            :key="index"
            @click="selectTab(index)"
            :class="[sn === index ? 'active' : '']"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <el-popover
        title=""
        width="300"
        trigger="hover"
        content="服饰内衣    食品饮料    母婴童装    电脑数码    运动户外    美妆护肤    手机通讯
        中外名酒    家装建材    家用电器    医药保健    个人护理    清洁用品
             钟表生鲜    家具家电   箱包皮具    汽车用具"
      >
        <div
          class="select-right"
          @mouseover="selectOver"
          @mouseout="selectOut"
          slot="reference"
        >
          <span>更多分类</span>
          <img
            src="../assets/img/fanxiang/arrow_down.png"
            alt=""
            :class="[fanxianShow ? 'selec' : '']"
          />
        </div>
      </el-popover>
    </div>
    <div class="main-shop">
      <demo-one v-show="sn == 0"></demo-one>
      <demo-two v-show="sn == 1"></demo-two>
      <demo-three v-show="sn == 2"></demo-three>
    </div>
  </div>
</template>
<script>
import DemoOne from "../components/miaoshaChildren/DemoOne";
import DemoTwo from "../components/miaoshaChildren/DemoTwo";
import DemoThree from "../components/miaoshaChildren/DemoThree";
export default {
  name: "Miaosha",
  components: {
    DemoOne,
    DemoTwo,
    DemoThree,
  },
  data() {
    return {
      selectMenu: [
        { id: 0, name: "XM秒杀" },
        {
          id: 1,
          name: "每日特价",
        },
        {
          id: 2,
          name: "品类秒杀",
        },
      ],
      sn: 0,
      arr: ["/lxm", "/tejia", "/pinglei"],
      fanxianShow: false,
    };
  },
  methods: {
    //菜单切换
    selectTab(index) {
      this.sn = index;
      this.$router.push(this.arr[index]);
    },
    //鼠标经过选择栏
    selectOver() {
      this.fanxianShow = true;
    },
    //鼠标离开选择栏
    selectOut() {
      this.fanxianShow = false;
    },
    rightShop() {
      this.$router.push("./shopping");
    },
  },
};
</script>
<style scoped>
div {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
a:hover {
  color: red;
}
.navBar {
  height: 120px;
  /* background-color: green; */
  padding: 0 50px;
  display: flex;
  background-color: #ffffff;
}
.nav-left {
  width: 350px;
  height: 50px;

  margin-top: 28px;

  display: flex;
}
.left-logo i {
  display: inline-block;
  margin-left: 3px;
  font-size: 30px;
  font-weight: 500;
  color: green;
}
.left-logo img {
  height: 42px;
  width: 45px;
  margin-top: 5px;
}
.left-text {
  position: relative;
  margin-left: 65px;
  margin-top: 25px;
  display: flex;
}
.left-text span {
  font-size: 20px;
  color: #666666;
}
.left-text a :hover {
  color: red;
}
.left-text div:nth-of-type(1) {
  width: 75px;
  height: 25px;
  border: 1px solid #cccccc;
  margin-left: 6px;
  text-align: center;
  line-height: 17px;
}
.left-text div:nth-of-type(1) span {
  font-size: 12px;
}
.left-text div:nth-of-type(1) img {
  width: 10px;
  height: 10px;
  margin-left: 5px;
}
.nav-center {
  width: 540px;
  height: 70px;
  margin: 25px 25px 0;
  display: flex;
  flex-wrap: wrap;
}
.from {
  padding: 2px 10px;
  width: 85%;
  height: 40px;
  background-color: #ffffff;

  border: 2px solid #f30213;
}
.from input {
  margin-top: 7px;
  width: 100%;
  border: 0;
  outline: none;
}
.btn {
  width: 15%;
  height: 40px;
  background-color: #f30213;
  font-size: 18px;
  color: white;
  text-align: center;
  line-height: 40px;
}
.center-bottom {
  padding: 0;
  width: 200px;
  height: 20px;
}
.center-bottom ul {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  list-style: none;
  font-size: 12px;
  justify-content: space-between;
}
.center-bottom ul a {
  color: #999999;
}
.center-bottom ul a:hover {
  color: red;
}
.nav-right {
  cursor: pointer;
  width: 140px;
  height: 36px;
  background-color: #f9f9f9;
  border: 1px solid #dfdfdf;
  margin-top: 27px;
  font-size: 13px;
  color: red;
  position: relative;
}
.nav-right span {
  display: inline-block;
  margin-top: 8px;
  margin-left: 24px;
  overflow: hidden;
}
.nav-right img {
  width: 18px;
  height: 18px;
  position: absolute;
  right: 24px;
  top: 8px;
}
.fanhui {
  position: absolute;
  top: 125px;
  right: 180px;
  width: 110px;
  height: 36px;
  background-color: #f9f9f9;
  font-size: 14px;
  line-height: 36px;
  padding: 0 10px;
}
.fanhui img {
  position: absolute;
  top: 7px;
  right: 9px;
  width: 25px;
  height: 25px;
}
.select {
  padding-left: 30px;
  height: 46px;
  background-color: #ffffff;
  border-bottom: 2px solid red;
  display: flex;
}
.select-left {
  display: flex;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.select-left li {
  width: 104px;
  height: 44px;
  padding: 0 12px;

  box-sizing: border-box;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
}
.select-left li:hover {
  color: #e01222;
}
a:-webkit-any-link {
  color: #333333;
}

.active {
  background-color: #e01222;
  color: white !important;
}

.select-right {
  position: absolute;
  top: 135px;
  right: 70px;
  font-size: 14px;
  cursor: pointer;
}
.select-right:hover {
  color: red;
}

.select-right img {
  position: absolute;
  right: -22px;
  top: 3px;
  width: 15px;
  height: 15px;
  transition: all 0.5s;
}
.selec {
  transform: rotate(180deg);
  transition: all 0.5s;
}
</style>
