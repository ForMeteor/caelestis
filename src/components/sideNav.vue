<!--  -->
<template>
  <div class="sideNav">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sideNav',
  data () {
    return {
      isCollapse: true,
      enviro: document.body.clientWidth
    }
  },

  components: {},

  computed: {
  },
  watch: {
    enviro (v) {
      console.log(v)
      if (v >= 500) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    }
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        this.enviro = document.body.clientWidth
        // that.screenWidth = window.screenWidth
      })()
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
}
}

</script>
<style scoped>
.sideNav{
    position: fixed;
    left: 0;top: 0;bottom: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;height: 100%;
    /* min-height: 400px; */
  }
</style>
