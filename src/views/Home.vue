<template>
  <div class="normal_back">
    <div class="">
      <!-- 永远存在的顶栏 滚动侧边栏？-->
      <div :class="{'home_top':nor,'home_top2':!nor}"></div>
      <swiper :data='imgData'></swiper>
      <!-- <div class="home_pic"></div> -->
      <div class="home_menu">
        <div class="home_item" @click="begin">
          <div class="home_item_img home_item_img1"></div>
          <div class="home_item_text">Destiny2</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img2" @click="change"></div>
          <div class="home_item_text">Witcher3</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img3"></div>
          <div class="home_item_text">Warhammer</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img4"></div>
          <div class="home_item_text">Steep</div>
        </div>
        <div class="home_item" @click="toy">
          <div class="home_item_img home_item_img5"></div>
          <div class="home_item_text">Game</div>
        </div>
        <div class="home_item" @click="animate">
          <div class="home_item_img home_item_img6"></div>
          <div class="home_item_text">Animate</div>
        </div>
        <div class="home_item" @click="docu">
          <div class="home_item_img home_item_img7"></div>
          <div class="home_item_text">Component</div>
        </div>
        <div class="home_item" @click="charts">
          <div class="home_item_img home_item_img8"></div>
          <div class="home_item_text">Echarts</div>
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
    console.log(HomeSwiperUrl)
    console.log(this.$route.name)
    console.log(this.$store.state.pageName)
    this.$store.commit('pageChange', 'ooooppp')
    console.log(this.$store.state.pageName)
    window.addEventListener('scroll', this.handleScroll, true)
    // this.$axios.get('http://caelestis.club:8000/linkData1').then((result)=>{
    //   console.log("path1")
    //   console.log(result)
    // })
    // this.$axios.get('http://caelestis.club:8000/linkData2').then((result)=>{
    //   console.log("path2")
    //   console.log(result)
    // })
  },
  methods: {
    handleScroll () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 60) {
        this.nor = false
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
    }
  }
}
</script>
<style lang="stylus" scoped>
.home_top
 width 100%
 height 60px
 background #5687EA
.home_top2
 position fixed
 top 0
 left 0
 width 100%
 height 60px
 background #e5e5e5
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

</style>
