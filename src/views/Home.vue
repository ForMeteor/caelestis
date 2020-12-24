<template>
  <div class="normal_back">
    <div class="home_bg">
      <div class="home_bg_notice text_ctrl">
        <div class="home_bg_notice_icon"></div>
        <div class="home_bg_notice_text">
          <div class="textMarq">公告：信息信息信息信息信息信息信息信息信息</div>
          <!-- <span class="textMarq2">公告：信息信息信息信息信息信息信息信息信息</span> -->
        </div>
      </div>
      <div class="home_bg_menu">
          <el-row :gutter="10" class="ele_i">
            <el-col :span="16"><div class="grid-content home_bg_menu_bg1" @click="lau"></div></el-col>
            <el-col :span="8"><div class="grid-content home_bg_menu_bg2" @click="animate"></div></el-col>
          </el-row>
          <el-row :gutter="10" class="ele_i">
            <el-col :span="8"><div class="grid-content home_bg_menu_bg3" @click="immature"></div></el-col>
            <el-col :span="8"><div class="grid-content home_bg_menu_bg4" @click="charts"></div></el-col>
            <el-col :span="8"><div class="grid-content2 home_bg_menu_bg5" @click="docu"></div></el-col>
          </el-row>
      </div>
    </div>
    <!-- <swiper :data='imgData'></swiper> -->
    <div class="normal_space">
    <el-button :plain="true" @click="openAlert">警告</el-button>
    </div>
  </div>
</template>

<script>
import { HomeSwiperUrl, ColorSwiperUrl } from '@/common/constant'
import swiper from '@/components/swiper'
export default {
  name: 'home',
  components: {
    // swiper
  },
  data () {
    return {
      imgData: ColorSwiperUrl // 轮播图地址
    }
  },
  mounted () {
    console.log(process.env.NODE_ENV)
    this.$axios.get('/api/a/linkData').then((res) => {
      console.log(res.data)
    }).catch()
    // 图片过大加载缓慢 图片懒加载
    // 滚动公告
    // navv 动态路由测试 权限控制
    // npm+ 引入 首页优化  echarts
    if (this.IsPC()) {
      this.openAlert()
    }
  },
  methods: {
    IsPC () {
      var userAgentInfo = navigator.userAgent
      var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      if (window.screen.width >= 768) {
        flag = true
      }
      return flag
    },
    openAlert () {
      this.$message({
        message: '建议改为移动端浏览',
        type: 'warning'
      })
    },
    // begin () {
    //   this.$router.push('firstroom')
    // },
    lau () {
      this.$router.push('lau')
    },
    animate () {
      this.$router.push('ball')
    },
    immature () {
      this.$router.push('toy')
    },
    charts () {
      this.$router.push('count')
    },
    docu () {
      this.$router.push('navv')
    }
  },
  computed: {
    pageName () {
      return this.$store.state.pageName
    }
  },
  watch: {
  }
}
</script>
<style lang="stylus" scoped>
.home_bg{
 position :relative
 width: 100%
 height: 281px
 background: url('~@/assets/home/bg.png') no-repeat center
 background-size :100%
 }
.home_bg_notice{
  position :absolute
  left :15px
  right: 15px
  bottom: 52px
  height: 16px
  line-height:16px;
  margin :auto;
  color:#FFFFFF;
}
.home_bg_notice_icon{
  position:absolute;
  left:0;top:2px;
  width:12px;
  height:12px;
  background:url("~@/assets/menu/tell.png")
  background-size:100%;
}
.home_bg_notice_text{
  position:absolute;
  left:20px;right:0;
  height:16px;
  overflow:hidden
}
.textMarq{
  position:absolute
  left:100%;
  width:100%;
  animation:textMove 10s linear infinite
}
@keyframes textMove{
  0%{transform: translateX(0);}
  100%{transform: translateX(-200%);}
}
 .home_bg_menu{
  position :absolute
  left: 15px
  right: 15px
  bottom :-201px
  height :225px
  padding: 7.5px
  margin :auto
  background: #ffffff
  }
  .ele_i{
    margin-top :7.5px
  }
   .grid-content{
    border :1px dashed black
    height :100px
    }
   .grid-content2{
    border :1px solid black
    height :100px
   }
   .home_bg_menu_bg1{
    background :url('~@/assets/home/bg1.png') no-repeat center
    background-size :100% 100%
    }
   .home_bg_menu_bg2{
    background :url('~@/assets/home/bg2.png') no-repeat center
    background-size :100% 100%
    }
   .home_bg_menu_bg3{
    background :url('~@/assets/home/bg3.png') no-repeat center
    background-size: 100% 100%
    }
   .home_bg_menu_bg4{
    background: url('~@/assets/home/bg4.png') no-repeat center
    background-size: 100% 100%
    }
   .home_bg_menu_bg5{
     background :url('~@/assets/home/bg5.png') no-repeat center
     background-size :100% 100%
    }
.home_nav{
 margin-top :60px
 width :100%
 height :160px
 display :flex
 background :#ffffff
}
.home_pic{
  margin: 0 auto
  width: 100%
  height: 200px
  border: 1px solid black
  background: url('~@/assets/logo.png') no-repeat center
}
.normal_space{
 width :100%
 height :270px
}
 .nav-enter,.nav-leave-to{
    opacity: 0;
}
.nav-enter-to,.nav-leave{
    opacity: 1;
}
.nav-enter-active,.nav-leave-active{
    transition: all 2s;
}

</style>
