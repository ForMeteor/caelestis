<!--  -->
<template>
  <div class="navv_wrap" @click="menuCtrl">
    <div class="navv_top"></div>
    <div class="navv_mid">
      <div @click="showMenu">侧栏</div>
    </div>
    <div class="navv_bot"></div>
    <div class="wrapbox" v-show="showNav">
      <Menutree :data="data"></Menutree>
    </div>
  </div>
</template>

<script>
import { MenuData } from '@/common/constant'
import Menutree from '@/components/Menutree.vue'
export default {
  name: 'navv',
  data () {
    return {
      showNav: false,
      data: MenuData
    }
  },
  components: {
    Menutree
  },
  computed: {},
  mounted () {},
  methods: {
    showMenu () {
      this.showNav = !this.showNav
    },
    menuCtrl () {
      console.log('in')
    }
  }
}

</script>
<style  scoped>
.wrapbox{
    position: fixed;
    left: 0;
    width: 120px;
    top: 0;bottom: 0;
    /* background: rgba(225,230,238,0.5); */
}
.navv_wrap{
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
}
.navv_top{
  width: 300px;
  background: #e5e5e5;
  flex: 0.2
}
.navv_mid{
  width: 300px;
  background: rgb(170, 168, 168);
  flex: 0.5
}
.navv_bot{
  width: 300px;
  background: rgb(39, 39, 39);
  flex: 0.2
}
</style>
