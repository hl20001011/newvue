<template>
  <div class="demo1">
    <div class="daojishi" v-if="daojishiShow">
      <ul>
        <li class="firstLi">
          <p></p>
          <p>
            <span>
              19:00
            </span>
            <span>正在秒杀</span>
            <span> 距结束 {{ h }}:{{ m }}:{{ s }} </span>
          </p>
          <p></p>
        </li>
        <li>
          <span>21:00</span>
          <p>即将开始</p>
        </li>
        <li>
          <span>23:00</span>
          <p>
            即将开始
          </p>
        </li>
        <li>
          <span>明日6:00</span>
          <p>
            即将开始
          </p>
        </li>
        <li>
          <span>明日12:00</span>
          <p>
            即将开始
          </p>
        </li>
      </ul>
    </div>
    <div class="daojishi  daojishi1 " v-else>
      <ul>
        <li class="firstLi  firstLi2">
          <p></p>
          <p>
            <span>
              19:00
            </span>
            <span>正在秒杀</span>
            <span> 距结束 {{ h }}:{{ m }}:{{ s }} </span>
          </p>
          <p></p>
        </li>
        <li>
          <span>21:00</span>
          <p>即将开始</p>
        </li>
        <li>
          <span>23:00</span>
          <p>
            即将开始
          </p>
        </li>
        <li>
          <span>明日6:00</span>
          <p>
            即将开始
          </p>
        </li>
        <li>
          <span>明日12:00</span>
          <p>
            即将开始
          </p>
        </li>
      </ul>
    </div>
    <div class="mainShop">
      <ul>
        <li ref="firstli1">
          <div
            class="shopOne"
            @mouseover="shopOneOver1"
            @mouseout="shopOneOut1"
          >
            <img
              src="../../assets/img/miaosha/1.jpg"
              alt=""
              :class="[scrollPho1 ? 'scrol' : '']"
            />
            <P>家得宝拉拉裤 XL128片</P>
            <P>超薄大吸量</P>
          </div>

          <div class="shopTwo">
            <p class="p">31天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>128 </span>
                <span>￥176</span>
              </p>
              <p class="twoT">
                <span>已售34%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli2">
          <div
            class="shopOne"
            @mouseover="shopOneOver2"
            @mouseout="shopOneOut2"
          >
            <img
              src="../../assets/img/miaosha/21.jpg"
              alt=""
              :class="[scrollPho2 ? 'scrol' : '']"
            />
            <p>蜜纽康麦卢卡蜂蜜(MGO83+)375g</p>
            <P>爆款直降</P>
          </div>

          <div class="shopTwo">
            <p class="p">346天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>1 </span>
                <span>￥88</span>
              </p>
              <p class="twoT">
                <span>已售97%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli3">
          <div
            class="shopOne"
            @mouseover="shopOneOver3"
            @mouseout="shopOneOut3"
          >
            <img
              src="../../assets/img/miaosha/22.jpg"
              alt=""
              :class="[scrollPho3 ? 'scrol' : '']"
            />
            <P>【618提前购】Angane电动牙刷</P>
            <P>限量5000件</P>
          </div>

          <div class="shopTwo">
            <p class="p">165天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>9.9 </span>
                <span>￥29.9</span>
              </p>
              <p class="twoT">
                <span>已售38%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli4">
          <div
            class="shopOne"
            @mouseover="shopOneOver4"
            @mouseout="shopOneOut4"
          >
            <img
              src="../../assets/img/miaosha/23.jpg"
              alt=""
              :class="[scrollPho4 ? 'scrol' : '']"
            />
            <P>Apple iPhone 11 (A2223) 64GB</P>
            <P>限时特惠</P>
          </div>

          <div class="shopTwo">
            <p class="p">203天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>4339 </span>
                <span>￥5099</span>
              </p>
              <p class="twoT">
                <span>已售12%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli5">
          <div
            class="shopOne"
            @mouseover="shopOneOver5"
            @mouseout="shopOneOut5"
          >
            <img
              src="../../assets/img/miaosha/24.jpg"
              alt=""
              :class="[scrollPho5 ? 'scrol' : '']"
            />
            <P>小米11 Pro 8GB+128GB 黑色</P>
            <P>四曲面柔性屏</P>
          </div>

          <div class="shopTwo">
            <p class="p">164天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>4969 </span>
                <span>￥4999</span>
              </p>
              <p class="twoT">
                <span>已售24%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli6">
          <div
            class="shopOne"
            @mouseover="shopOneOver6"
            @mouseout="shopOneOut6"
          >
            <img
              src="../../assets/img/miaosha/25.jpg"
              alt=""
              :class="[scrollPho6 ? 'scrol' : '']"
            />
            <P>Aerogard 澳乐家驱蚊液175ml*2</P>
            <P>驱蚊爆款限时开抢</P>
          </div>

          <div class="shopTwo">
            <p class="p">67天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>97.9 </span>
                <span>￥122.9</span>
              </p>
              <p class="twoT">
                <span>已售50%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli7">
          <div
            class="shopOne"
            @mouseover="shopOneOver7"
            @mouseout="shopOneOut7"
          >
            <img
              src="../../assets/img/miaosha/3.jpg"
              alt=""
              :class="[scrollPho7 ? 'scrol' : '']"
            />
            <P>慕思无线蓝牙耳机 618同价提前享</P>
            <P>同价618 | 抢5折</P>
          </div>

          <div class="shopTwo">
            <p class="p">119天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>69.9 </span>
                <span>￥99.9</span>
              </p>
              <p class="twoT">
                <span>已售40%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
        <li ref="firstli8">
          <div
            class="shopOne"
            @mouseover="shopOneOver8"
            @mouseout="shopOneOut8"
          >
            <img
              src="../../assets/img/miaosha/2.jpg"
              alt=""
              :class="[scrollPho8 ? 'scrol' : '']"
            />
            <P>店小二户外电源</P>
            <P>秒杀直降130!</P>
          </div>

          <div class="shopTwo">
            <p class="p">80天最低历史价</p>
            <div class="shopTwoDiv">
              <p class="twoP">
                <span>￥</span>
                <span>69.9 </span>
                <span>￥169.9</span>
              </p>
              <p class="twoT">
                <span>已售80%</span>
                <span>
                  <b></b>
                </span>
              </p>
              <div class="btn">立即抢购</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="haibao">
      <img src="../../assets/img/miaosha/31.png" alt="" />
      <img src="../../assets/img/miaosha/32.jpg" alt="" />
    </div>
    <div class="next"></div>
  </div>
</template>
<script>
import { fn } from "../../assets/js/setTime";
export default {
  name: "DemoOne",
  created() {
    window.addEventListener("scroll", this.daojishiScroll);
  },
  data() {
    setInterval(() => {
      this.backTime();
    }, 1000);
    return {
      //倒计时
      h: "00",
      m: "00",
      s: "00",
      //图片向上滑动
      scrollPho1: false,
      scrollPho2: false,
      scrollPho3: false,
      scrollPho4: false,
      scrollPho5: false,
      scrollPho6: false,
      scrollPho7: false,
      scrollPho8: false,
      // scrollPho: [
      //   { scrollPho1: false },
      //   { scrollPho2: false },
      //   { scrollPho2: false },
      //   { scrollPho4: false },
      //   { scrollPho5: false },
      //   { scrollPho6: false },
      //   { scrollPho6: false },
      //   { scrollPho8: false },
      // ],
      daojishiShow: true,
      // p1: [
      //   "家得宝拉拉裤 XL128片",
      //   "蜜纽康麦卢卡蜂蜜(MGO83+)375g",
      //   "【618提前购】Angane电动牙刷",
      //   "Apple iPhone 11 (A2223) 64GB",
      //   "小米11 Pro 8GB+128GB 黑色",
      //   "Aerogard 澳乐家驱蚊液175ml*2",
      //   "慕思乳胶弹簧床垫 618同价提前享",
      //   "店小二户外电源",
      // ],
      // p2: [
      //   "超薄大吸量",
      //   "爆款直降",
      //   "限量5000件",
      //   "限时特惠",
      //   "四曲面柔性屏",
      //   "驱蚊爆款限时开抢",
      //   "同价618 | 抢5折",
      //   "秒杀直降130!",
      // ],
      // p3: [31, 346, 165, 203, 164, 67, 119, 80],
      // p4: [128, 1, 9.9, 4339, 4969, 97.9, 6929, 69.9],
      // p5: [176, 88, 29.9, 5099, 4999, 122.9, 7999, 169.9],
      // p6: ["34", "97%", "38%", "12%", "24%", "50%", "40%", "80%"],
      // srcs: [
      //   "../../assets/img/miaosha/1.jpg",
      //   "../../assets/img/miaosha/21.jpg",
      //   "../../assets/img/miaosha/22.jpg",
      //   "../../assets/img/miaosha/23.jpg",
      //   "../../assets/img/miaosha/24.jpg",
      //   "../../assets/img/miaosha/25.jpg",
      //   "../../assets/img/miaosha/26.jpg",
      //   "../../assets/img/miaosha/2.jpg",
      // ],
    };
  },
  methods: {
    //倒计时
    backTime() {
      this.h = fn()[0];
      this.m = fn()[1];
      this.s = fn()[2];
    },
    daojishiScroll() {
      if (window.pageYOffset >= 186) {
        this.daojishiShow = false;
      } else {
        this.daojishiShow = true;
      }
    },
    shopOneOver1() {
      this.scrollPho1 = true;
    },
    shopOneOut1() {
      this.scrollPho1 = false;
    },
    shopOneOver2() {
      this.scrollPho2 = true;
    },
    shopOneOut2() {
      this.scrollPho2 = false;
    },
    shopOneOver3() {
      this.scrollPho3 = true;
    },
    shopOneOut3() {
      this.scrollPho3 = false;
    },
    shopOneOver4() {
      this.scrollPho4 = true;
    },
    shopOneOut4() {
      this.scrollPho4 = false;
    },
    shopOneOver5() {
      this.scrollPho5 = true;
    },
    shopOneOut5() {
      this.scrollPho5 = false;
    },
    shopOneOver6() {
      this.scrollPho6 = true;
    },
    shopOneOut6() {
      this.scrollPho6 = false;
    },
    shopOneOver7() {
      this.scrollPho7 = true;
    },
    shopOneOut7() {
      this.scrollPho7 = false;
    },
    shopOneOver8() {
      this.scrollPho8 = true;
    },
    shopOneOut8() {
      this.scrollPho8 = false;
    },
  },
};
</script>
<style scoped>
div {
  box-sizing: border-box;
}
.daojishi {
  /* position: fixed; */
  height: 100px;
  background-color: #ffffff;
  padding: 20px 10px 0;
  margin-bottom: 20px;
  transition: all 1s;
  /* z-index: 100; */
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.daojishi ul {
  display: flex;
  height: 100%;
  width: 100%;
}
.daojishi li:first-child {
  flex: 1.8;
  color: white;
  font-size: 14px;
}
.daojishi ul li:first-child p:first-child {
  margin-left: 10px;
}
.daojishi ul li {
  flex: 1;
  display: flex;
  padding: 0 10px;
}
.firstLi {
  font-weight: 600;
}
.demo1 .daojishi ul .firstLi2 {
  width: 330px;
  background-color: #e01222;
}
.demo1 .daojishi1 {
  width: 1202px;
  padding-left: 0;
  margin-left: 30px;
  position: fixed;
  top: 0px;
  z-index: 200;
  box-shadow: 0 5px 10px #c6c6c6;
  transition: all 1s;
}
.firstLi p:nth-of-type(1) {
  display: inline-block;
  height: 0;
  width: 0;
  border-style: solid;
  border-color: transparent #e01222 #e01222 transparent;
  border-width: 30px;
}
.firstLi p:nth-of-type(2) span:nth-of-type(1) {
  display: inline-block;
  font-size: 20px;
  line-height: 40px;
  margin-right: 6px;
  margin-left: 30px;
}
.daojishi .firstLi p:nth-of-type(2) span:nth-of-type(3) {
  display: block;
  margin-top: -9px;
  margin-left: 65px;
}
.daojishi .firstLi p:nth-of-type(2) span:nth-of-type(2) {
  display: inline-block;

  overflow: hidden;
}
.firstLi p:nth-of-type(3) {
  display: inline-block;
  height: 0;
  width: 0;
  border-style: solid;
  border-color: #e01222 transparent transparent #e01222;
  border-width: 30px;
}
.firstLi p:nth-of-type(2) {
  display: inline-block;
  width: 227px;
  height: 60px;
  background-color: #e01222;
}
.daojishi ul li:nth-of-type(n + 2) {
  text-align: center;
  line-height: 80px im !important;
}
.daojishi li:nth-of-type(n + 2) span:nth-of-type(1) {
  font-size: 14px;
  font-weight: 600;
  line-height: 80px !important;
}
.daojishi ul li:nth-of-type(n + 2) p {
  margin-top: 23px;
  margin-left: 7px;
  width: 78px;
  height: 28px;
  display: inline-block;
  font-size: 12px;
  border: 1px solid #a1a1a1;
  border-radius: 22px;
  line-height: 28px;
  color: #666666;
}
/* ------------------------------------------------- */

.mainShop {
  width: 1200px;
  height: 820px;
  margin: 0 auto;
}

.mainShop ul {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.mainShop ul li {
  width: 290px;
  height: 400px;
  background-color: white;
  overflow: hidden;
}
.shopOne {
  height: 290px;
  padding: 20px 30px 0;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
}

.shopOne img {
  position: absolute;
  top: 25px;
  left: 45px;
  width: 200px;
  height: 200px;
  transition: 0.3s;
}
.shopOne p:nth-of-type(1) {
  margin-top: 215px;
  margin-left: -10px;
  margin-bottom: 9px;
  color: #333333;
}
.shopOne p:nth-of-type(2) {
  margin-top: 0;
  margin-left: -10px;
  margin-bottom: 5px;
  color: #e01222;
}
.scrol {
  top: 15px !important;
  transition: 0.3s;
}

.mainShop ul li div:nth-of-type(2) {
  height: 100px;
  margin-top: 4px;

  padding-top: 5px;
  border-top: 1px solid #f6f6f6;
  box-sizing: content-box;
}
.shopTwo .p {
  width: 102px;
  height: 16px;
  background-color: #e6e6e6;
  font-size: 12px;
  color: #999999;
  margin-left: 15px;
  text-align: center;
  line-height: 16px;
  margin-top: 6px;
}
.shopTwoDiv {
  position: relative;
  height: 40px;
  width: 275px;
  margin-left: 15px;
}
.twoP {
  margin: 0;
  line-height: 24px;
  width: 275px;
}
.shopTwoDiv .twoP span:first-child {
  font-size: 16px;
  color: #df0021;
}
.shopTwoDiv .twoP span:nth-child(2) {
  font-size: 24px;
  color: #df0021;
}
.shopTwoDiv .twoP span:nth-child(3) {
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;
}
.twoT {
  margin-top: -6px;
  margin-left: 2px;
}
.twoT span:first-child {
  font-size: 12px;
  color: #666666;
  margin-right: 8px;
}
.twoT span:last-child {
  position: relative;
  display: inline-block;
  width: 88px;
  height: 8px;
  background-color: #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
}
.twoT span:last-child b {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 30px;
  height: 8px;
  background-color: #df0021;
}
.mainShop ul li:nth-child(2) .twoT b {
  width: 85px;
}
.mainShop ul li:nth-child(3) .twoT b {
  width: 33px;
}
.mainShop ul li:nth-child(4) .twoT b {
  width: 15px;
}
.mainShop ul li:nth-child(5) .twoT b {
  width: 26px;
}
.mainShop ul li:nth-child(6) .twoT b {
  width: 44px;
}
.mainShop ul li:nth-child(7) .twoT b {
  width: 39px;
}
.mainShop ul li:nth-child(8) .twoT b {
  width: 65px;
}
.btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  height: 40px;
  background-color: #df0021;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 40px;
}

.haibao {
  margin-top: 20px;
  height: 180px;
  width: 1200px;

  margin: 0 auto;
}
.haibao img:first-child {
  margin-right: 10px;
}
.haibao img {
  height: 180px;
  width: 595px;
}
.next {
  height: 400px;
}
</style>
