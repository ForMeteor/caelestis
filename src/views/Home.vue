<template>
  <div class="normal_back">
    <div class="home_btn" @click="begin">开始游戏</div>
    <div>{{timer|filterA|filterB}}</div>
    <div>{{count|decimalTwo}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      count:0,
      timer:"tttttt",
      dia:{}
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
</style>
