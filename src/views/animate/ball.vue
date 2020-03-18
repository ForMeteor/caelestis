<!--  -->
<template>
  <div class="normal_back">
      <canvas id="myCanvas" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'ball',
  data () {
    return {
      textPx: '',
      ballData: [],
      width: '',
      height: ''
    }
  },

  components: {},

  computed: {},
  mounted () {
    // WebGL
    // +返回
    // 适配 + 图层覆盖
    this.canvasInit()
  },
  methods: {
    canvasInit () {
      var canvas = document.getElementById('myCanvas')
      var ctx = canvas.getContext('2d')
      this.width = window.innerWidth
      this.height = window.innerHeight
      canvas.width = this.width
      canvas.height = this.height
      this.creatBalls()
      this.drawBalls(ctx)
      var timer = setInterval(() => {
        this.moveBalls(ctx)
        this.drawBalls(ctx)
      }, 10)
      const lay1 = document.createElement('canvas')
      const lay1Context = lay1.getContext('2d')
      lay1Context.fillStyle = '00ff00'
      lay1Context.fillRect(10, 10, 40, 40)
    },
    creatBalls () {
      for (let i = 0; i < 100; i++) {
        var r = this.getMath(2, 15)
        var rx = this.getMath(-5, 5) === 0 ? 1 : this.getMath(-5, 5)
        var ry = this.getMath(-5, 5) === 0 ? 1 : this.getMath(-5, 5)
        var a = [
          this.getMath(r, this.width - r),
          this.getMath(r, this.height - r),
          r,
          this.color(),
          rx,
          ry
        ]
        this.ballData.push(a)
      }
    },
    drawBalls (ctx) {
      ctx.clearRect(0, 0, this.width, this.height)
      var r = this.ballData
      for (let i = 0; i < r.length; i++) {
        ctx.beginPath()
        ctx.arc(r[i][0], r[i][1], r[i][2], 0, 2 * Math.PI)
        ctx.fillStyle = r[i][3]
        ctx.fill()
      }
    },
    moveBalls () {
      for (let i = 0; i < this.ballData.length; i++) {
        this.ballData[i][0] = this.ballData[i][0] + this.ballData[i][4]
        this.ballData[i][1] = this.ballData[i][1] + this.ballData[i][5]
        var realwidth1 = this.ballData[i][0] + this.ballData[i][2]
        var realwidth2 = this.ballData[i][0] - this.ballData[i][2]
        var realheight1 = this.ballData[i][1] + this.ballData[i][2]
        var realheight2 = this.ballData[i][1] - this.ballData[i][2]
        if (realwidth1 >= this.width || realwidth2 <= 0) {
          this.ballData[i][4] = -this.ballData[i][4]
        }
        if (realheight1 >= this.height || realheight2 <= 0) {
          this.ballData[i][5] = -this.ballData[i][5]
        }
      }
    },
    getMath (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)       
      // Math.floor(Math.random()*(max-min)+1);//1-10
    },
    color () { // rgb颜色随机  npm引入自定义方法
      var R = Math.floor(Math.random() * 256)
      var G = Math.floor(Math.random() * 256)
      var B = Math.floor(Math.random() * 256)
      // var color = '#'+R.toString(16)+G.toString(16)+B.toString(16);
      // return color;
      return 'rgba(' + R + ',' + G + ',' + B + ',0.7)'
    }
  }
}

</script>
<style  scoped>
</style>
