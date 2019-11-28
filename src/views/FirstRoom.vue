<!--  -->
<template>
  <div class="normal_back" @click="diaPush()">
    <div class="first_btn" @click="battle">进入战斗</div>
    <Dialog :diaData="textInfo"></Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialogue.vue'
export default {
  name:"firstroom",
  data () {
    return {
      jug:true,
      textInfo:{
        id:"lili",
        loc:true,
        content:"yes it is"
      }
    };
  },
  components: {
    Dialog
  },

  computed: {},

  mounted(){
    console.log(this.$api.apiDiaJsonGet)
    this.$axios({
        method:'post',
        url:'api',
        data:this.qs.stringify({    //这里是发送给后台的数据
              userId:this.userId,
              token:this.token,
        })
    }).then((response) =>{          //这里使用了ES6的语法
        console.log(response)       //请求成功返回的数据
    }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
    })
  },

  methods: {
    diaPush(){
      console.log("下一句")
      this.jug=!this.jug
      this.textInfo={
        id:"lili",
        loc:this.jug,
        content:"yes it is"
      }
    },//对话进度推进
    battle(){
      this.$router.push({
         path:"battle",
         query:{
           id:1,
         }})
    }
  }
}

</script>
<style  scoped>
.first_btn{
  width: 100px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;left: 0;right: 0;
  bottom: 0;margin: auto;
  background: #78E632;
  user-select:none;
}
</style>