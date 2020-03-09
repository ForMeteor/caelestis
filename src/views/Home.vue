<template>
  <div class="normal_back">
    <div class="normal_back_add">
      <!-- 永远存在的顶栏 -->
      <div :class="{'home_top':nor,'home_top2':!nor}"></div>
      <swiper :data='imgData'></swiper>
      <!-- <div class="home_pic"></div> -->
      <div class="home_menu">
        <div class="home_item" @click="begin">
          <div class="home_item_img home_item_img1"></div>
          <div class="home_item_text">destiny2</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img2" @click="change"></div>
          <div class="home_item_text">Witcher3</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img3"></div>
          <div class="home_item_text">warhammer</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img4"></div>
          <div class="home_item_text">Steep</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img5"></div>
          <div class="home_item_text">???</div>
        </div>
        <div class="home_item">
          <div class="home_item_img home_item_img6"></div>
          <div class="home_item_text">animate</div>
        </div>
        <div class="home_item" @click="docu">
          <div class="home_item_img home_item_img7"></div>
          <div class="home_item_text">component</div>
        </div>
        <div class="home_item" @click="charts">
          <div class="home_item_img home_item_img8"></div>
          <div class="home_item_text">echarts</div>
        </div>
      </div>
      <div class="home_bot">
        <img :src='imgData[0]'>
        <div>{{timer|filterA|filterB}}</div>
        <!-- <div>{{count|decimalTwo}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import constant from '@/common/constant'
import swiper from '@/components/swiper'
export default {
  name: 'home',
  components: {
    swiper
  },
  data () {
    return {
      imgData: constant.HomeSwiperUrl,
      scroll: 0,
      nor: true,
      count: 0,
      timer: 'tttttt',
      showPop: false,
      dia: {}
    }
  },
  mounted () {
    console.log(constant.HomeSwiperUrl)
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
  filters: {
    filterA: function (value) {
      return value + 'AAA'
    },
    filterB: function (value) {
      return value + 'BBB'
    }
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
    charts () {
      this.$router.push('charts')
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
 width 375px
 height 160px
 border-radius 30px 30px 0 0
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
   background-size 100%
  .home_item_img1
    background url('~@/assets/menu/1.png') center no-repeat
  .home_item_img2
    background url('~@/assets/menu/2.png') center no-repeat
  .home_item_img3
    background url('~@/assets/menu/3.png') center no-repeat
  .home_item_img4
    background url('~@/assets/menu/4.png') center no-repeat
  .home_item_img5
    background url('~@/assets/menu/5.png') center no-repeat
  .home_item_img6
    background url('~@/assets/menu/6.png') center no-repeat
  .home_item_img7
    background url('~@/assets/menu/7.png') center no-repeat
  .home_item_img8
    background url('~@/assets/menu/8.png') center no-repeat
  .home_item_text
   position absolute
   top 50px
   width 100%
   text-align center
   font-size 13px
.home_bot
 width 100%
 height 600px
 background #e5e5e5
</style>
