<template>
  <div class="normal_back" ref="mainbox">
    <transition-group name="nav">
      <div class="home_top" v-show="nor" :key="1">Test</div>
      <div class="home_top2" v-show="!nor" :key="2">Caelestis</div>
    </transition-group>
    <div class="home_nav">
      <div class="home_navitem home_navitem1"></div>
      <div class="home_navitem home_navitem2"></div>
      <div class="home_navitem home_navitem1"></div>
      <div class="home_navitem home_navitem2"></div>
    </div>
    <swiper :data='imgData'></swiper>
    <!-- <div class="home_pic"></div> -->
    <div class="home_menu">
      <!-- @click="begin" -->
      <div class="home_item">
        <div class="home_item_img home_item_img1"></div>
        <div class="home_item_text">AAAAA</div>
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
      <!-- @click="toy" -->
      <div class="home_item">
        <div class="home_item_img home_item_img5"></div>
        <div class="home_item_text">EEEEE</div>
      </div>
      <div class="home_item" @click="animate">
        <div class="home_item_img home_item_img6"></div>
        <div class="home_item_text">canvas</div>
      </div>
      <div class="home_item" @click="docu">
        <div class="home_item_img home_item_img7"></div>
        <div class="home_item_text">Component</div>
      </div>
      <!-- @click="charts" -->
      <div class="home_item">
        <div class="home_item_img home_item_img8"></div>
        <div class="home_item_text">HHHHH</div>
      </div>
    </div>
    <div class="home_bot">
      <div class="home_bot_item"></div>
      <div class="home_bot_item"></div>
      <div class="home_bot_item"></div>
      <div class="home_bot_item"></div>
    </div>
    <div class="normal_space"></div>
  </div>
</template>

<script>
import { HomeSwiperUrl } from '@/common/constant'
import swiper from '@/components/swiper'
export default {
  name: 'home',
  components: {
    swiper
  },
  data () {
    return {
      imgData: HomeSwiperUrl,
      scroll: 0,
      nor: true,
      count: 0,
      timer: 'tttttt',
      showPop: false,
      dia: {}
    }
  },
  mounted () {
    // 图片过大加载缓慢
    // +防抖
    this.$store.commit('pageChange', 'ooooppp')
    console.log(this.$store.state.pageName)
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
    animate () {
      this.$router.push('ball')
    },
    toy () {
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
    },
    distance () {
      return window.scrollTop()
    }
  },
  watch: {
  }
}
</script>
<style lang="stylus" scoped>
.home_top
  position fixed
  z-index 99
  top 0
  left 0
  width 100%
  height 60px
  font-size 18px
  line-height 60px
  text-align center
  background #3980EF
.home_top2
 position fixed
 z-index 99
 top 0
 left 0
 width 100%
 height 60px
 font-size 18px
 line-height 60px
 text-align center
 background #5687EA
.home_nav
 margin-top 60px
 width 100%
 height 160px
 display flex
 background #ffffff
 .home_navitem
  flex 1
  height 160px
 .home_navitem1
  background url('~@/assets/home/girl.png') center no-repeat
  background-size 35px 35px
 .home_navitem2
  background url('~@/assets/home/boy.png') center no-repeat
  background-size 35px 35px
wid
.home_pic
  margin 0 auto
  width 100% 
  height 200px
  border 1px solid black
  background url('~@/assets/logo.png') no-repeat center
.home_menu
 margin-top 16px
 margin 0 auto
 width 100%
 height 160px
 background #ffffff
 border-radius 10px 10px 10px 10px
 display flex
 flex-flow row wrap
 justify-content space-between
 .home_item
  flex 0 0 25%
  height 80px
  position relative
  .home_item_img
   position absolute
   left 0
   right 0
   top 10px
   margin auto
   width 35px
   height 35px
  .home_item_img1
    background url('~@/assets/menu/1.png') center no-repeat
    background-size 100%
  .home_item_img2
    background url('~@/assets/menu/2.png') center no-repeat
    background-size 100%
  .home_item_img3
    background url('~@/assets/menu/3.png') center no-repeat
    background-size 100%
  .home_item_img4
    background url('~@/assets/menu/4.png') center no-repeat
    background-size 100%
  .home_item_img5
    background url('~@/assets/menu/5.png') center no-repeat
    background-size 100%
  .home_item_img6
    background url('~@/assets/menu/6.png') center no-repeat
    background-size 100%
  .home_item_img7
    background url('~@/assets/menu/7.png') center no-repeat
    background-size 100%
  .home_item_img8
    background url('~@/assets/menu/8.png') center no-repeat
    background-size 100%
  .home_item_text
   position absolute
   top 50px
   width 100%
   text-align center
   font-size 13px
.home_bot
 margin-top 10px
 width 100%
 height 600px
 display flex
 flex-direction column
 align-items center
 .home_bot_item
  width 320px
  height 120px
  margin 10px 0
  border-radius 5px
  background #fff
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
