<template>
  <div class="normal_back" ref="mainbox">
    <transition-group name="nav">
      <div class="home_top" v-show="nor" :key="1">Test</div>
      <div class="home_top2" v-show="!nor" :key="2">Caelestis</div>
    </transition-group>
    <div class="home_bg">
      <div class="home_bg_notice">
        <div class="home_bg_notice_icon"></div>
        <div class="home_bg_notice_text"></div>
      </div>
      <div class="home_bg_menu">
          <el-row :gutter="10" class="ele_i">
            <el-col :span="16"><div class="grid-content home_bg_menu_bg1" @click="lau"></div></el-col>
            <el-col :span="8"><div class="grid-content home_bg_menu_bg2" @click="animate"></div></el-col>
          </el-row>
          <el-row :gutter="10" class="ele_i">
            <el-col :span="8"><div class="grid-content home_bg_menu_bg3" @click="immature"></div></el-col>
            <el-col :span="8"><div class="grid-content home_bg_menu_bg4" @click="charts"></div></el-col>
            <el-col :span="8"><div class="grid-content home_bg_menu_bg5" @click="docu"></div></el-col>
          </el-row>
      </div>
    </div>
    <!-- <swiper :data='imgData'></swiper> -->
    <!-- <div class="home_pic"></div> -->
    <!-- <div class="home_menu">
      <div class="home_item" @click="lau">
        <div class="home_item_img home_item_img1"></div>
        <div class="home_item_text">PC</div>
      </div>
      <div class="home_item">
        <div class="home_item_img home_item_img2" @click="change"></div>
        <div class="home_item_text">BBBBB</div>
      </div>
      <div class="home_item">
        <div class="home_item_img home_item_img3"></div>
        <div class="home_item_text">CCCCC</div>
      </div>
      <div class="home_item">
        <div class="home_item_img home_item_img4"></div>
        <div class="home_item_text">DDDDD</div>
      </div>
      <div class="home_item" @click="immature">
        <div class="home_item_img home_item_img5"></div>
        <div class="home_item_text">Immature</div>
      </div>
      <div class="home_item" @click="animate">
        <div class="home_item_img home_item_img6"></div>
        <div class="home_item_text">Canvas</div>
      </div>
      <div class="home_item" @click="docu">
        <div class="home_item_img home_item_img7"></div>
        <div class="home_item_text">Component</div>
      </div>
      <div class="home_item">
        <div class="home_item_img home_item_img8"></div>
        <div class="home_item_text">{{nextTick}}</div>
      </div>
    </div> -->
    <div class="normal_space">
    </div>
  </div>
</template>

<script>
import { HomeSwiperUrl, ColorSwiperUrl } from '@/common/constant'
import swiper from '@/components/swiper'
export default {
  name: 'home',
  components: {
    // swiper
  },
  data () {
    return {
      imgData: ColorSwiperUrl,
      scroll: 0,
      nor: true,
      count: 0,
      timer: 'tttttt',
      showPop: false,
      dia: {},
      nextTick: 'aa'
    }
  },
  mounted () {
    // 图片过大加载缓慢 图片懒加载
    // npm+ 引入 首页优化  echarts
    console.group()
    console.log(this.nextTick)
    this.nextTick = 'bbbbb'
    console.log(this.nextTick)
    this.$nextTick(function () {
      console.log(this.nextTick)
    })
    console.groupEnd()
    window.addEventListener('scroll', this.debounce(this.handleScroll, 200), true)
  },
  methods: {
    debounce (cb, waitTime, immediate) {
      var timeout
      return function () {
        clearTimeout(timeout)
        timeout = setTimeout(cb, waitTime)
      }
    },
    handleScroll () {
      this.scroll = this.$refs.mainbox.scrollTop
      if (this.scroll > 60) {
        this.nor = false
        console.log('改变')
      } else {
        this.nor = true
      }
      console.log(this.scroll)
    },
    begin () {
      this.$router.push('firstroom')
    },
    lau () {
      this.$router.push('lau')
    },
    animate () {
      this.$router.push('ball')
    },
    immature () {
      this.$router.push('toy')
    },
    charts () {
      this.$router.push('count')
    },
    docu () {
      this.$router.push('navv')
    },
    change () {
      console.log('change')
      this.showPop = !this.showPop
    },
    add () {
      this.count++
      console.log(this.count)
    }
  },
  computed: {
    pageName () {
      return this.$store.state.pageName
    }
  },
  watch: {
  }
}
</script>
<style lang="stylus" scoped>
.home_top{
  position: fixed
  z-index: 99
  top: 0
  left: 0
  width: 100%
  height :60px
  font-size: 18px
  line-height :60px
  text-align: center
  background :#3980EF
}
.home_top2{
 position: fixed
 z-index: 99
 top: 0
 left: 0
 width: 100%
 height :60px
 font-size :18px
 line-height: 60px
 text-align :center
 background :#5687EA
 }
.home_bg{
 margin-top: 60px
 position :relative
 width: 100%
 height: 281px
 background: url('~@/assets/home/bg.png') no-repeat center
 background-size :100%
 }
.home_bg_notice{
  position :absolute
  left :15px
  right: 15px
  bottom: 52px
  height: 16px
  margin :auto
  background :red
}
.home_bg_notice_icon{}
.home_bg_notice_text{}
 .home_bg_menu{
  position :absolute
  left: 15px
  right: 15px
  bottom :-201px
  height :225px
  padding: 7.5px
  margin :auto
  background: #ffffff
  }
  .ele_i{
    margin-top :5px
  }
   .grid-content{
    border :1px dashed black
    height :100px
    }
   .home_bg_menu_bg1{
    background :url('~@/assets/home/bg1.png') no-repeat center
    background-size :100% 100%
    }
   .home_bg_menu_bg2{
    background :url('~@/assets/home/bg2.png') no-repeat center
    background-size :100% 100%
    }
   .home_bg_menu_bg3{
    background :url('~@/assets/home/bg3.png') no-repeat center
    background-size: 100% 100%
    }
   .home_bg_menu_bg4{
    background: url('~@/assets/home/bg4.png') no-repeat center
    background-size: 100% 100%
    }
   .home_bg_menu_bg5{
     background :url('~@/assets/home/bg5.png') no-repeat center
     background-size :100% 100%
    }
.home_nav{
 margin-top :60px
 width :100%
 height :160px
 display :flex
 background :#ffffff
}
.home_pic{
  margin: 0 auto
  width: 100%
  height: 200px
  border: 1px solid black
  background: url('~@/assets/logo.png') no-repeat center
}
.normal_space{
 width :100%
 height :270px
}
 .nav-enter,.nav-leave-to{
    opacity: 0;
}
.nav-enter-to,.nav-leave{
    opacity: 1;
}
.nav-enter-active,.nav-leave-active{
    transition: all 2s;
}

</style>
