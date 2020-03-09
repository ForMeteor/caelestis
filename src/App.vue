<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <botNav v-if="botNavShow"></botNav>
  </div>
</template>
<script>
import botNav from '@/components/botNav.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    botNav
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
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin 0
  padding 0
.normal_back
  background #ffffff
  position absolute
  top 0
  left 0
  right -18px
  bottom 0
  margin auto
  overflow-x: hidden
  overflow-y: scroll
.normal_back_add
  position relative
  overflow hidden
</style>
