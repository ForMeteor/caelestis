<!--  -->
<template>
  <div>
    <div class="topNav">
        <div class="topNav_icon" v-show="name != 'home'" @click="Back()">
          <i class="el-icon-arrow-left"></i>
        </div>
        {{name}}
    </div>
    <!-- <transition-group name="nav">
      <div class="home_top" v-show="nor" :key="1">Test</div>
      <div class="home_top2" v-show="!nor" :key="2">Caelestis</div>
    </transition-group> -->
  </div>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      scroll: 0,
      nor: true
    }
  },

  components: {},

  computed: {
    name: function () {
      return this.$store.state.pageName
    }
  },

  mounted () {
    // 顶栏显示筛选
    // 监听滚动+动画
    // window.addEventListener('scroll', this.debounce(this.handleScroll, 200), true)
  },

  methods: {
    Back () {
      // history.length>1 -1 :'/'
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
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
    }
  }
}

</script>
<style lang="stylus"  scoped>
.topNav{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height :64px;
  font-size: 18px;
  line-height :64px;
  text-align: center;
  background :#5D759C;
  color:#ffffff;
}
.topNav_icon{
    position:absolute;
    left:15px;
}
.topNav2{
 position: fixed;
 z-index: 99;
 top: 0;
 left: 0;
 width: 100%;
 height :64px;
 font-size :18px;
 line-height: 64px;
 text-align :center;
 background :#5687EA;
 }
</style>
