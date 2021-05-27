<template>
  <div class="homeOne">
    <div class="one-main">
      <ul>
        <li
          v-for="(item, index) in textArr"
          :key="index"
          @mouseover="liOver(index)"
          @mouseout="liOut"
        >
          <div class="liDiv">
            <img
              :src="srcs[index]"
              alt=""
              :class="[index == asd ? 'move' : '']"
            />
            <p>{{ item }}</p>
            <span class="price">￥{{ price[index] }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="next"></div>
  </div>
</template>
<script>
export default {
  name: "HomeDemo1",
  data() {
    return {
      list: ["asdsa", "sad", "gfh", "reter", "rui"],
      srcs: [
        // 动态绑定图片src属性 data中得路径必须引入require
        require("../../assets/img/main5/3.webp"),
        require("../../assets/img/main5/7.webp"),
        require("../../assets/img/main5/10.webp"),
        require("../../assets/img/main5/11.webp"),
        require("../../assets/img/main5/12.webp"),
        require("../../assets/img/main5/20.webp"),
        require("../../assets/img/main5/8.webp"),
        require("../../assets/img/main5/15.webp"),
        require("../../assets/img/main5/19.webp"),
        require("../../assets/img/main5/4.webp"),
        require("../../assets/img/main5/2.webp"),
        require("../../assets/img/main5/5.webp"),
        require("../../assets/img/main5/4.webp"),
        require("../../assets/img/main5/19.webp"),
        require("../../assets/img/main5/18.webp"),
        require("../../assets/img/main5/16.webp"),
        require("../../assets/img/main5/17.webp"),
        require("../../assets/img/main5/18.webp"),
        require("../../assets/img/main5/19.webp"),
        require("../../assets/img/main5/20.webp"),
      ],
      textArr: [
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
        "简易鞋柜家用室内好看【经济型】鞋架子多层防尘大容量...",
      ],
      price: [
        123.9,
        34.5,
        99.9,
        156.8,
        49.9,
        68.3,
        169.9,
        216.9,
        189.9,
        235.8,
        330.9,
        412.9,
        34.9,
        99.6,
        256.6,
        712.5,
        231.9,
        532.8,
        567.9,
        88.8,
      ],
      asd: -1,
    };
  },
  methods: {
    liOver(index) {
      this.asd = index;
    },
    liOut() {
      this.asd = -1;
    },
  },
};
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.one-main {
  /* width: 990px; */
  margin-top: 15px;
  height: 1094px;
}
ul li {
  width: 190px;
  height: 266px;
  background-color: #ffffff;
  margin-bottom: 10px;
  cursor: pointer;
}
.liDiv {
  position: relative;

  height: 100%;
  width: 190px;
}
img {
  position: absolute;
  left: 35px;
  top: 35px;
  width: 120px;
  height: 120px;
  transition: all 0.5s;
}
.liDiv p {
  position: absolute;
  bottom: 30px;
  left: 10px;

  font-size: 12px;
  color: #666666;
}

.move {
  transition: all 0.5s;
  transform: scale(1.12);
}
.next {
  height: 400px;
}
.price {
  position: absolute;
  bottom: 10px;
  left: 8px;
  color: red;
}
</style>
