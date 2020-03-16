<!--  -->
<template>
  <div>
      <div class="botWrap">
          <div class="botItem">
              <div class="botItem_img botItem_img1"></div>
              <div class="botItem_text botItem_text_in">A</div>
          </div>
          <div class="botItem">
              <div class="botItem_img botItem_img3"></div>
              <div class="botItem_text">B</div>
          </div>
          <div class="botItem">
              <div class="botItem_img botItem_img10"></div>
              <div class="botItem_text">C</div>
          </div>
          <div class="botItem">
              <div class="botItem_img botItem_img6"></div>
              <div class="botItem_text">D</div>
          </div>
          <div class="botItem">
              <div class="botItem_img botItem_img8"></div>
              <div class="botItem_text">E</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'botNav',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
.botWrap{
    position:fixed;
    display: flex;
    bottom: 0;
    left: 0;
    height:60px;
    width: 100%;
    background:#ffffff;
}
.botItem{
    flex: 1
}
.botItem_img{
    height: 40px;
    width: 100%;
}
.botItem_img1{
    background: url('~@/assets/menu/index.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img2{
    background: url('~@/assets/menu/inde.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img3{
    background: url('~@/assets/menu/park.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img4{
    background: url('~@/assets/menu/par.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img5{
    background: url('~@/assets/menu/ser.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img6{
    background: url('~@/assets/menu/serve.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img7{
    background: url('~@/assets/menu/mine.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img8{
    background: url('~@/assets/menu/user.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img9{
    background: url('~@/assets/menu/sha.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_img10{
    background: url('~@/assets/menu/share.png') center no-repeat;
    background-size: 25px 25px
}
.botItem_text{
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 100%;
}
.botItem_text_in{
    color: #93B4FD
}
</style>
