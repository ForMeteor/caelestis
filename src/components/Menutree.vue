<!--  -->
<template>
  <div>
    <ul class="wrap" :style="{paddingLeft:calLeft+'px'}">
      <li v-for="r in data" :key="r.title" class="wrapLi">
        <div class="wrapLi_bold">
          <div class="wrapLi_icon" @click="showNext(r)"></div>
          <span class="wrapLi_text text_ctrl"  @click="showNext(r)" v-if="r.level==3">
            <router-link :to="{path:r.title}">{{r.title|filterA}}</router-link>
          </span>
          <span class="wrapLi_text text_ctrl"  @click="showNext(r)" v-if="r.level!=3">{{r.title|filterA}}</span>
          <div class="wrapLi_tool"></div>
        </div>
        <ul v-if="r.children.length>0" v-show="r.ifOpen">
          <menutree :data="r.children"></menutree>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menutree',
  props: ['data'],
  data () {
    return {
      calWidth: 180,
      calLeft: 0
    }
  },
  components: {},
  computed: {},
  mounted () {
    // +渐变展开
    // this.calWidth = this.calWidth - (this.data[0].level - 1) * 20
    if (this.data[0].level > 1) {
      this.calLeft = 20
    }
    console.log(this.$el)
  },
  filters: {
    filterA: function (value) {
      return value + '-XXX'
    }
  },
  methods: {
    showNext (r) {
      r.ifOpen = !r.ifOpen
    }
  }
}

</script>
<style  scoped>
ul{
  padding: 0;
  margin: 0;
}
li{
  padding: 0;
  margin: 0;
}
li:hover{
  cursor: pointer;
}
.wrapbox{
    position: fixed;
    left: 0;
    width: 140px;
    top: 0;bottom: 0;
    background: rgba(225,230,238,0.5);
}
.wrap{
  width: 140px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.wrapLi{
  text-align: left;
}
.wrapLi_bold{
  display: flex;
  line-height: 20px;
  width: 100%;
  height: 20px;
}
.wrapLi_icon{
  width: 20px;height:20px;
  flex: 0 0 20px;
  background:black;
}
.wrapLi_text{
  /* text-indent: 10px; */
  /* flex: 1 1 auto; */
  padding: 0 10px;
  width: 60px
}
.wrapLi_tool{
  flex: 0 0 20px;
  width: 20px;height:20px;
  background:yellowgreen;
}
</style>
