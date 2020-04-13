<!--  -->
<template>
  <div class="navv_wrap">
    <!-- <navTop></navTop> -->
    <div class="navv_top">
      <!-- <div class="navv_top_menu">
        <div class="navv_top_menu_item">1</div>
        <div class="navv_top_menu_item">2</div>
        <div class="navv_top_menu_item">3</div>
        <div class="navv_top_menu_item">4</div>
      </div> -->
      <div class="navv_button" @click="showMenu" v-show="!showNav">menu</div>
      <div class="navv_button" @click="showMenu" v-show="showNav">close</div>
    </div>
    <div class="navv_mid">
      <router-view></router-view>
    </div>
    <div class="navv_bot" @click="backHome">
      <!-- <router-view></router-view> 多个routerview +name-->
    </div>
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
  computed: {
    trueName: function () {
      return this.$store.getters.trueName
    }
  },
  mounted () {
    // ruoyi test
    // 左侧动态路由加入
    // 跳转引入 addrouter？
    // 跳转接login界面？权限动态路由
    // 3处组件增加
    console.log(this.trueName)
  },
  methods: {
    showMenu () {
      this.showNav = !this.showNav
    },
    backHome () {
      this.$router.push('home')
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
    background: rgba(225,230,238,0.5);
}
.navv_button{
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: #80aeeb;
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
  flex: 0.2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navv_top_menu{
  position: absolute;
  top:0;left: 0;
  width: 100%;height: 30px;line-height: 30px;
  background: #b8bbbb;
  display: flex;
}
.navv_top_menu_item{
  flex: 1;
  text-align: center
}
.navv_mid{
  width: 300px;
  background: rgb(199, 197, 197);
  flex: 0.5;
}
.navv_bot{
  width: 300px;
  background: rgb(132, 194, 229);
  flex: 0.2
}
</style>
