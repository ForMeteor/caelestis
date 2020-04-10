<!--  -->
<template>
  <div>
      <div class="botWrap">
          <div class="botItem" @click="home">
              <div class="botItem_img" :class="{'botItem_img1':pageName==='home','botItem_img2':pageName!='home'}"></div>
              <div class="botItem_text" :class="{'botItem_text_in':pageName==='home'}">主页</div>
          </div>
          <div class="botItem" @click="settings">
              <div class="botItem_img" :class="{'botItem_img4':pageName==='settings','botItem_img3':pageName!='settings'}"></div>
              <div class="botItem_text" :class="{'botItem_text_in':pageName==='settings'}">设置</div>
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

  computed: {
    pageName: function () {
      return this.$store.state.pageName
    }
  },

  mounted () {
    // pageName
    console.log("-----------")
    console.log(this.pageName)
  },

  methods: {
    home () {
      if (this.pageName === 'home') { return }
      this.$router.push('home')
    },
    settings () {
      if (this.pageName === 'settings') { return }
      this.$router.push('settings')
    }
  }
}

</script>
<style  scoped>
.botWrap{
    position:fixed;
    display: flex;
    bottom: 0;
    left: 0;
    height:55px;
    width: 100%;
    background:#ffffff;
}
.botItem{
    flex: 1
}
.botItem_img{
    height: 36px;
    width: 100%;
}
.botItem_img1{
    background: url('~@/assets/menu/hoe.png') center no-repeat;
    background-size: 28px 28px
}
.botItem_img2{
    background: url('~@/assets/menu/user.png') center no-repeat;
    background-size: 28px 28px
}
.botItem_img3{
    background: url('~@/assets/menu/set.png') center no-repeat;
    background-size: 28px 28px
}
.botItem_img4{
    background: url('~@/assets/menu/set2.png') center no-repeat;
    background-size: 28px 28px
}
.botItem_text{
    height: 15px;
    line-height: 15px;
    text-align: center;
    width: 100%;
    color: #BDC7D9;
}
.botItem_text_in{
    color: #5D759C;
}
</style>
