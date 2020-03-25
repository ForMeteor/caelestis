<!-- 前后台传值测试 -->
<template>
  <div class="toy_wrap">
      <!-- <Dice></Dice> -->
      <div class="toy_item" @click="sendP"></div>
      <div class="toy_item" @click="sendG"></div>
      <div class="toy_item"></div>
  </div>
</template>

<script>
import Dice from '@/components/Dice.vue'
export default {
  name: 'charts',
  data () {
    return {
    }
  },

  components: {
    // Dice
  },

  computed: {},

  mounted () {},

  methods: {
    sendP () {
      this.$axios.post('http://47.97.73.43:8000/log', {
        use: 'ax',
        pss: 'ip'
      }).then((res) => {
        console.log('res')
      }).catch()
    },
    sendG () {
      this.$axios.get('http://47.97.73.43:8000/info?name=lili&age=24').then((res) => {
        console.log('res')
      }).catch()
    }
  }
}

</script>
<style  scoped>
.toy_wrap{
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
}
.toy_item{
  width: 60%;height:80px;
  background: #2D52EC;
}
</style>
