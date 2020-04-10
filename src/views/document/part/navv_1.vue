<!--  -->
<template>
  <div class="app-container">
    <el-button type="primary" icon="search" size="mini">搜索</el-button>
    <el-row :gutter="0">
      <el-col :span="12" :offset="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="4">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter="4">
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter="4">
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navv_1',
  data () {
    return {
      data: '',
      visibleOptions: [1, 2, 3]
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
