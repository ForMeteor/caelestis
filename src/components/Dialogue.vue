<!--  -->
<template>
  <div>
      <div v-if="diaData.loc" class="dia_top">
        <div>{{diaData.content}}</div>
        <div class="dia_top_img"></div>
      </div>
      <div v-if="!diaData.loc" class="dia_bot">
        <div>{{diaData.content}}</div>
        <div class="dia_bot_img"></div>
      </div>
  </div>
</template>

<script>
export default {
  name:"dialogue",
  props:["diaData"],
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style  scoped>
.dia_top{
  position: absolute;
  top: 0;
  left: 0;right: 0;
  height: 100px;
  border: 3px solid #ccc;
  background: rgba(45,118,243,0.6)
}
.dia_top_img{
  position: absolute;
  right: 0;top: 0;
  width: 80px;
  height: 100%;
  background: grey;
}
.dia_bot{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: rgba(45,118,243,0.6)
}
.dia_bot_img{
  position: absolute;
  left: 0;top: 0;
  width: 80px;
  height: 100%;
  background: grey;
}
</style>