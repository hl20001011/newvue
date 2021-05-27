<template>
  <div class="home">
    <div class="navBar">
      <div class="nav-text">
        <a href="" class="dingwei">
          <img src="../assets/img/location.png" alt="" />
          <span>江西</span>
        </a>
        <div class="navRight">
          <a href="/login">您好,请登录</a>
          <div class="line">|</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              我的订单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" divided>
              <el-dropdown-item icon="el-icon-camera">生活区</el-dropdown-item>
              <el-dropdown-item icon="el-icon-alarm-clock"
                >学习区</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-mobile-phone"
                >娱乐区</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <div class="line">|</div>
          <a href="">LXM会员</a>
          <div class="line">|</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              客服服务<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user-solid"
                >客户</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-user">商户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="line">|</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              网站导航<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">特色主题</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >行业频道</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >生活服务</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-check"
                >更多精选</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- 搜索内容区域 -->
    <div class="search">
      <div class="search-text">
        <div class="search-left">
          <img src="../assets/img/6tu.png" alt="" v-if="jdShow" class="tu" />
          <img src="../assets/img/jd.gif" alt="" v-else class="jd" />
          <div><i>LXM</i></div>
        </div>
        <div class="search-center">
          <div class="center-input">
            <div class="from">
              <div>
                <input
                  type="text"
                  class="search-input"
                  v-model="text"
                  :placeholder="placeholder"
                />
                <i
                  class="el-icon-circle-close"
                  @click="deleteInput"
                  v-show="deleteShow"
                ></i>
              </div>
              <div>
                <el-button>
                  <img src="../assets/img/sousuo2.png" alt="" />
                </el-button>
              </div>
            </div>
            <div class="cate">
              <a href="./shopping">
                <img src="../assets/img/cate.png" alt="" />
                <span>我的购物车</span>
              </a>
            </div>
            <div class="erweima">
              <img src="../assets/img/erweima.gif" alt="" />
            </div>
          </div>
        </div>
        <div class="search-bottom">
          <ul>
            <li><a href="/miaosha" class="miaosha">秒杀</a></li>
            <li>
              <a href="javascript:;" @click="develop">优惠券</a>
            </li>
            <li><b class="miaosha" @click="plus">PLUS会员</b></li>
            <li><a href="/shangou" class="miaosha">品牌闪购</a></li>
            <li><a href="javascript:;" @click="develop">拍卖</a></li>
            <li><a href="javascript:;" @click="develop">LXM家电</a></li>
            <li><a href="javascript:;" @click="develop">LXM超市</a></li>
            <li><a href="javascript:;" @click="develop">LXM生鲜</a></li>
            <li><a href="javascript:;" @click="develop">LXM国际</a></li>
            <li><a href="javascript:;" @click="develop">LXM云</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 主内容区 -->
    <div class="mainer">
      <div class="swiper">
        <div class="swiper-left">
          <ul>
            <li><a href="">家用电器</a></li>
            <li><a href="">手机/数码</a></li>
            <li><a href="">电脑/办公</a></li>
            <li><a href="">家具/家具/家装</a></li>
            <li><a href="">男装/女装/童装</a></li>
            <li><a href="">美妆</a></li>
            <li><a href="">女鞋/钟表</a></li>
            <li><a href="">男鞋/运动/户外</a></li>
            <li><a href="">汽车/汽车用品</a></li>
            <li><a href="">玩具/限量手办</a></li>
            <li><a href="">食品/生鲜/特产</a></li>
            <li><a href="">艺术/礼品/鲜花</a></li>
            <li><a href="">医药保险</a></li>
            <li><a href="">图书/教育/文娱</a></li>
            <li><a href="">机票/酒店/生活/旅游</a></li>
            <li><a href="">理财/白条</a></li>
            <li><a href="">安装/维修/清洗/二手</a></li>
            <li><a href="">工业品</a></li>
          </ul>
        </div>
        <div class="swiper-center">
          <el-carousel indicator-position="outside">
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper1.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper2.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper3.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper4.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper5.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper6.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/swiper/swiper7.jpg" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="swiper-right">
          <div class="rightOne">
            <div>
              <img src="../assets/img/jd2.png" alt="" />
              <div class="login1">
                <span>Hi~欢迎逛LXM !</span>
                <p>
                  <a href="/login">登录</a>
                  <span>|</span>
                  <a href="/resister">注册</a>
                </p>
              </div>
            </div>
            <div>
              <a href="./resister">新人福利</a>
              <a href="./login">PLUS会员</a>
            </div>
          </div>
          <div class="rightTwo">
            <div>
              <span class="span">LXM快报</span>
              <a href="">更多></a>
            </div>
            <div>
              <a href="">
                <span>推荐</span>
                <span>{{ kuai3 }}</span>
              </a>
              <a href="">
                <span>最新</span>
                <span>{{ kuai2 }}</span>
              </a>
              <a href="">
                <span>热评</span>
                <span>{{ kuai1 }}</span>
              </a>
              <a href="">
                <span>HOT</span>
                <span>{{ kuai }}</span>
              </a>
            </div>
          </div>
          <div class="xian"></div>
          <div class="rightThree">
            <ul ref="UlRef">
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/1.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/21.png" alt="" v-else />
                  <span>话费</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/2.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/22.png" alt="" v-else />
                  <span>机票</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/3.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/23.png" alt="" v-else />
                  <span>酒店</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/4.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/24.png" alt="" v-else />
                  <span>游戏</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/5.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/25.png" alt="" v-else />
                  <span>加油卡</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/6.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/26.png" alt="" v-else />
                  <span>火车票</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/7.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/27.png" alt="" v-else />
                  <span>众筹</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/8.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/28.png" alt="" v-else />
                  <span>理财</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/9.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/29.png" alt="" v-else />
                  <span>白条</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/10.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/30.png" alt="" v-else />
                  <span>电影票</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/11.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/31.png" alt="" v-else />
                  <span>企业购</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="../assets/img/jinglitu/12.png"
                    alt=""
                    v-if="rightShow"
                  />
                  <img src="../assets/img/jinglitu/32.png" alt="" v-else />
                  <span>礼品卡</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="swiper2">
        <div class="swiper2-main">
          <div class="main-left">
            <div class="program">LXM秒杀</div>
            <div class="timeWalk">
              <span>16:00</span>
              <span>点场 距结束</span>
            </div>
            <div class="dingshi">
              <span>{{ h }}</span>
              <span>:</span>
              <span>{{ m }}</span>
              <span>:</span>
              <span>{{ s }}</span>
            </div>
          </div>
          <div class="main-center">
            <!-- 轮播图2 -->
            <el-carousel
              indicator-position="outside"
              :autoplay="true"
              height="260px"
              :interval="5000"
            >
              <el-carousel-item>
                <a class="a">
                  <img src="../assets/img/swiper2/1.webp" alt="" class="img1" />
                  <p>拉菲红酒</p>
                  <p class="ap">
                    <span>￥899.00</span>
                    <span>￥1099.00</span>
                  </p>
                </a>
                <a class="a">
                  <img src="../assets/img/swiper2/2.webp" alt="" class="img1" />
                  <p>无线盒子</p>
                  <p class="ap">
                    <span>￥139.00</span>
                    <span>￥1239.00</span>
                  </p>
                </a>
                <a class="a">
                  <img src="../assets/img/swiper2/3.webp" alt="" class="img1" />
                  <p>时尚童装</p>
                  <p class="ap">
                    <span>￥198.00</span>
                    <span>￥168.00</span>
                  </p>
                </a>
              </el-carousel-item>
              <el-carousel-item>
                <a class="a">
                  <img src="../assets/img/swiper2/5.webp" alt="" class="img1" />
                  <p>智能打印机</p>
                  <p class="ap">
                    <span>￥269.00</span>
                    <span>￥388.00</span>
                  </p>
                </a>
                <a class="a">
                  <img src="../assets/img/swiper2/6.webp" alt="" class="img1" />
                  <p>飞科剃须刀</p>
                  <p class="ap">
                    <span>￥199.00</span>
                    <span>￥288.00</span>
                  </p>
                </a>
                <a class="a">
                  <img src="../assets/img/swiper2/7.webp" alt="" class="img1" />
                  <p>精品积木</p>
                  <p class="ap">
                    <span>￥98.00</span>
                    <span>￥119.00</span>
                  </p>
                </a>
              </el-carousel-item>
              <el-carousel-item>
                <a class="a">
                  <img src="../assets/img/swiper2/8.webp" alt="" class="img1" />
                  <p>iphone12-max</p>
                  <p class="ap">
                    <span>￥8999.00</span>
                    <span>￥9998.00</span>
                  </p>
                </a>
                <a class="a">
                  <img src="../assets/img/swiper2/9.webp" alt="" class="img1" />
                  <p>护肤面霜</p>
                  <p class="ap">
                    <span>￥68.00</span>
                    <span>￥89.00</span>
                  </p>
                </a>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/10.webp"
                    alt=""
                    class="img1"
                  />
                  <p>戴尔笔记本</p>
                  <p class="ap">
                    <span>￥4999.00</span>
                    <span>￥5998.00</span>
                  </p>
                </a>
              </el-carousel-item>
              <el-carousel-item>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/11.webp"
                    alt=""
                    class="img1"
                  />
                  <p>纯木餐桌</p>
                  <p class="ap">
                    <span>￥1399.00</span>
                    <span>￥1799.00</span>
                  </p>
                </a>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/12.webp"
                    alt=""
                    class="img1"
                  />
                  <p>南极人冬季直筒袜</p>
                  <p class="ap">
                    <span>￥9.90</span>
                    <span>￥13.90</span>
                  </p>
                </a>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/13.webp"
                    alt=""
                    class="img1"
                  />
                  <p>美味虾尾</p>
                  <p class="ap">
                    <span>￥39.00</span>
                    <span>￥58.00</span>
                  </p>
                </a>
              </el-carousel-item>
              <el-carousel-item>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/14.webp"
                    alt=""
                    class="img1"
                  />
                  <p>精品奶粉</p>
                  <p class="ap">
                    <span>￥399.00</span>
                    <span>￥499.00</span>
                  </p>
                </a>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/15.webp"
                    alt=""
                    class="img1"
                  />
                  <p>兰罄雀舌</p>
                  <p class="ap">
                    <span>￥68.00</span>
                    <span>￥78.00</span>
                  </p>
                </a>
                <a class="a">
                  <img
                    src="../assets/img/swiper2/16.webp"
                    alt=""
                    class="img1"
                  />
                  <p>共和国民法典</p>
                  <p class="ap">
                    <span>￥199.00</span>
                    <span>￥249.00</span>
                  </p>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="main-right">
            <div class="main-div">
              <a href="" class="main-a">
                <img src="../assets/img/swiper2/4.webp" alt="" />
                <p>超大屏玄龙骑士液晶电视</p>
                <span>￥2999.00 准时开抢！</span>
              </a>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第三模块 -->
      <div class="main-three">
        <div class="three-one">
          <div class="one-nav">
            <span>每日特价</span>
            <div class="nav-right">
              <ul>
                <li
                  v-for="(item, index) in tab"
                  :key="index"
                  @mouseover="liover(index)"
                >
                  <a href="" :class="[currentTab === index ? 'active' : '']">{{
                    item
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="one-main">
            <div v-show="currentTab == 0" class="tabone">
              <a href="">
                <div class="price">
                  <span>113天最低价</span>
                </div>
                <img src="../assets/img/main3/1.webp" alt="" />
                <p>儿童电话手表4G</p>
                <p>
                  <span>￥278</span>
                  <span>￥499</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>243</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/12.webp" alt="" />
                <p>女士品牌手表</p>
                <p>
                  <span>￥85</span>
                  <span>￥258</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>43</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/13.webp" alt="" />
                <p>奥特曼套装</p>
                <p>
                  <span>￥39</span>
                  <span>￥59</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>678</span>
                  <span>件</span>
                </p>
              </a>
            </div>
            <div v-show="currentTab == 1" class="tabone">
              <a href="">
                <div class="price">
                  <span>305天最低价</span>
                </div>
                <img src="../assets/img/main3/21.webp" alt="" />
                <p>广西香蕉</p>
                <p>
                  <span>￥15.9</span>
                  <span>￥35.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>19</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/22.webp" alt="" />
                <p>泰国香米</p>
                <p>
                  <span>￥19.9</span>
                  <span>￥49.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>430</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/23.webp" alt="" />
                <p>稻香村坚果</p>
                <p>
                  <span>￥9.9</span>
                  <span>￥14.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>780</span>
                  <span>件</span>
                </p>
              </a>
            </div>
            <div v-show="currentTab == 2" class="tabone">
              <a href="">
                <div class="price">
                  <span>154天最低价</span>
                </div>
                <img src="../assets/img/main3/31.webp" alt="" />
                <p>儿童玩具挖掘机</p>
                <p>
                  <span>￥35.9</span>
                  <span>￥80.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>70</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/32.webp" alt="" />
                <p>耐高温玻璃杯</p>
                <p>
                  <span>￥46.9</span>
                  <span>￥118.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>349</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/33.webp" alt="" />
                <p>闪闪冰块存储盒</p>
                <p>
                  <span>￥14.9</span>
                  <span>￥28.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>119</span>
                  <span>件</span>
                </p>
              </a>
            </div>
            <div v-show="currentTab == 3" class="tabone">
              <a href="">
                <div class="price">
                  <span>23天最低价</span>
                </div>
                <img src="../assets/img/main3/41.webp" alt="" />
                <p>原装进口刮</p>
                <p>
                  <span>￥16.9</span>
                  <span>￥49.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>489</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/42.webp" alt="" />
                <p>维特斯发胶</p>
                <p>
                  <span>￥46.5</span>
                  <span>￥79.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>100</span>
                  <span>件</span>
                </p>
              </a>
              <a href="">
                <img src="../assets/img/main3/43.webp" alt="" />
                <p>脚气喷气</p>
                <p>
                  <span>￥23.9</span>
                  <span>￥59.9</span>
                </p>
                <p>
                  <span>已抢</span>
                  <span>10</span>
                  <span>件</span>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class="three-two">
          <div class="two-one">
            <p>品牌闪购</p>
          </div>
          <div class="large-img">
            <a href="" class="img-a">
              <p>精选珠宝闪购专场</p>
              <p>精选每满300减30 | 仅剩两天</p>
              <img src="../assets/img/main3/51.webp" alt="" />
            </a>
          </div>
          <div class="six-imgs">
            <ul>
              <li>
                <a href="">
                  <img src="../assets/img/main3/52.webp" alt="" />
                  <span>火枫大放价</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../assets/img/main3/53.webp" alt="" />
                  <span>胖哥哥品牌闪购</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../assets/img/main3/54.webp" alt="" />
                  <span>皮卡尔丹闪购专场</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../assets/img/main3/55.webp" alt="" />
                  <span>MacDavid护具闪购</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../assets/img/main3/56.webp" alt="" />
                  <span>大牌家具联合闪购</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../assets/img/main3/57.webp" alt="" />
                  <span>大码男装品牌闪购</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 第四模块 -->
      <div class="text-center">
        <span>频道广场</span>
      </div>
      <div class="shopping">
        <div class="shop-one">
          <div class="one-large">
            <a href="" class="as">
              <img src="../assets/img/main4/1.webp" alt="" />
            </a>
            <a href="" class="as">
              <img src="../assets/img/main4/2.webp" alt="" />
            </a>
          </div>
          <div class="one-less">
            <ul>
              <li>
                <a href="">
                  <p>
                    <span>智能数码 </span>
                    <span>尽享玩物</span>
                  </p>
                  <img src="../assets/img/main4/3.webp" alt="" />
                  <img src="../assets/img/main4/4.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <p>
                    <span>LXM金融 </span>
                    <span>会理财 懂生活</span>
                  </p>
                  <img src="../assets/img/main4/5.webp" alt="" />
                  <img src="../assets/img/main4/6.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <p>
                    <span>生鲜馆 </span>
                    <span>尝遍天下鲜</span>
                  </p>
                  <img src="../assets/img/main4/7.webp" alt="" />
                  <img src="../assets/img/main4/8.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <p>
                    <span>电脑办公 </span>
                    <span>科技潮物 惠享不停</span>
                  </p>
                  <img src="../assets/img/main4/9.webp" alt="" />
                  <img src="../assets/img/main4/10.webp" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="min-imgs">
          <ul>
            <li>
              <a href="">
                <p>
                  <span>企业购 </span>
                  <span>一站式企业采购平台</span>
                </p>
                <img src="../assets/img/main4/11.webp" alt="" />
                <img src="../assets/img/main4/12.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>汽车生活 </span>
                  <span>放心养车 爱车无忧</span>
                </p>
                <img src="../assets/img/main4/13.webp" alt="" />
                <img src="../assets/img/main4/14.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>食品饮料 </span>
                  <span>吃货嘉年华</span>
                </p>
                <img src="../assets/img/main4/15.webp" alt="" />
                <img src="../assets/img/main4/16.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>LXM国际 </span>
                  <span>一站尽享进口好物</span>
                </p>
                <img src="../assets/img/main4/17.webp" alt="" />
                <img src="../assets/img/main4/18.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>Joy寻宝 </span>
                  <span>懂你的Joy</span>
                </p>
                <img src="../assets/img/main4/21.webp" alt="" />
                <img src="../assets/img/main4/22.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>新机发布 </span>
                  <span>有新机更有范</span>
                </p>
                <img src="../assets/img/main4/23.webp" alt="" />
                <img src="../assets/img/main4/24.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>家用电器 </span>
                  <span>买家电 上LXM</span>
                </p>
                <img src="../assets/img/main4/25.webp" alt="" />
                <img src="../assets/img/main4/26.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>LXM京造 </span>
                  <span>LXM自有品牌</span>
                </p>
                <img src="../assets/img/main4/27.webp" alt="" />
                <img src="../assets/img/main4/28.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>运动城 </span>
                  <span>生命在于运动</span>
                </p>
                <img src="../assets/img/main4/31.webp" alt="" />
                <img src="../assets/img/main4/32.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>LXM超市 </span>
                  <span>一站式囤 生活好物</span>
                </p>
                <img src="../assets/img/main4/33.webp" alt="" />
                <img src="../assets/img/main4/34.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>个护清洁馆 </span>
                  <span>欢洗四季 洁净生活</span>
                </p>
                <img src="../assets/img/main4/35.webp" alt="" />
                <img src="../assets/img/main4/36.webp" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <p>
                  <span>中外名酒 </span>
                  <span>享全球美酒 品美好生活</span>
                </p>
                <img src="../assets/img/main4/37.webp" alt="" />
                <img src="../assets/img/main4/38.webp" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      ref="backTopBtn"
      class="backTop"
      @mousemove="backT"
      @mouseout="backout"
      @click="returnTop"
      v-show="backTopShow"
    >
      <p>
        <img src="../assets/img/backTop.png" alt="" v-if="backShow" />
        <img src="../assets/img/backTop2.png" alt="" v-else />
      </p>
      <span>顶部</span>
    </div>
    <div class="showNavBar" v-show="showSearch">
      <div class="search2-left">
        <img src="../assets/img/6tu.png" alt="" />
        <div><i>LXM</i></div>
      </div>
      <div class="search-center1">
        <div class="center-input">
          <div class="from">
            <div>
              <input
                type="text"
                class="search-input"
                v-model="text"
                :placeholder="placeholder"
              />
              <i
                class="el-icon-circle-close"
                @click="deleteInput"
                v-show="deleteShow"
              ></i>
            </div>
            <div>
              <el-button>
                <img src="../assets/img/sousuo2.png" alt="" />
              </el-button>
            </div>
          </div>
          <div class="cate1">
            <a href="/shopping">
              <img src="../assets/img/cate.png" alt="" />
              <span>我的购物车</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 第五模块 -->
    <div class="recommend">
      <div class="text-center">
        <span>为你推荐</span>
      </div>
      <div class="recommend-nav  nav" v-if="menuShow">
        <ul>
          <li class="recommLi" v-for="(item, index) in menuList" :key="index">
            <span
              @click="clickSpan(index)"
              :class="[nowMenu == index ? 'recommLiClass' : '']"
              >{{ item[0] }}</span
            >
            <div>{{ item[1] }}</div>
            <span :class="[index == 5 ? '' : 'lastSpan']"></span>
          </li>
        </ul>
      </div>
      <!-- 固定定位菜单栏 -->
      <div class="recommend-nav  nav  recommend-nav1" v-else>
        <ul>
          <li class="recommLi" v-for="(item, index) in menuList" :key="index">
            <span
              @click="clickSpan(index)"
              :class="[nowMenu == index ? 'recommLiClass' : '']"
              >{{ item[0] }}</span
            >
            <div>{{ item[1] }}</div>
            <span :class="[index == 5 ? '' : 'lastSpan']"></span>
          </li>
        </ul>
      </div>
      <div class="recommend-Main">
        <home-demo-one v-show="nowMenu == 0"></home-demo-one>
        <home-demo-two v-show="nowMenu == 1"></home-demo-two>
        <home-demo-three v-show="nowMenu == 2"></home-demo-three>
        <home-demo-four v-show="nowMenu == 3"></home-demo-four>
        <home-demo-five v-show="nowMenu == 4"></home-demo-five>
        <home-demo-six v-show="nowMenu == 5"></home-demo-six>
      </div>
    </div>
    <div
      class="guan"
      @mousewheel="hander"
      v-show="guanShow"
      @touchmove="hander"
    >
      <div class="guanggao" v-show="guanShow">
        <img src="../assets/img/guanggao.webp" alt="" />
        <img
          src="../assets/img/delete.png"
          alt=""
          v-show="del"
          @click="delGuangao"
          @mouseover="guanImg"
          :class="['imgless', guangI ? 'imgless1' : '']"
        />
        <a href="/login" v-show="del">
          <span class="guanSpan" :class="[loginS ? 'guanSpan12' : '']"
            >更多优惠 请登录LXM</span
          >
        </a>
        <p class="guanP" v-show="del">
          <span>{{ seconds }} </span>
          <span> 秒后跳过</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { fn } from "../assets/js/setTime.js";
import HomeDemoOne from "../components/homeChildren/HomeDemo1";
import HomeDemoTwo from "../components/homeChildren/HomeDemo2";
import HomeDemoThree from "../components/homeChildren/HomeDemo3";
import HomeDemoFour from "../components/homeChildren/HomeDemo4";
import HomeDemoFive from "../components/homeChildren/HomeDemo5";
import HomeDemoSix from "../components/homeChildren/HomeDemo6";

export default {
  name: "Home",
  updated() {
    //删除图标是否显示
    this.deleteSh();
    this.hiddenScroll();
    //返回顶部
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
    window.addEventListener("scroll", this.showNavscroll);
    window.addEventListener("scroll", this.menuScroll);
    // this.hiddenScroll();
    // this.preventMove();
  },
  data() {
    // document.documentElement.style.overflowY = "hidden";
    setInterval(() => {
      this.jdShow = !this.jdShow;
    }, 3000);
    let count = 0;
    setInterval(() => {
      this.placeholder = this.placeholderS[count++];
      if (count == 7) {
        count = 0;
      }
    }, 5000);
    setInterval(() => {
      this.backTime();
    }, 1000);
    setInterval(() => {
      this.xianshilan();
    }, 3000);
    setTimeout(() => {
      this.del = true;
    }, 18000);
    let Time = setTimeout(() => {
      this.guanShow = true;
      this.guanShowPl = false;
      clearTimeout(Time);
    }, 16000);
    let timers = setInterval(() => {
      this.seconds = this.min--;
      if (this.seconds == 0) {
        this.guanShow = false;
        clearInterval(timers);
      }
    }, 1000);
    setTimeout(() => {
      setInterval(() => {
        this.loginS = !this.loginS;
      }, 1000);
    }, 18000);
    return {
      jdShow: true,
      //输入框值
      text: "",
      //删除图标隐藏
      deleteShow: false,
      placeholder: "键鼠套装",
      placeholderS: [
        "键鼠套装",
        "美度手表",
        "机械魔方",
        "天地壹号",
        "格力空调",
        "海贼王手办",
        "伊利牛奶",
      ],
      //精灵图切换
      rightShow: true,
      h: "00",
      m: "00",
      s: "00",
      tab: ["精选", "美食", "百货", "个护"],
      currentTab: 0,
      //返回顶部
      backShow: true,
      //返回顶部图标显示
      backTopShow: false,
      //显示隐藏的搜索框
      showSearch: false,

      //第五模块菜单
      menuList: [
        ["精选", "猜你喜欢"],
        ["智能先锋", "大电器城"],
        ["居家优品", "品质生活"],
        ["超市百货", "百货生鲜"],
        ["时尚达人", "美妆穿搭"],
        ["进口好物", "LXM国际"],
      ],
      //选定当前菜单
      nowMenu: 0,
      //隐藏菜单栏
      menuShow: true,
      menuArr: [
        "/jinxuan",
        "/xianfeng",
        "/youping",
        "/baihuo",
        "/daren",
        "/haowu",
      ],
      kuaibao: [
        "美的智能与互联...",
        "小户家庭保,...",
        "外出旅行,...",
        "探索奇幻,奇...",
        "lxM秒杀即将开始..",
        "汽车用品大促销..",
        "双十一最优活动价..",
        "旅行专用雨衣...",
        "新年最低价限购...",
        "童装大优惠限购...",
        "回力鞋大回归全场..",
        "戴尔电脑灵越5000...",
      ],
      kuai: "美的智能与互联...",
      kuai1: "小户家庭保,...",
      kuai2: "外出旅行,...",
      kuai3: "探索奇幻,奇...",
      i: 0,
      i1: 1,
      i2: 2,
      i3: 3,
      del: false,
      guanShow: false,
      guanShowPl: true,
      guangI: true,
      seconds: "",
      min: 35,
      loginS: true,
    };
  },
  components: {
    HomeDemoOne,
    HomeDemoTwo,
    HomeDemoThree,
    HomeDemoFour,
    HomeDemoFive,
    HomeDemoSix,
  },
  computed: {
    // comSpan(index) {
    //   return this.nowmMenu == index;
    // },
  },
  methods: {
    //界面正在开发中
    develop() {
      this.$message({
        duration: 6000,
        type: "warning",
        message: "此界面功能正在开发中！😊红色字体部分已开发完成，可点击",
      });
    },
    //请先登录
    plus() {
      this.$message.info("请先登录");
      this.$router.push("./login");
    },
    //删除搜索框中的内容
    deleteInput() {
      this.text = "";
    },
    deleteSh() {
      if (this.text !== "") {
        this.deleteShow = true;
      } else {
        this.deleteShow = false;
      }
    },

    // 倒计时
    backTime() {
      this.h = fn()[0];
      this.m = fn()[1];
      this.s = fn()[2];
    },
    //鼠标经过
    liover(index) {
      this.currentTab = index;
    },
    //返回顶部
    backT() {
      this.backShow = false;
    },
    backout() {
      this.backShow = true;
    },
    scrollTop() {
      // console.log(document.body.scrollTop);
      //window.pageYOffset:滚动时 当前可视区的上边栏到可滚动区域的上边栏的距离
      // console.log(window.pageYOffset)
      let scroll = window.pageYOffset;
      if (scroll >= 1400 - 429.33) {
        this.backTopShow = true;
        // this.$refs.backTopBtn.style.position = "fixed";
      } else {
        this.backTopShow = false;
      }
      // console.log(document.documentElement.scrollTop);
    },
    returnTop() {
      // console.log(this.$refs.backTopBtn.offsetTop);
      // console.log(window.pageYOffset)

      let timer = setInterval(() => {
        let speed = document.documentElement.scrollTop / 5;
        document.documentElement.scrollTop -= speed;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    //显示隐藏的搜索框
    showNavscroll() {
      if (window.pageYOffset >= 400) {
        this.showSearch = true;
      } else {
        this.showSearch = false;
      }
    },

    //点击第五模块菜单
    clickSpan(index) {
      this.nowMenu = index;
      this.$router.push(this.menuArr[index]);
    },

    //隐藏菜单
    menuScroll() {
      // if(window.pageYOffset)
      if (window.pageYOffset >= 2300) {
        this.menuShow = false;
      } else {
        this.menuShow = true;
      }
    },
    //显示栏
    xianshilan() {
      this.kuai = this.kuaibao[this.i++];

      this.kuai1 = this.kuaibao[this.i1++];

      this.kuai2 = this.kuaibao[this.i2++];

      this.kuai3 = this.kuaibao[this.i3++];

      if (this.i >= this.kuaibao.length) {
        this.i = 0;
      }
      if (this.i1 >= this.kuaibao.length) {
        this.i1 = 0;
      }
      if (this.i2 >= this.kuaibao.length) {
        this.i2 = 0;
      }
      if (this.i3 >= this.kuaibao.length) {
        this.i3 = 0;
      }
    },
    //删除广告
    delGuangao() {
      this.guanShow = false;
      this.guanShowPl = true;
    },
    //禁止鼠标滚轮滚动
    // preventMove() {
    //   if (this.guanShow) {
    //     document.addEventListener("wheel", this.hander);
    //   } else {
    //     document.removeEventListener("wheel", this.hander);
    //   }
    // },
    //阻止window事件对象默认行为
    hander(e) {
      e.preventDefault();
    },
    //隐藏滚动条
    // stop() {
    //   if (this.guanShow) {
    //     document.body.onmousewheel = function() {
    //       return false;
    //     };
    //   } else {
    //     document.body.onmousewheel = function() {
    //       return true;
    //     };
    //   }
    // },
    hiddenScroll() {
      if (this.guanShow) {
        //隐藏滚动条
        document.documentElement.style.overflowY = "hidden";
      } else {
        //显示滚动条
        document.documentElement.style.overflowY = "scroll";
      }
    },
    guanImg() {
      this.guangI = false;
    },
  },
};
</script>
<style scoped>
b {
  cursor: pointer;
}
a:hover {
  color: red;
}
.navBar {
  height: 40px;
  background-color: #e3e4e5;
  padding: 0 200px;
}
.nav-text {
  height: 40px;
  /* background-color: red; */
  line-height: 40px;
  font-size: 14px;
  display: flex;
}
.line {
  margin: 0 10px;
  color: #cccccc;
  font-size: 7px;
}
a {
  text-decoration: none;
  color: #999999;
}
.nav-text a:hover {
  color: red;
}
.dingwei {
  display: flex;
}
.dingwei img {
  margin-top: 13px;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.navRight {
  margin-left: 300px;
  display: flex;
}
.el-dropdown-link {
  cursor: pointer;
  color: #999999;
}
.el-dropdown-link:hover {
  color: red;
}
.el-icon-arrow-down {
  font-size: 12px;
}

/* ------------------------------------ */
/* 搜索内容区 */
.search {
  height: 150px;
  background-color: #ffffff;
  padding: 0 120px;
}
.search-text {
  position: relative;
  height: 100%;
  padding: 0 30px;
  overflow: hidden;
}
.search-left {
  width: 100px;
  margin-top: 10px;
  margin-left: 40px;
  color: green;
  font-size: 28px;
  font-weight: 700;
}
.search-left img {
  width: 80px;
  height: 80px;
  margin-top: 12px;
}

.search-center {
  position: absolute;
  top: 0;
  left: 0;
  width: 990px;
  height: 80px;
  /* background-color: blue; */
}
.center-input {
  /* background-color: red; */
  height: 42px;
  width: 490px;
  margin: 37px auto 0;
  border: 2px solid red;
  box-sizing: border-box;
}
.from {
  height: 38px;
  width: 486px;

  /* position: relative; */
  display: flex;
}
.from div:first-child {
  position: relative;
  width: 87%;
  height: 100%;
  box-sizing: border-box;
  padding: 5px 15px;
  /* background-color: brown; */
}
.from div:last-child {
  width: 13%;
  height: 100%;
  /* background-color: chartreuse; */
}
.search-input {
  position: relative;
  margin-top: 3px;
  width: 100%;
  height: 70%;
  outline: none;
  border: 0;
}
.search-input::-webkit-input-placeholder {
  color: #999999;
  font-size: 8px;
}
.from i {
  position: absolute;
  top: 11px;
  right: 8px;
}
.el-button {
  height: 100%;
  width: 100%;
  border-radius: 0;
  border: 0;
  background-color: red;
}
.el-button img {
  width: 20px;
  height: 20px;
  margin-top: -3px;
}

.cate {
  position: absolute;
  top: 37px;
  right: 88px;
  width: 135px;
  height: 42.5px;

  font-size: 12px;
  /* display: flex; */
  border: 1px solid #eeeeee;
}
.cate a {
  height: 42px;
  width: 135px;
  position: relative;
}
.cate a img {
  position: absolute;
  top: 0px;
  left: 21px;
  width: 17px;
  height: 18px;
}
.cate a span {
  display: inline-block;
  margin-top: 13px;
  margin-left: 48px;
  color: #e46453;
  font-weight: 550;
}
.erweima {
  position: absolute;
  right: -60px;
  top: 30px;

  width: 110px;
  height: 75px;
}
.erweima img {
  width: 80px;
  height: 75px;
}
.search-bottom {
  position: absolute;
  left: 242px;
  bottom: 8px;
  width: 700px;
  height: 40px;
}
.search-bottom ul {
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
}
.search-bottom ul li a {
  color: black;
}
.search-bottom ul li a:hover {
  color: red;
}
.search-bottom .miaosha {
  font-weight: 700;
  color: red;
}
/* --------------------主内容区--------------------- */
.mainer {
  width: 100%;
  height: 1000px;
  background-color: #f4f4f4;
}
.swiper {
  height: 480px;
  width: 990px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 10px;
}
.swiper-left {
  box-sizing: border-box;
  /* padding-left: 19px; */
  width: 190px;
  height: 470px;
  background-color: #fefefe;
}
.swiper-left ul {
  display: flex;
  flex-direction: column;

  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
}
.swiper-left ul li {
  box-sizing: border-box;
  padding-left: 19px;
  height: 25px;
}
.swiper-left ul li:hover {
  background-color: #d9d9d9;
}
.swiper-left ul li a {
  color: #636363;

  font-size: 14px;
}
.swiper-left ul li a:hover {
  color: red;
}
.swiper-center {
  width: 590px;
  height: 470px;
}
.swiper-right {
  width: 190px;
  height: 470px;
}

/* -------------轮播图样式 ------*/
.swiper-center .el-carousel {
  width: 590px;
  height: 480px;
  /* overflow: hidden; */
}
.swiper-center .el-carousel .el-carousel-item img {
  width: 590px;
  height: 470px;
}
.swiper-center .el-carousel /deep/ .el-carousel__container {
  height: 100%;
}
.swiper-center .el-carousel /deep/ .el-carousel__indicators--outside {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 30px;
}
.swiper-center .el-carousel /deep/ .el-carousel__button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
.swiper-center .el-carousel /deep/ .el-carousel__indicators--outside button {
  background-color: white;
  box-shadow: 0 0 5px 4px #666;
}

/* ============================================ */
/* 右边区 */

.rightOne {
  height: 102px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.rightOne div:first-child {
  flex: 2;
  box-sizing: border-box;
  padding: 15px 21px;
  display: flex;
  font-size: 12px;
  color: #666666;
}
.rightOne div:first-child img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.login1 {
  /* display: flex; */
  position: relative;
  left: 6px;
}
.login1 p {
  position: absolute;
  top: 12px;
  left: 5px;
}
.login1 p span {
  display: inline-block;
  padding: 0 5px;
}
.login1 p a:hover {
  color: red;
}
.rightOne div:nth-of-type(2) {
  flex: 1;
  box-sizing: border-box;
  padding: 0 5px 8px;

  display: flex;
  justify-content: space-around;
}
.rightOne div:nth-of-type(2) a {
  width: 75px;
  height: 25px;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
}
.rightOne div:nth-of-type(2) a:first-child {
  background-color: red;
  border-radius: 13px;
  color: white;
}
.rightOne div:nth-of-type(2) a:last-child {
  background-color: black;
  border-radius: 13px;
  color: #e5d790;
}
.rightOne div:nth-of-type(2) a:last-child:hover {
  background: red;
}
.rightTwo {
  box-sizing: border-box;
  height: 130px;
  padding: 12px 16px 2px 16px;
  background-color: #ffffff;
}
.rightTwo div:first-child {
  height: 30px;
}
.rightTwo div:first-child .span {
  font-size: 14px;
  font-weight: 700;
}
.rightTwo div:first-child a {
  font-size: 12px;
  margin-left: 60px;
}
.rightTwo div:last-child {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 88px;
  font-size: 12px;
}
.rightTwo div:last-child a span:first-child {
  color: red;
  background-color: #fdeeed;
  margin-right: 8px;
  padding: 1px 4px;
}
.rightThree {
  height: 238.5px;
  background-color: #ffffff;
  overflow: hidden;
}
.rightThree ul {
  height: 100%;
  margin-top: 0.5px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  align-content: space-around;
}
.rightThree ul a {
  padding: o;
  width: 63px;
  height: 55px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #333333;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-around;
}

.rightThree ul img {
  width: 28px;
  height: 28px;
}
.xian {
  width: 60%;
  margin: 0 auto;
  height: 1px;
  background-color: #eeeeee;
}
.rightThree ul a:hover {
  color: red;
}

/* ---------------------------------------- */
/* 主内容2区 */
.swiper2 {
  margin: 35px 0 25px 0;
  height: 260px;
}
.swiper2-main {
  display: flex;
  width: 990px;
  height: 100%;
  margin: 0 auto;
}
.main-left {
  position: relative;
  width: 190px;
  height: 100%;

  background: url("../assets/img/jd3.png") no-repeat;
}
.program {
  position: absolute;
  top: 40px;
  left: 34px;
  font-size: 30px;
  color: #ffffff;
}
.timeWalk {
  position: absolute;
  left: 32px;
  top: 170px;
  color: white;
}
.timeWalk span:nth-of-type(1) {
  font-size: 18px;
  font-weight: 700;
}
.timeWalk span:nth-of-type(2) {
  font-size: 15px;
}
.dingshi {
  height: 30px;
  width: 130px;
  position: absolute;
  left: 32px;
  bottom: 24px;

  display: flex;
}
.dingshi span:nth-child(2n + 1) {
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.dingshi span:nth-child(2n + 2) {
  width: 20px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 26px;
  font-weight: 700;
}
.main-center {
  width: 610px;
  height: 100%;
  background-color: #ffffff;
  overflow: hidden;
}

.a {
  display: inline-block;
  padding: 28px 15px;
  /* display: flex;
  justify-content: center; */
  height: 100%;
  width: 33.333%;

  text-align: center;
  box-sizing: border-box;
}
.a p {
  font-size: 12px;
  color: black;
}

.ap {
  overflow: hidden;
  width: 160px;
  height: 24px;
  padding: 0;
  line-height: 24px;
  background-color: #f4f4f4;
  margin-top: 15px;
}
.ap span:first-child {
  display: inline-block;
  font-size: 16px;
  color: white;
  font-weight: 700;
  width: 95px;
  height: 24px;
  background: #e1251b;
  /* margin-right: 2px; */
}
.ap span:last-child {
  display: inline-block;

  width: 65px;
  text-decoration: line-through;
  color: #999999;
}
.a .ap span:last-child:hover {
  color: #999999;
}
.img1 {
  width: 140px;
  height: 140px;
}
.main-center .el-carousel /deep/ .el-carousel__arrow--right {
  margin-right: -27px;
}
.main-center .el-carousel /deep/ .el-carousel__arrow--left {
  margin-left: -27px;
}
.main-right {
  width: 190px;
  height: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-top: 28px;
  font-weight: 700;
}
.main-right img {
  margin: 0 25px;
  width: 140px;
  height: 140px;
}
.main-a p:nth-of-type(1) {
  position: absolute;
  font-size: 12px;
  color: #333;
  left: 26px;
  bottom: 35px;
  z-index: 2;
}
.main-a span {
  position: absolute;
  font-size: 13px;
  color: #e1251b;
  text-shadow: 0, 0, 8px red;
  /* margin-left: 27px; */
  left: 24px;
  bottom: 18px;
  z-index: 2;
}
.main-div {
  position: relative;
  width: 100%;
  height: 100%;
}
.main-div div {
  background: linear-gradient(to bottom, white 10%, #f2f4f8 60%);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 90px;
  width: 100%;
  z-index: 1;
}
.main-three {
  height: 305px;
  width: 990px;
  margin: 0 auto;
  display: flex;
}
.three-one {
  height: 100%;
  width: 490px;
  margin-right: 10px;
  overflow: hidden;
}
.one-nav {
  height: 60px;
  padding: 0 20px;
  background-color: #ffffff;
  display: flex;
  line-height: 50px;
  position: relative;
}
.one-nav span {
  color: #333333;
  font-size: 24px;
  font-weight: 700;
}
.nav-right {
  width: 207px;
  position: absolute;
  right: 5px;
  top: -13px;
}
.nav-right ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  font-size: 14px;
}
.active {
  color: red;
  border-bottom: 2px solid red;
}
.one-main {
  height: 245px;
  padding: 0 10px 10px;
  background-color: #ffffff;
}
.tabone {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
}
.tabone a {
  flex: 1;
  margin: 5px;
  background-color: #f8f8f9;
}
.tabone a:first-child {
  position: relative;
}
.price {
  background-color: #f7a400;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 94px;
  height: 24px;
  color: white;
  font-size: 12px;
  line-height: 24px;
}
.tabone a img {
  margin: 40px 23.3px 0;
  height: 100px;
  width: 100px;
}
.tabone a p:nth-of-type(1) {
  font-size: 14px;
  margin: 8px 0 4px;
}
.tabone a p:nth-of-type(2) span:first-child {
  font-size: 18px;
  color: red;
}
p {
  margin: 3px 0;
}
.tabone a p:nth-of-type(2) span:last-child {
  font-size: 12px;
  text-decoration: line-through;
  color: #999999;
}
.tabone a p:nth-of-type(3) {
  font-size: 12px;
  color: #999999;
}
.tabone a p:nth-of-type(3) span:nth-of-type(2) {
  color: red;
}
.three-two {
  position: relative;
  height: 100%;
  width: 490px;
  background-color: #ffffff;
}
.two-one {
  padding: 0 20px;
  height: 60px;
  line-height: 50px;
}
.two-one p {
  font-size: 24px;
  color: #333;
  font-weight: 700;
}
.large-img {
  padding-top: 25px;
  box-sizing: border-box;
  text-align: center;
  height: 235px;
  width: 230px;
  margin: 0 0 10px 10px;
  background-color: #f9fcf9;
}
.large-img img {
  height: 110px;
  width: 110px;
}
.large-img .img-a p:nth-of-type(1) {
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 700;
  color: black;
}
.large-img .img-a p:nth-of-type(2) {
  margin-bottom: 11px;
  font-size: 12px;
  color: #999999;
}
.six-imgs {
  position: absolute;
  right: 14px;
  top: 20px;
  height: 278px;
  width: 230px;
  background-color: #ffffff;
}
.six-imgs ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.six-imgs ul li {
  width: 115px;
  height: 88px;

  box-sizing: border-box;
}
.six-imgs ul li:nth-of-type(2n + 1) a {
  border-right: 1px solid #f0f0f0;
}
.six-imgs ul a {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #666666;
}
.six-imgs img {
  width: 80px;
  height: 40px;
  margin-bottom: 5px;
}
.text-center {
  margin-top: 28px !important;
  margin-bottom: 24px !important;
  width: 990px;
  height: 45px;
  margin: 0 auto;
  text-align: center;
  line-height: 45px;
  font-size: 28px;
  font-weight: 700;
}
.text-center span::before {
  content: "";
  display: inline-block;
  margin-right: 20px;
  width: 25px;
  height: 20px;
  background: url("../assets/img/shopping1.png") no-repeat 0 0;
  background-size: 50px 20px;
}
.text-center span::after {
  content: "";
  display: inline-block;
  margin-left: 20px;
  width: 25px;
  height: 20px;
  background: url("../assets/img/shopping1.png") no-repeat -25px 0;
  background-size: 50px 20px;
}
.shopping {
  width: 990px;
  height: 1790px;
  /* background-color: #e5d790; */
  margin: 0 auto;
}
.shop-one {
  width: 990px;
  height: 306px;
  display: flex;
}
.one-large {
  justify-content: space-between;
}
.one-large a {
  margin-right: 10px;
}
.one-large img {
  width: 240px;
  height: 306px;
}
.one-less {
  padding: 0;
  width: 490px;
  height: 306px;
}
.one-less ul {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.one-less ul li {
  width: 240px;
  height: 148px;
  background-color: #ffffff;
  margin: 0;
  padding-left: 30px;
  box-sizing: border-box;
}
.one-less ul li:nth-of-type(-n + 2) {
  /* margin: 0 10px 10px 0; */
  margin-bottom: 9px;
}
.one-less ul li:nth-of-type(2n + 1) {
  margin-right: 10px;
}
.one-less img {
  width: 75px;
  height: 75px;
  margin-right: 21px;
}
.one-less a p {
  margin-top: 20px;
  margin-bottom: 9px;
}
.one-less a p span:first-child {
  font-size: 18px;
  color: #333333;
  font-weight: 700;
}
.one-less a p span:last-child {
  font-size: 12px;
  color: #999999;
}
.min-imgs {
  height: 474px;
  width: 990px;
}
.min-imgs ul {
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.min-imgs ul li {
  width: 240px;
  height: 148px;
  padding-left: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
}

.min-imgs img {
  width: 75px;
  height: 75px;
  margin-right: 21px;
}
.min-imgs a p {
  margin-top: 20px;
  margin-bottom: 9px;
}
.min-imgs a p span:first-child {
  font-size: 18px;
  color: #333333;
  font-weight: 700;
}
.min-imgs a p span:last-child {
  font-size: 12px;
  color: #999999;
}
.backTop {
  position: fixed;
  right: 50px;
  top: 400px;
  width: 58px;
  height: 65px;
  background-color: white;
  color: #e1251b;
  text-align: center;
  cursor: pointer;
}
.backTop:hover {
  background-color: #c81623;
  color: white;
}
.backTop p img {
  margin-top: 10px;
  width: 26px;
  height: 26px;
  margin-bottom: -7px;
}
.showNavBar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  z-index: 1000;
  border-bottom: 2px solid #f10214;
}
.search2-left {
  height: 100px;

  margin-left: 150px;
  display: flex;
}
.showNavBar .search2-left img {
  margin-top: 5px;
  width: 60px;
  height: 38px;
}
.search2-left div {
  margin-left: 3px;

  margin-top: 10px;
  color: green;
  font-size: 26px;
  font-weight: 600;
}
.search-center1 {
  margin-top: -27px;
  margin-left: 120px;
  /* line-height: 52px; */
  width: 480px;
}
.search-center1 i {
  margin-top: -3px;
}
.search-center1 .search-input {
  height: 50%;
  line-height: -10px;
}
.search-center1 .center-input {
  height: 35px;
}
.search-center1 .from {
  height: 31px;
}
.search-center1 .from div:first-child {
  padding-top: 3px;
}
.search-center1 .el-button img {
  width: 15px;
  height: 15px;
  margin-top: -10px;
}
.cate1 {
  position: absolute;
  top: 9px;
  right: 200px;
  width: 135px;
  height: 34px;
  font-size: 8px;
  /* display: flex; */
  border: 1px solid #eeeeee;
}
.cate1 a img {
  position: absolute;
  top: 8px;
  left: 21px;
  width: 17px;
  height: 18px;
}
.cate1 a span {
  display: inline-block;
  margin-top: 8px;
  margin-left: 48px;
  color: #e46453;
  font-weight: 550;
}

/* -----------------推荐模块-------------- */

.recommend {
  margin: 1015px auto 20px;
  height: 700px;
  width: 990px;
}
.recommend-nav {
  height: 60px;
  width: 100%;
  background-color: #ffffff;
}
.nav ul {
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0 45px;
  display: flex;
}
.recommLi {
  position: relative;
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recommLi span:first-child {
  display: inline-block;
  font-size: 16px;
  height: 27px;
  width: 80px;
  font-weight: 600;
  text-align: center;
  line-height: 27px;
  margin-top: 6px;
  margin-bottom: 2px;
  border-radius: 50px;
  color: #333333;
  cursor: pointer;
}
.recommLi span:first-child:hover {
  color: red;
}
ul .recommLi div {
  font-size: 14px;
  color: #999999;
  cursor: pointer;
}
.recommLi div:hover {
  color: red;
}
.lastSpan {
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 0;
  height: 40px;
  width: 1px;
  background: linear-gradient(180deg, white, #dfdfdf 51%, white);
}
.recommLiClass {
  background-color: #e1251b;
  color: white !important;
}

/* 固定菜单栏 */
.recommend-nav1 {
  position: fixed;

  top: 54px;
  left: 0px;
  padding-left: 136px;
  width: 1263.33px;
  z-index: 1000;
  box-shadow: 0 3px 4px #cbcbcb;
  transition: all 0.5s;
}
.guan {
  position: fixed;
  height: 630px;
  width: 100%;
  background-color: transparent;
  left: 0;
  top: 0;
  z-index: 2000;
}
.guanggao {
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 15px;

  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  z-index: 100;
}
.guanggao img:first-child {
  border-radius: 15px;
  animation: move 1s;
  width: 100%;
  height: 100%;
}
.imgless {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
}
.imgless1 {
  animation: shu 3s;
}
.imgless:hover {
  animation: moveimg 3s;
}
@keyframes moveimg {
  0% {
    transform: translate(0) rotate(1800deg);
  }
}
@keyframes move {
  0% {
    transform: scale(0);
  }

  10% {
    transform: scale(0.1);
  }
  20% {
    transform: scale(0.2);
  }
  30% {
    transform: scale(0.3);
  }
  40% {
    transform: scale(0.4);
  }
  50% {
    transform: scale(0.5);
  }
  60% {
    transform: scale(0.6);
  }
  70% {
    transform: scale(0.7);
  }
  80% {
    transform: scale(0.8);
  }
  90% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes shu {
  0% {
    transform: rotate(36deg) translate(100px);
  }
  /* 10% {
    transform: rotate(72deg) translateX(300px);
  }
  20% {
    transform: rotate(108deg) translateX(200px);
  }
  30% {
    transform: rotate(144deg) translateX(200px);
  }
  40% {
    transform: rotate(180deg) translateX(100px);
  }
  50% {
    transform: rotate(216deg) translateX(200px);
  }
  60% {
    transform: rotate(252deg) translateX(200px);
  }
  70% {
    transform: rotate(288deg) translateX(100px);
  }
  80% {
    transform: rotate(324deg) translateX(200px);
  }
  90% {
    transform: rotate(360deg) translateX(200px);
  } */
  70% {
    transform: rotate(800deg) translate(50px);
  }
  100% {
    transform: rotate(0) translate(0);
  }
}
/* 隐藏滚动条 */
/* ::-webkit-scrollbar {
  overflow-x: hidden;
} */
.guanP {
  position: absolute;
  top: 7px;
  right: 38px;
}
.guanSpan {
  position: absolute;
  top: 35px;
  left: 60px;
  transform: rotate(-15deg);
  /* animation: span 1s; */
  color: blueviolet;
  text-shadow: 1px 1px 3px blueviolet;
  font-size: 30px;
}
.guanSpan12 {
  animation: span 1s;
}
@keyframes span {
  0% {
    transform: scale(1.3) rotate(-15deg);
  }
  50% {
    transform: scale(1.5) rotate(-15deg);
  }
  100% {
    transform: scale(1) rotate(-15deg);
  }
}
</style>
