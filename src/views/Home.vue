<template>
  <div class="normal_back">
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
export default {
  name: 'home',
  components: {
    HelloWorld,
    Dice,
    Menutree
  },
  data() {
    return {
      count:0,
      timer:"tttttt",
      showNav:false,
      dia:{},
      data:[
      {
        title:"1.1",
        level:1,
        ifOpen:false,
        children:[{
          title:"1.1.1",
          ifOpen:false,
          level:2,
          children:[
            {
              title:"1.1.1.1",
              level:3,
              ifOpen:false,
              children:[]
            },
            {
              title:"1.1.1.2",
              level:3,
              ifOpen:false,
              children:[]
            }
          ]
        },
        {
          title:"1.1.2",
          ifOpen:false,
          level:2,
          children:[]
        },
        {
          title:"1.1.3",
          ifOpen:false,
          level:2,
          children:[]
        },
        {
          title:"1.1.4",
          level:2,
          ifOpen:false,
          children:[]
        },
        {
          title:"1.1.5",
          level:2,
          ifOpen:false,
          children:[]
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
      },{
        title:"1.5",
        level:1,
        ifOpen:false,
        children:[]
      },{
        title:"1.6",
        level:1,
        ifOpen:false,
        children:[]
      }]
    }
  },
  mounted() {
  },
  filters:{
    filterA:function (value) {
      return value+"AAA"
    },
    filterB:function (value) {
      return value+"BBB"
    }
  },
  methods: {
    begin(){
      this.$router.push("firstroom")
    },
    add(){
      this.count++;
      console.log(this.count)
    },
    showMenu(){
      this.showNav=!this.showNav
      //子系延展置否？
    }
  },
}
</script>
<style lang="stylus" scoped>
.home_btn
  width 200px
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
