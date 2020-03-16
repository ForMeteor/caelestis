<!--  -->
<template>
  <div class="swiper_wrap">
      <img v-for="(r,index) in data"
      :key="r"
      :src="r"
      class="swiper_item"
      @click="detail"
      v-show="num==index"/>
      <div class="swiper_ctrl">
        <div class="swiper_btn"
        v-for="(r,index) in data"
        :key="r"
        @click="chooseImg(index)"
        >
          <div class="swiper_btn_item" :class="{'swiper_btn_select':index==num}"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: ['data'],
  data () {
    return {
      num: 0,
      timer: 0
    }
  },
  components: {},
  computed: {},
  mounted () {
    this.autoPlay()
  },
  methods: {
    autoPlay () {
      this.timer = setInterval(() => {
        this.changeImg()
      }, 5000)
    },
    changeImg () {
      this.num++
      if (this.num === this.data.length) {
        this.num = 0
      }
    },
    chooseImg (r) {
      clearInterval(this.timer)
      this.num = r
      this.autoPlay()
    },
    detail () {
      console.log('go')
    }
  }
}

</script>
<style  scoped>
.swiper_wrap{
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
}
.swiper_item{
    width: 100%;
    height: 100%;
}
.swiper_ctrl{
    position: absolute;
    bottom: 10px;left: 0;right: 0;
    margin: auto;
    height: 40px;
    width: 30%;
    display: flex;
}
.swiper_btn{
    flex:1;
    position: relative;
}
.swiper_btn_item{
    position: absolute;
    bottom: 0;top: 0;left: 0;right: 0;
    margin: auto;
    width: 10px;height: 10px;
    border-radius: 50%;
    background: grey
}
.swiper_btn_select{
    background: #cccccc
}
/* change动画+++++*/
</style>
