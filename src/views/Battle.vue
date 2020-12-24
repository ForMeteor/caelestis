<!--  -->
<template>
  <div class="normal_back">
      <div class="box_top"></div>
      <!-- 动画序列 -->
      <div class="bat_btn" @click="beat">砍</div>
      <div class="box_bot"></div>
      <!-- 出场角色 -->
  </div>
</template>

<script>
export default {
  name:"battle",
  data () {
    return {
    };
  },
  components: {},
  computed: {},
  mounted () {
    var id = this.$route.query.id
    console.log(id)
  },
  methods: {
    beat () {}
  }
}

</script>
<style  scoped>
.bat_btn{
  width: 100px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;left: 0;right: 0;
  bottom: 0;margin: auto;
  background: #DD291D;
  user-select:none;
}
.box_top{
    width: 240px;
    height: 200px;
    border: 1px solid black;
    position: absolute;
    left: 0;right: 0;margin: auto;
    top:50px;
}
.box_bot{
    width: 240px;
    height: 200px;
    border: 1px solid black;
    position: absolute;
    left: 0;right: 0;margin: auto;
    bottom:50px;
}
</style>