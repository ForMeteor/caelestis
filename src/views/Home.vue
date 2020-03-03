<template>
  <div class="normal_back">
    <!-- 永远存在的顶栏 -->
    <div></div>
    <div class="home_pic">
      <img :src='`$(publicPath)img/icons/8.png`'>
    </div>
    <div class="home_menu">
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">一</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">二</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">三</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">四</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">五</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">六</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">七</div>
      </div>
      <div class="home_item">
        <div class="home_item_img"></div>
        <div class="home_item_text">八</div>
      </div>
    </div>
    <div class="home_btn" @click="begin">开始游戏</div>
    <button  @click="showMenu">侧栏</button>
    <div>{{timer|filterA|filterB}}</div>
    <div>{{count|decimalTwo}}</div>
    <Dice></Dice>
    <div class="wrapbox" v-show="showNav">
      <Menutree :data="data"></Menutree>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Dice from '@/components/Dice.vue'
import Menutree from '@/components/Menutree.vue'
// import back from 'public/img/icons/8.png'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    Dice,
    Menutree
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      count: 0,
      timer: 'tttttt',
      showNav: false,
      dia: {},
      data: [
        {
          title: '1.1',
          level: 1,
          ifOpen: false,
          children: [ {
            title: '1.1.1',
            ifOpen: false,
            level: 2,
            children: [
              {
                title: '1.1.1.1',
                level: 3,
                ifOpen: false,
                children: []
              },
              {
                title: '1.1.1.2',
                level: 3,
                ifOpen: false,
                children: []
              }
            ]
          },
          {
            title: '1.1.2',
            ifOpen: false,
            level: 2,
            children: []
          },
          {
            title: '1.1.3',
            ifOpen: false,
            level: 2,
            children: []
          },
          {
            title: '1.1.4',
            level: 2,
            ifOpen: false,
            children: []
          },
          {
            title: '1.1.5',
            level: 2,
            ifOpen: false,
            children: []
          }]
        },
        {
          title:"1.2",
          ifOpen:false,
          level:1,
          children:[
            {
              title:"1.2.1",
              level:2,
              ifOpen:false,
              children:[]
            },
            {
              title:"1.2.2",
              level:2,
              ifOpen:false,
              children:[]
            }
          ]
        },
        {
          title:"1.3",
          level:1,
          ifOpen:false,
          children:[]
        },
        {
          title:"1.4",
          level:1,
          ifOpen:false,
          children:[]
        }, {
          title:"1.5",
          level:1,
          ifOpen:false,
          children:[]
        }, {
          title: '1.6',
          level: 1,
          ifOpen: false,
          children: []
        }]
    }
  },
  mounted () {
    console.log(this.publicPath)
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
    begin () {
      this.$router.push('firstroom')
    },
    add () {
      this.count++
      console.log(this.count)
    },
    showMenu () {
      this.showNav = !this.showNav
      // 子系延展置否？
    }
  }
}
</script>
<style lang="stylus" scoped>
.home_pic
  width 750px
  height 400px
  background #ff4443
.home_menu
 margin-top 16px
 width 750px
 height 320px
 background #4980FB
 border-radius 30px 30px 0 0
 display flex
 flex-flow row wrap
 justify-content space-between
 .home_item
  flex 0 0 25%
  height 160px
  position relative
  .home_item_img
   position absolute
   left 0
   right 0
   top 30px
   margin auto
   width 60px
   height 60px
   background red
   background-size 100%
  .home_item_text
   position absolute
   top 100px
   width 100%
   text-align center
.home_btn
  width 375px
  height 60px
  line-height 60px
  margin 50px auto
  background #BA909E
  text-align center
.wrapbox{
    position: absolute;
    left: 0;
    width: 160px;
    top: 0;bottom: 0;
    background: rgba(225,230,238,0.5);
}
</style>
