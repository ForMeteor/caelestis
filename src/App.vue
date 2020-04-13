<template>
  <div id="app">
    <topNav v-if="true"></topNav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- 顶部标题栏？ -->
    <router-view/>
    <botNav v-if="botNavShow"></botNav>
  </div>
</template>
<script>
import botNav from '@/components/botNav.vue'
import topNav from '@/components/topNav.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    botNav,
    topNav
  },
  computed: {
    botNavShow () {
      return this.$store.state.botNavShow
    }
  },
  mounted () {},
  methods: {}
}

</script>
<style lang="stylus">
#app{
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin 0
  padding 0
}
.normal_back{
  background #e5e5e5
  position absolute
  top 64px
  left 0
  right 0
  bottom 0
  overflow hidden
  overflow-y scroll
}
.noTopNav_back{
  background #e5e5e5
  position absolute
  top 0px
  left 0
  right 0
  bottom 0
  overflow hidden
  overflow-y scroll
}
.normal_space{
  width 100%
  height 100px
}
.text_ctrl{
  overflow: hidden
  text-overflow:ellipsis
  white-space: nowrap
}
</style>
