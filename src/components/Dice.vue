<!-- 骰子动画 -->
<template>
  <div>
    <!-- <div id="cav"  :style = "{background:'url('+arr[2]+') no-repeat'}"></div> -->
    <div id="cav"  :style = "{border:'red'}"></div>
    <div id="cav"  :style = "{backgroundImage:`url(${require('./animate/six/'+img)})`}"></div>
    <button  @click="start">开始</button>
    <button  @click="stop">停止</button>
  </div>
</template>
<script>
export default {
  name:"dice",
  data () {
    return {
      img:  't1.jpg',
      te:[
        'fire1.png',
        'fire2.png',
        'fire3.png',
        'fire4.png',
        'fire5.png',
        'fire6.png',
      ],
      arr:[
        't1.jpg',
        't2.jpg',
        't3.jpg',
        't4.jpg',
        't5.jpg',
        't6.jpg',
      ],
      arr2:[
        './animate/fire/fire1.png',
        './animate/fire/fire2.png',
        './animate/fire/fire3.png',
        './animate/fire/fire4.png',
        './animate/fire/fire5.png',
        './animate/fire/fire6.png',
      ],
      imgWrap:[
        'imgsrc1',
        'imgsrc2',
        'imgsrc3',
        'imgsrc4',
        'imgsrc5',
        'imgsrc6'
      ],
      data:[],
      progress:0,
      timer:0,
    };
  },
  components: {},
  computed: {},
  mounted(){
  },

  methods: {
    preloadImg(arr){
      for(let i =0; i< arr.length ;i++) {
          this.imgWrap[i] = new Image();
          this.imgWrap[i].src = arr[i];
          this.data.push(
              new Promise( (resolve, reject)=> {
                  this.imgWrap[i].onload=function(){
                      resolve("p"+i)
                  }
              })
          )
      }
      console.log(this.data)
    },
    render() {
        this.img=this.arr[this.progress];
        this.progress += 1; //修改图像的位置
        console.log( this.progress)
        if (this.progress < 6) {
            this.timer=window.requestAnimationFrame(this.render);
        }else{
            this.progress=0;
            this.timer=window.requestAnimationFrame(this.render); 
        }
    },
    start(){
        console.log("开始")
        window.requestAnimationFrame(this.render);
    },
    stop(){
        window.cancelAnimationFrame(this.timer)
    }
  }
}

</script>
<style  scoped>
#cav{
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background:url("./animate/fire/fire1.png") no-repeat center;
  background-size: 100%;
}
#tes{
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background:url("./animate/six/t1.jpg");
  background-size: 100%;

}
</style>