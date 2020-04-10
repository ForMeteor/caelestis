<!--  -->
<template>
  <div>
    <div class="ele_wrap">
        <el-row :gutter="8" class="ele_i">
          <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row :gutter="8" class="ele_i">
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
    </div>
    <div class="home_bg_menu">
        <div class="home_bg_menu_wrap">
          <div class="home_bg_menu_wrap_item2 home_bg_menu_bg1"></div>
          <div class="home_bg_menu_wrap_item1 home_bg_menu_bg2"></div>
        </div>
        <div class="home_bg_menu_wrap">
          <div class="home_bg_menu_wrap_item1 home_bg_menu_bg3"></div>
          <div class="home_bg_menu_wrap_item1 home_bg_menu_bg4"></div>
          <div class="home_bg_menu_wrap_item1 home_bg_menu_bg5"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      value: true
    }
  },
  components: {},

  computed: {},

  mounted () {},

  methods: {
    next () {
      if (this.active++ > 2) this.active = 0;
    }
  }
}

</script>
<style  scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ECA72D
}
.bg-purple-light {
  background: #EC2DAF;
}
.grid-content {
  border:1px dashed black;
  height: 100px;
}
.ele_wrap{
  width :345px;
  height :225px;
  padding: 7.5px;
  background: #e5e5e5;
}
.ele_i{
  margin-top:5px
}
.home_bg_menu{
width :345px;
height :225px;
padding: 7.5px;
margin: auto;
background: #ffffff;
border:1px solid black
}
.home_bg_menu_bg1{
  background: url('~@/assets/home/bg1.png') no-repeat center;
  background-size:100% 100%;
}
.home_bg_menu_bg2{
background: url('~@/assets/home/bg2.png') no-repeat center;
background-size :100% 100%
}
.home_bg_menu_bg3{
background: url('~@/assets/home/bg3.png') no-repeat center;
background-size: 100% 100%
}
.home_bg_menu_bg4{
background: url('~@/assets/home/bg4.png') no-repeat center;
background-size: 100% 100%
}
.home_bg_menu_bg5{
  background: url('~@/assets/home/bg5.png') no-repeat center;
  background-size: 100% 100%
}
</style>
