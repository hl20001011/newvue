<template>
  <div>
    <div class="nav-shop">
      我的购物车
      <div class="shouye">
        <a href="./home">
          <b>首页</b>
          <img src="../assets/img/shopp/fanhuishouye.png" alt="" />
        </a>
      </div>
    </div>
    <div class="main-shop">购物车为空</div>
    <div class="tankuang" v-show="shopShow">
      <p>赶快去购物吧</p>
      <span>购物车为空哦！</span>

      <img src="../assets/img/shopp/1.gif" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    setTimeout(() => {
      this.shopShow = true;
      setTimeout(() => {
        this.shopShow = false;
      }, 6000);
    }, 1000);
    return {
      shopShow: false,
    };
  },
};
</script>
<style scoped>
.nav-shop {
  height: 80px;
  background-color: deeppink;
  font-size: 30px;
  line-height: 80px;
  color: white;
  text-align: center;
}
.main-shop {
  height: 100%;
  margin-top: 200px;
  font-size: 50px;
  color: #999999;
  text-align: center;
}
.tankuang {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  width: 500px;
  height: 240px;
  transition: all 2s;
  border-radius: 90px;
}
span,
p {
  animation: move 4s;
  position: absolute;
  display: inline-block;
  left: 100px;
  top: 95px;
  font-size: 18px;
  color: #999999;
  transform: rotate(-45deg);
  transition: all 1s;
}
@keyframes move {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3) rotate(-45deg);
    color: red;
    font-weight: 500;
  }
  100% {
    transform: scale(0.9) rotate(-45deg);
  }
}
p {
  top: 50px;
}
img {
  border-radius: 20px;
  display: block;
  width: 400px;
  height: 180px;
  margin-top: 30px;
  margin-left: 70px;

  transition: all 1s;
}
.shouye {
  font-size: 17px;
  line-height: 60px;
  position: absolute;
  right: 20px;
  top: 10px;
  width: 100px;
  height: 60px;
}
.shouye img {
  position: absolute;
  left: -62px;
  top: -10px;
  width: 21px;
  height: 21px;
}
a {
  text-decoration: none;
  color: white;
  font-weight: 300;
}
</style>
